import { Util } from "./Util";

export class Form {

	/**
	 * ambil data dari form dan ubah ke json
	 * @param form 
	 * @returns json object
	 */
	static form2Obj(form: HTMLFormElement): any {
		let formData: FormData = new FormData(form);
		let hasil: any = {};

		for (const key in formData.keys) {
			hasil.key = formData.get(key);
		}

		return hasil;
	}

	/**
	 * isi form otomatis dari object
	 * @param obj 
	 * @param form 
	 * @param excl field yang di exclude buat diisi manual
	 */
	static obj2Form(obj: any, form: HTMLFormElement, excl: string[]): void {
		// console.group('obj 2 array:');

		for (const key in obj) {
			let input: HTMLInputElement = form.querySelector(`input[name=${key}]`) as HTMLInputElement;

			if (!excl.includes(key)) {
				input.value = obj["key"];
			}
			else {
				// console.debug('excluded: ' + key);
			}

		}

		// console.groupEnd();
	}

	static getFieldByname(form: IForm, nama: string): IFormField {
		let hasil: IFormField;

		form.fields.forEach((item: IFormField) => {
			if (item.nama == nama) {
				hasil = item;
			}
		})
		return hasil;
	}

	/**
	 * buat form dari data
	 * @param data 
	 * @returns 
	 */
	static build(data: IForm): HTMLFormElement {
		let form: HTMLFormElement;

		form = document.createElement('form');

		data.fields.forEach((item: IFormField) => {
			let fieldEl: HTMLElement;

			fieldEl = FieldBuilder.build(item);
			form.appendChild(fieldEl);
		});

		let tbl: HTMLButtonElement = document.createElement('button');
		tbl.innerText = 'OK';
		tbl.type = 'submit';
		form.appendChild(tbl);

		form.onsubmit = (e) => {
			e.stopPropagation();
			e.preventDefault();

			try {
				data.submit().catch((e) => {
					throw Util.buatError('form submit error', e);
				});
			}
			catch (e) {
				throw Util.buatError('form submit error', e);
			}

		}

		return form;
	}

	/**
	* ubah form jadi form request, dan tombol dan fungsi
	* @param form
	* @param label
	* @param submit
	* @returns
	*/
	static buatFormReq(form: HTMLFormElement, label: string, submit: (form: HTMLFormElement) => Promise<void>): HTMLFormElement {

		let tbl: HTMLButtonElement;

		tbl = document.createElement('button');
		tbl.type = 'submit';
		tbl.innerText = label;

		form.appendChild(tbl);

		form.onsubmit = (e) => {
			try {
				e.stopPropagation();
				e.preventDefault();

				submit(form);
			}
			catch (e) {
				console.error(e);
			}
		}

		return form;
	}

	/**
	 * buat form dari list field
	 * @param label 
	 * @param fieldDiv 
	 * @returns 
	 */
	static buatForm(label: string, fieldDiv: HTMLElement): HTMLFormElement {
		let form: HTMLFormElement;

		form = document.createElement('form') as HTMLFormElement;

		let h3: HTMLHeadingElement = document.createElement('h3') as HTMLHeadingElement;
		h3.innerText = label;

		form.appendChild(h3);
		form.appendChild(fieldDiv);

		return form;
	}

	/**
	 * buat list field dari object
	 * @param obj 
	 * @param cont 
	 * @returns 
	 */
	static buildFieldFromObj(obj: any, cont: HTMLElement): HTMLElement {
		let hasil: HTMLElement;

		for (const key in obj) {
			if (typeof (obj["key"]) == "string") {
				cont.appendChild(this.buatField(key, obj["key"]));
			}
			else {
				//TODO: next
			}
		}

		return hasil;
	}

	static buatField(label: string, value: string): HTMLDivElement {
		let hasil: HTMLDivElement;
		let labelEl: HTMLLabelElement;
		let fieldEl: HTMLInputElement;

		hasil = document.createElement('div');

		labelEl = document.createElement('label');
		labelEl.innerText = label + ":";
		hasil.appendChild(labelEl);

		fieldEl = document.createElement('input');
		fieldEl.type = 'text';
		fieldEl.value = value;
		fieldEl.name = label;
		hasil.appendChild(fieldEl);

		return hasil;
	}
}

class FieldBuilder {

	static build(data: IFormField): HTMLElement {
		let hasil: HTMLDivElement;
		let label: HTMLLabelElement;
		let field: HTMLInputElement;

		hasil = document.createElement('div');

		label = document.createElement('label');
		label.innerText = data.label + ":";
		hasil.appendChild(label);

		field = document.createElement('input');
		field.type = data.type;
		field.value = data.value;
		field.name = data.nama;
		hasil.appendChild(field);

		data.view = hasil;

		return hasil;
	}
}

// interface IKV {
// 	key: string,
// 	value: string
// }

interface IForm {
	label: string,
	fields: IFormField[]
	submit: () => Promise<void>
}

interface IFormField {
	label: string,
	nama: string,
	type: string,
	value: string,
	view?: HTMLDivElement;
}


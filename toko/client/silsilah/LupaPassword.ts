import { dialog } from "../comp/Dialog";
import { Util } from "../comp/Util";
import { RouterKOns } from "./RouterKons";

let form: HTMLFormElement;
window.onload = () => {
    form = document.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            lupa(form).catch((e) => {
                console.error(e);
            })
        }
        catch (e) {
            console.error(e);
        }

    }
}

async function lupa(form: HTMLFormElement): Promise<void> {
    let formData: FormData = new FormData(form);

    let obj: any = Util.formData2Obj(formData)
    let str: string = JSON.stringify(obj);

    let res: XMLHttpRequest = await Util.Ajax('post', RouterKOns.lupa, str);

    if (200 == res.status) {
        dialog.tampil('ok');
    }
    else {
        throw Error(res.responseText);
    }

}
import { dialog } from "../comp/Dialog.js";
import { Util } from "../comp/Util.js";
import { Kons } from "./kons.js";

let form: HTMLFormElement;
window.onload = () => {
    console.log('mnk javascript login');
    form = document.querySelector('form');
    form.onsubmit = () => {
        try {
            let data: string = JSON.stringify(Util.formData2Obj(new FormData(form)));
            login(data).catch((e) => {
                Util.error(e);
            });
        }
        catch (e) {
            Util.error(e);
        }

        return false;
    }
}

async function login(data: string): Promise<void> {
    let hasil: XMLHttpRequest = await Util.Ajax('post', '/mnk/login', data);
    if (hasil.status == 200) {
        window.top.location.href = Kons.beranda;
    }
    else {
        dialog.tampil(hasil.responseText);
    }
}



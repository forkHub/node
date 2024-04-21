import { URL, urlRes } from "./store.js";
import { Util } from "./Util.js";

window.onload = () => {
    let form: HTMLFormElement = document.body.querySelector('form') as HTMLFormElement;

    form.onsubmit = (e) => {
        console.log('form on submit');

        e.stopPropagation();
        e.preventDefault();

        try {

            let xhr: XMLHttpRequest = new XMLHttpRequest();

            xhr.onload = () => {
                console.group('on load');
                console.log('status', xhr.status);
                console.log('response:', xhr.responseText);
                console.groupEnd();

                if (xhr.status == 401) {
                    Util.dialog(xhr.responseText);
                }
                else if (xhr.status == 200) {
                    let el = Util.dialog('login berhasil');
                    el.onclose = (e) => {

                        let str: string = xhr.responseText;
                        let obj: ILapak = JSON.parse(str);
                        console.log(obj);

                        if (obj.role == 1) {

                        }
                        else {
                            //beranda admin
                            window.top.location.href = urlRes.lapak(obj.id);
                        }


                    }
                }
            };

            xhr.onerror = (e: any) => {
                console.log('xhr on error');
                console.log(e);
                Util.dialog(e.message || e.type || "error");
            }

            let formData = new FormData(form);
            xhr.open("post", URL.auth_login, true);
            xhr.send(formData);
        }
        catch (e) {
            console.warn(e);
        }

        return false;
    }
}
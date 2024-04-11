export enum URL {
    auth_login = '/auth/login',
    auth_daftar = '/auth/daftar',
    auth_logout = '/auth/logout',

    toko = `/toko/`,
    barang = '/toko/barang/:id',

    gudang_daftar = "/toko/gudang/daftar",
    gudang_barang_baru = "/toko/gudang/barang/baru",
    gudang_barang_lihat = "/toko/gudang/barang/:id/lihat",
    gudang_barang_edit = "/toko/gudang/barang/:id/edit",
    gudang_barang_hapus = "/toko/gudang/barang/:id/hapus"
}

class Kons {
    readonly base: string = "http://localhost:3000";
    // readonly auth_login: string = `${this.base}:3000/auth/login`;

    readonly lapakProfile: (id: string) => string = (id: string): string => {
        return `${this.base}:3000/lapak/${id}/profile`;
    }
}


export const kons: Kons = new Kons();
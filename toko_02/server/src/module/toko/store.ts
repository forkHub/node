function defBarang(): IBarang[] {
    return [];
}

export const store = {
    barang: defBarang()
}

export enum URL {
    auth_login = 'auth/login',
    auth_baru = 'auth/daftar',
    auth_lupa = 'auth/lupa',
    auth_logout = 'auth/logout',

    toko = `/toko/`,
    barang = '/toko/barang/:id',

    //pelapak
    gudang_daftar = "/toko/gudang/daftar",
    gudang_barang_baru = "/toko/gudang/barang/baru",
    gudang_barang_lihat = "/toko/gudang/barang/:id/lihat",
    gudang_barang_edit = "/toko/gudang/barang/:id/edit",
    gudang_barang_hapus = "/toko/gudang/barang/:id/hapus"
}

export const urlRes = {
    toko: URL.toko,
    barang: (id: number): string => {
        return URL.barang.replace(':id', id + '');
    },
    gudang: {
        daftar: URL.gudang_daftar
    }
}
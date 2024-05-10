/**
 * ENUM buat url
 */
export enum URL {
    auth_login = '/auth/login',
    auth_baru = '/auth/daftar',
    auth_lupa = '/auth/lupa',
    auth_logout = '/auth/logout',

    //toko
    beranda = `/`,
    barang = '/barang/:id',
    lapak = '/lapak/:id',

    //pelapak
    pl_barang_daftar = "/toko/pl/barang/daftar",
    pl_barang_baru = "/toko/pl/barang/baru",
    pl_barang_lihat = "/toko/pl/barang/:id/lihat",
    pl_barang_edit = "/toko/pl/barang/:id/edit",    //include publish
    pl_barang_hapus = "/toko/pl/barang/:id/hapus",

    //pelapak foto
    pl_foto_upload = '/toko/pelapak/foto/upload'    //auto delete foto

    //admin

}

/**
 * Url Resolver
 */
export const urlRes = {
    toko: URL.beranda,
    lapak: (id: string): string => {
        return URL.lapak.replace(':id', id);
    },
    barang: (id: string): string => {
        return URL.barang.replace(':id', id);
    },
    gudang: {
        daftar: URL.pl_barang_daftar
    }
}
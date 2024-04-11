
export function nav(): string {
    console.log('nav()');

    return `
        <ul>
            <li>
                <b>auth:</b>
                <ul>
                    <li><a href="/auth/daftar">daftar anggota</a></li>
                    <li><a href="/auth/login">login</a></li>
                    <li><a href="/auth/baru">pendaftaran</a></li>
                    <li><a href="/auth/lupa">lupa password</a></li>
                </ul>
            </li>
            
        </ul>
    `;
}
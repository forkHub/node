class Kons {
    readonly base: string = "http://localhost";
    readonly login: string = `${this.base}:3000/auth/login`;
    readonly lapakProfile: (id: string) => string = (id: string): string => {
        return `${this.base}:3000/lapak/${id}/profile`;
    }
}

export const kons: Kons = new Kons();
export interface IAuthHandler {
    login(userName: string, password: string): Promise<ILapak[]>;
}
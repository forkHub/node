export interface IAuthHandler {
    login(userName: string, password: string): Promise<IUser[]>;
}
export class Idgen {
    private static _id: number = Date.now();

    public static get id(): number {
        Idgen._id++;
        return Idgen._id;
    }
}
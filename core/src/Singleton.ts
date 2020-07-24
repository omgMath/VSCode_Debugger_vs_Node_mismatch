export class Singleton {
    private values: number[] = [];

    public addValue(n: number) {
        this.values.push(n);
    }

    public getValues() {
        return this.values;
    }
}

export const s = new Singleton();
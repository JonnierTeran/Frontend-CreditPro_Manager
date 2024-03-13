import { CreditosModels } from "./credits-models";

export class ObservationsModels {

    //Atributos
    private code: number;
    private description: string;
    private title: string;
    private to_date: Date;
    private code_credits: CreditosModels;

    //Constructos
    public constructor(code: number, description: string, title: string, to_date: Date, code_credits: CreditosModels) {
        this.code = code;
        this.description = description;
        this.title = title;
        this.to_date = to_date;
        this.code_credits = code_credits;
    }

    //Getters y setters
    public setCode(code: number) {
        this.code = code;
    }

    public getCode(): number {
        return this.code;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getDescription(): string {
        return this.description;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTo_date(to_date: Date): void {
        this.to_date = to_date;
    }

    public getTo_date(): Date {
        return this.to_date;
    }

    public setCode_credits(code_credits: CreditosModels): void {
        this.code_credits = code_credits;
    }

    public getCode_credits(): CreditosModels {
        return this.code_credits;
    }

}
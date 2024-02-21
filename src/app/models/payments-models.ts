import { ThisReceiver } from "@angular/compiler";
import { CreditosModels } from "./credits-models";

export class PaymentsModels {

    //Atrubutos
    private reference: number;
    private count_payment: number
    private date_payment: Date;
    private code: number;
    private code_credits: CreditosModels;

    //Constructor
    public constructor(reference: number, count_payment: number, date_payment: Date, code: number, code_credits: CreditosModels) {
        this.reference = reference;
        this.count_payment = count_payment;
        this.date_payment = date_payment;
        this.code = code;
        this.code_credits = code_credits;
    }

    //Getters y setters
    public setReference(reference: number): void {
        this.reference = reference;
    }

    public getReference(): number {
        return this.reference;
    }

    public setCount_payment(count_payment: number): void {
        this.count_payment = count_payment;
    }

    public getCount_payment(): number {
        return this.count_payment;
    }

    public setDate_payment(date_payment: Date): void {
        this.date_payment = date_payment;
    }

    public getDate_payment(): Date {
        return this.date_payment;
    }

    public setCode(code: number): void {
        this.code = code;
    }

    public getCode(): number {
        return this.code;
    }

    public setCode_credits(code_credits: CreditosModels): void {
        this.code_credits = code_credits;
    }

    public getCode_credits(): CreditosModels {
        return this.code_credits;
    }
}
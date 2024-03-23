import { AdministratorModels } from "./administrator-models";
import { ClientsModels } from "./client-models";

export class CreditosModels {

    //Atributos
    private code: number;
    private observations: string;
    private renovated: boolean;
    private credit_amount: number;
    private finish_date: Date;
    private initial_date: Date;
    private interest: number;
    private status: string;
    private total_debt: number;
    private typeCredit:string;
    private id_admin: AdministratorModels;
    private id_client: ClientsModels;


    //Constructor
    public constructor(code: number, observations: string, renovated: boolean, credit_amount: number, finish_date: Date, initial_date: Date, interest: number, status: string, total_debt: number, typeCredit:string, id_admin: AdministratorModels, id_cliente: ClientsModels) {
        this.code = code;
        this.observations = observations;
        this.renovated = renovated;
        this.credit_amount = credit_amount;
        this.finish_date = finish_date;
        this.initial_date = initial_date;
        this.interest = interest;
        this.status = status;
        this.total_debt = total_debt;
        this.typeCredit = typeCredit;
        this.id_admin = id_admin;
        this.id_client = id_cliente;
    }

    //Getters y setters
    public setCode(code: number): void {
        this.code = code;
    }

    public getCode(): number {
        return this.code;
    }

    public setObsertations(observations: string): void {
        this.observations = observations;
    }

    public getObsertaions(): string {
        return this.observations;
    }

    public setRenovated(renovated: boolean): void {
        this.renovated = renovated;
    }

    public getRenovated(): boolean {
        return this.renovated;
    }

    public setCredit_amount(credit_amount: number): void {
        this.credit_amount = credit_amount;
    }

    public getCredit_amount(): number {
        return this.credit_amount;
    }

    public setFinish_date(finish_date: Date): void {
        this.finish_date = finish_date;
    }

    public getFinish_date(): Date {
        return this.finish_date;
    }

    public setInitial_date(initial_date: Date): void {
        this.initial_date = initial_date;
    }

    public getInitial_date(): Date {
        return this.initial_date;
    }

    public setInterest(interest: number): void {
        this.interest = interest;
    }

    public getInterest(): number {
        return this.interest;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getStatus(): string {
        return this.status;
    }

    public setTotal_debt(total_debt: number): void {
        this.total_debt = total_debt;
    }

    public getTotal_debt(): number {
        return this.total_debt;
    }

    public setTypeCredit(typeCredit:string):void{
        this.typeCredit = typeCredit;
    }

    public getTypeCredit():string{
        return this.typeCredit;
    }

    public setId_admin(id_admin: AdministratorModels): void {
        this.id_admin = id_admin;
    }

    public getId_admin(): AdministratorModels {
        return this.id_admin;
    }

    public setId_client(id_client: ClientsModels): void {
        this.id_client = id_client;
    }

    public getId_client(): ClientsModels {
        return this.id_client;
    }

}
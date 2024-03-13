import { AdministratorModels } from "./administrator-models";

export class ClientsModels {

    //Atributos
    private id: number;
    private last_name:string;
    private name:string;
    private id_admin:AdministratorModels;

    //Constructor
    public constructor(id:number, last_name:string, name:string, id_admin:AdministratorModels) {
        this.id = id;
        this.last_name = last_name;
        this.name = name;
        this.id_admin = id_admin;
    }

    //Getter y setter
    public setId(id:number):void {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setLast_name(last_name:string):void {
        this.last_name = last_name;
    }

    public getLast_name():string {
        return this.last_name;
    }

    public setName(name:string):void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setId_admin(id_admin:AdministratorModels): void {
        this.id_admin = id_admin;
    }

    public getId_admin(): AdministratorModels {
        return this.id_admin;
    }
}
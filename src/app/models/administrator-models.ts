export class AdministratorModels {

    //Atributtes
    private identificacion:number;
    private last_name:string;
    private name: string;
    private password:string;
    private user:string;

    //Constructor Method
    public constructor(identificacion:number, lastName:string, name:string, password:string, user:string){
        this.identificacion = identificacion;
        this.last_name = lastName;
        this.name = name;
        this.password = password;
        this.user = user;
    }

    //Getter and Setter
    public setIdentificacion(identificacion:number):void{
        this.identificacion = identificacion;
    }

    public getIdentificacion():number{
        return this.identificacion;
    }

    public setLast_Name(LastName:string):void{
        this.last_name = LastName;
    }

    public getLastName():string{
        return this.last_name;
    }

    public setName(Name:string):void{
        this.name = Name;
    }

    public getName():string{
        return this.name;
    }

    
    public setUser(user:string):void{
        this.last_name = user;
    }

    public getUser():string{
        return this.user;
    }

    public setPassword(password:string):void{
        this.password = password;
    }

    public getpassword():string{
        return this.password;
    }
}

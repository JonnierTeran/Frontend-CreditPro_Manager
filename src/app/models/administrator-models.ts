export class AdministratorModels {
    
    //Atributtes
    private identificacion:number;
    private name: string;
    private lastName:string;
    private password:string;
    private user:string;
    private apiKeyResend?:string;

  
    //Constructor Method
    public constructor(identificacion:number, lastName:string, name:string, password:string, user:string, apiKeyResend?:string){
        this.identificacion = identificacion;
        this.lastName = lastName;
        this.name = name;
        this.password = password;
        this.user = user;
        this.apiKeyResend = apiKeyResend;
    }

    //Getter and Setter
    public setIdentificacion(identificacion:number):void{
        this.identificacion = identificacion;
    }

    public getIdentificacion():number{
        return this.identificacion;
    }

    public setLast_Name(LastName:string):void{
        this.lastName = LastName;
    }

    public getLastName():string{
        return this.lastName;
    }

    public setName(Name:string):void{
        this.name = Name;
    }

    public getName():string{
        return this.name;
    }

    
    public setUser(user:string):void{
        this.user = user;
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

    public setApiKeyResend(apiKeyResend: string) {
        this.apiKeyResend = apiKeyResend;
    }

    public getApiKeyResend(): string | undefined {
        return this.apiKeyResend;
    }
}

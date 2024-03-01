// Clase para modelas una respuesta desde el backend
export class ResponseModels {
    //Propiedad mensaje
    private message: string;

    constructor(message: string) {
        this.message = message;
    }

    public setMessage(message: string): void {
        this.message = message;
    }

    public getMessage(): string {
        return this.message;
    }
}
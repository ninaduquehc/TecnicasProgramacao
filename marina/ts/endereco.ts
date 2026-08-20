export default class Endereco {
    private rua: string
    constructor(rua: string){
        this.rua=rua
    }

    public getRua(): string{
        return this.rua
    }

    public setRua(rua: string){
        this.rua=rua
    }
}
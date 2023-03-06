export class BasicData {
    public readonly simbolos = ['C', '.', '='];
    public readonly operacoes = ['+', '-', '*', '/'];
    public readonly numeros: string[] = Array.from({length: 11}, (_, i) => i.toString());
    private lastPressed = '';
    private allPressed = '';

    public updatePressed (string : string) : void {
        this.lastPressed = string;
    }
    public getPressed () : string {
        return this.lastPressed;
    }
    public updateAllPressed (tecla : string) : void {
        this.allPressed = this.allPressed + tecla;
        console.log(this.allPressed);
    }
    public deleteAllPressed () : void {
        this.allPressed = '';
    }
    public getAllPressed () : string {
        return this.allPressed;
    }
}
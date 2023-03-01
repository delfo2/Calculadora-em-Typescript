export class BasicData {
    public readonly simbolos = ['C', '.', '='];
    public readonly operacoes = ['+', '-', '*', '/'];
    public readonly numeros: string[] = Array.from({length: 11}, (_, i) => i.toString());
    private lastPressed = '';

    public updatePressed (string : string) : void {
        this.lastPressed = string;
    }
    public getPressed () : string {
        return this.lastPressed;
    }
}
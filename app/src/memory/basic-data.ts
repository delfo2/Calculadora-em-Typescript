import { Telas } from "../atualizador/telas.js";

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
    public updateAllPressed (tecla : string, tela : Telas) : void {
        let canUpdate = true;

        if(this.simbolos.includes(tecla) || this.operacoes.includes(tecla)) {
            if(this.allPressed.endsWith(tecla)) {
                tela.atualizaMensagem(`Pare de selecionar: ${tecla}`);
                this.deleteAllPressed();
                tela.apagaHistorico();
                canUpdate = false;
            }
        }
        if(canUpdate) {
            this.allPressed = this.allPressed + tecla;
        }
    }
    public deleteAllPressed () : void {
        this.allPressed = '';
    }
    public getAllPressed () : string {
        return this.allPressed;
    }
}
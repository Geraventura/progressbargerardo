import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent{
  @Input() nombre:string = 'Jesus Tigre Rey';
  @Output() saludar: EventEmitter<string> = new EventEmitter<string>();
  
  public nombres: Array<string> = [];
  public nombreLista: string ="";

  constructor() {
  }

  onClick(){
    this.saludar.emit('Hola!, desde el componente hijo');
  }

  onButtonClick(){
    this.nombres.push(this.nombreLista);
    this.nombreLista="";
    console.log(this.nombres);
    
  }
  validando(texto:string){
    return {
      'weak' : texto.length < 4,
      'medium' : texto.length >=4 && texto.length <=7,
      'strong' : texto.length > 7
    }
  }

}

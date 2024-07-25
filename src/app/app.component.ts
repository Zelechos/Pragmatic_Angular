import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class EtherHackerComponent {
  codeText: string = "";
  title = 'EtherHacker';

  getCode(mensaje:string){
    this.codeText = mensaje;
  }

  getLanguage(language:string){
    return language;
  }
}

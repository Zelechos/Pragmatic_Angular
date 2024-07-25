import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-code-button',
  templateUrl: './code-button.component.html',
  styleUrls: ['./code-button.component.css'],
})
export class CodeButtonComponent {
  @Input() language: string = '';
  codeText: string = '';
  @Output() code = new EventEmitter<string>();

  sendCode() {
    switch (this.language) {
      case 'Java':
        this.codeText = "System.out.println('hello world');";
        break;
      case 'Python':
        this.codeText = "print('hello world')";
        break;
      case 'Golang':
        this.codeText = "fmt.Println('hello world')";
        break;
      case 'TypeScript':
        this.codeText = "console.log('hello world');";
        break;
      case 'Rust':
        this.codeText = "println!('hello world');";
        break;
    }
    this.code.emit(this.codeText);
  }
}

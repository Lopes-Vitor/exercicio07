import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  operacao: string = "+";
  calcular() {
    switch (this.operacao) {
      case "+":
        this.resultado = this.num1 + this.num2;
        break;
      case "-":
        this.resultado = this.num1 - this.num2;
        break;
      case "/":
        this.resultado = this.num1 / this.num2;
        break;
      case "*":
        this.resultado = this.num1 * this.num2;
        break;
    }

  }
}

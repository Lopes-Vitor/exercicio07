import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  name: String = "";
  sexo: String = "masc";
  age: number = 0;
  price: number = 0;
  valueApolice: number = 0;

calcular(){
  if (this.sexo == "masc" && this.age <= 25)
    this.valueApolice = (this.price * 0.15)
  else if(this.sexo == "masc" && this.age > 25)
    this.valueApolice = (this.price * 0.10)
  else if( this.sexo == "femi")
    this.valueApolice = (this.price * 0.08)
}
}
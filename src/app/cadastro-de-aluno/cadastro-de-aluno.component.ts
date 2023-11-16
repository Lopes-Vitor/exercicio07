import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-de-aluno',
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.css']
})
export class CadastroDeAlunoComponent {
  model: any = {};

  onSubmit() {
    console.log('Formulário enviado:', this.model);
    // Adicione aqui a lógica para enviar os dados, por exemplo, chamando um serviço.
  }
}

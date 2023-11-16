import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import {HttpClientModule} from '@angular/common/http';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';
import { ApoliceComponent } from './apolice/apolice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalcularMediaComponent,
    CadastroDeAlunoComponent,
    ApoliceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

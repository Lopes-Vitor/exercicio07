import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' }, // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

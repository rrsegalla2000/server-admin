import { UsoMemoriaService } from './uso-memoria/uso-memoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UsoMemoriaComponent } from './uso-memoria/uso-memoria.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProcessamentoComponent } from './processamento/processamento.component';
import { RequesicoesComponent } from './requesicoes/requesicoes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsoMemoriaComponent,
    CardComponent,
    ProcessamentoComponent,
    RequesicoesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsoMemoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

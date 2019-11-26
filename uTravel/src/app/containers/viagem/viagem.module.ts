import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoGeralComponent } from './orcamento-geral/orcamento-geral.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HospedagemComponent } from './hospedagem/hospedagem.component';
import { LocomocaoComponent } from './locomocao/locomocao.component';
import { TurismoComponent } from './turismo/turismo.component';
import {ViagemComponent} from './viagem.component';
import {AppModule} from "../../app.module";
import {SharedModule} from "../../shared/shared.module";
import {BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import { FormRestaurante } from './restaurante/form-restaurante/form-restaurante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLocomocaoComponent } from './locomocao/form-locomocao/form-locomocao.component';
import { FormTurismoComponent } from './turismo/form-turismo/form-turismo.component';

@NgModule({
    declarations: [
        FormRestaurante,
        OrcamentoGeralComponent,
        RestauranteComponent,
        HospedagemComponent,
        LocomocaoComponent,
        TurismoComponent,
        FormLocomocaoComponent,
        FormTurismoComponent,
    ],
    exports: [
        OrcamentoGeralComponent,
        RestauranteComponent,
        HospedagemComponent,
        LocomocaoComponent,
        TurismoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDatepickerModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
    ]
})
export class ViagemModule { }

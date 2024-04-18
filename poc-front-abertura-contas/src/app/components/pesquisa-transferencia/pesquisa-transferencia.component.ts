import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pesquisa-transferencia',
  templateUrl: './pesquisa-transferencia.component.html',
  styleUrls: ['./pesquisa-transferencia.component.css']
})
export class PesquisaTransferenciaComponent {
  transferenciaForm: FormGroup; // Formulário para pesquisa de saque
  transferencia: any; // Variável para armazenar o resultado da pesquisa de saque

  constructor(private formBuilder: FormBuilder) {
    // Inicializa o formulário
    this.transferenciaForm = this.formBuilder.group({
      idTransferenciaField: [''] // Campo de pesquisa
    });
  }

  // Método para pesquisar saque
  search() {
    // Implemente a lógica de pesquisa aqui
    // Por exemplo, você pode chamar um serviço que busca o saque com base no campo de pesquisa
    // this.saque = this.saqueService.search(this.saqueForm.value.idSaqueField);
    // Aqui, estou apenas preenchendo o saque com dados fictícios para fins de demonstração
    this.transferencia = {
      id: '123456',
      data: '01/01/2022',
      valor: 100.00
    };
  }
}

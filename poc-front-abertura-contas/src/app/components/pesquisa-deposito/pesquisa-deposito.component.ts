import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pesquisa-deposito',
  templateUrl: './pesquisa-deposito.component.html',
  styleUrls: ['./pesquisa-deposito.component.css']
})
export class PesquisaDepositoComponent {
  depositoForm: FormGroup; // Formulário para pesquisa de saque
  deposito: any; // Variável para armazenar o resultado da pesquisa de saque

  constructor(private formBuilder: FormBuilder) {
    // Inicializa o formulário
    this.depositoForm = this.formBuilder.group({
      idDepositoField: [''] // Campo de pesquisa
    });
  }

  // Método para pesquisar saque
  search() {
    // Implemente a lógica de pesquisa aqui
    // Por exemplo, você pode chamar um serviço que busca o saque com base no campo de pesquisa
    // this.saque = this.saqueService.search(this.saqueForm.value.idSaqueField);
    // Aqui, estou apenas preenchendo o saque com dados fictícios para fins de demonstração
    this.deposito = {
      id: '123456',
      data: '01/01/2022',
      valor: 100.00
    };
  }
}

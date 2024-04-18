import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: ['', [Validators.required, Validators.email]],
      dataDeposito: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.cadastroForm.valid) {
      // Lógica para enviar o formulário para o servidor
      console.log(this.cadastroForm.value);
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}

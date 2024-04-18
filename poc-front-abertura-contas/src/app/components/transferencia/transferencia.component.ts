import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  transferenciaForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.transferenciaForm = this.fb.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      valor: ['', Validators.required],
      dataTransferencia: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.transferenciaForm.valid) {
      // Lógica para enviar o formulário para o servidor
      console.log(this.transferenciaForm.value);
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}

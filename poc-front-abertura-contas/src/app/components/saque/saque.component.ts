import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  saqueForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saqueForm = this.fb.group({
      conta: ['', Validators.required],
      valor: ['', Validators.required],
      dataSaque: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.saqueForm.valid) {
      // Lógica para enviar o formulário para o servidor
      console.log(this.saqueForm.value);
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}

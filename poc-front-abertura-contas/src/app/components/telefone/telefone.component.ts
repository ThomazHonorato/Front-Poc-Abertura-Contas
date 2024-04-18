import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {
  telefoneForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.telefoneForm = this.fb.group({
      ddd: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.telefoneForm.valid) {
      // Lógica para enviar o formulário para o servidor
      console.log(this.telefoneForm.value);
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}

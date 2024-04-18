import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      cnpj: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.usuarioForm.valid) {
      // Lógica para enviar o formulário para o servidor
      console.log(this.usuarioForm.value);
    } else {
      alert('Por favor, preencha o formulário corretamente.');
    }
  }
}

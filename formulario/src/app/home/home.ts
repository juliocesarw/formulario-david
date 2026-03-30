import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  nome: String = '';
  email: String = '';
  idade: number = 0;
  senha: String = '';
  confirmSenha: String = '';
  genero: String = '';
  cidade: String = '';
  termos: boolean = false;

  enviar(formulario: NgForm) {
    if (formulario.valid) {
      const mensagem = `Dados do formulário:\n\nNome: ${this.nome}\nEmail: ${this.email}\nIdade: ${this.idade}\nGênero: ${this.genero}\nCidade: ${this.cidade}`;
      alert(`${mensagem}`);
      formulario.resetForm();
      return;
    }
    else{
        alert('O formulário não está válido. Verifique os campos em destaque e tente novamente.');
    }
  }
}

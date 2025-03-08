import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnviaFormService } from '../../service/envia-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private enviaFormService = inject(EnviaFormService);
  name: string = '';
  grau: [string, number] = ['', 0]; //inicializa grauInstrucao
  email: string = '';
  mostraTitulo: boolean = false;
  private router = inject(Router); //injecao de Router
  
  //GrauInstrucao, tipoGrau (1 e 2)
  listGrauInstrucao: [string, number][] = [
    ["E. Fundamental completo", 1],
    ["E. Médio incompleto", 1],
    ["E. Médio completo", 1],
    ["Graduado", 2],
    ["Pós-graduado", 2]
  ];


  mostraMsg: boolean = false;
  cpf: string = '';
  emailInvalido: boolean = false;

  submit() {
    this.mostraTitulo = true; // mostra titulo por default
    this.IsEmail(this.email); //verifica se email eh valido 
    // Valida email
    this.validarEmail();

    if (this.name && this.email) {
      this.mostraMsg = false;
    } else {
      this.mostraTitulo = false;
      this.mostraMsg = true;
    }
  }

  limpar() {
    this.name = "";
    this.email = "";
    this.cpf = "";
    this.mostraTitulo = false;
  }

  IsEmail(email: string): boolean {
    console.log("is email?: ", email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }

  validarEmail() {
    this.emailInvalido = !this.IsEmail(this.email);
    if (this.emailInvalido) {
      this.mostraTitulo = false;
      alert("Email inválido!");
    } else {
      console.log("Email válido!");
    }
  }

  avancarEtapa(grau: [string, number]) {
    let tamanhoGrau = grau.length - 1;
    let numGrauInstrucao = grau[tamanhoGrau]




    if (numGrauInstrucao == 1) {
      // Aciona tela para os nao graduados
      this.router.navigate(['/nao-graduado']);
    } else if (numGrauInstrucao == 2) {
      // Aciona tela para os graduados
      this.router.navigate(['/graduado']);
    } else {
      alert("Grau de instrucao nao localizado!");
    }
  }

}

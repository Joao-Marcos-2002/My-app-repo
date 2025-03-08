import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  // Envia informacoes para o backend
  enviaInfoBackend(info: string) {
    console.log("Enviando para backend...");
  }
}

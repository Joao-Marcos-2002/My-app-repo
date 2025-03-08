import { Component, OnInit } from '@angular/core';
import { VagasService } from '../../service/vagas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-naograduado-list',
  imports: [CommonModule],
  templateUrl: './naograduado-list.component.html',
  styleUrl: './naograduado-list.component.css'
})
export class NaograduadoListComponent implements OnInit {
  listaVagas: any[] = [];
  linkHome = "/"; //caminho padrao inicial

  constructor(private vagasTiService: VagasService) { }

  ngOnInit(): void {
    this.listaVagas = VagasService.getVagasNaoGraduados();

    console.log("SERVICE nao graduado:", this.listaVagas);
  }

}

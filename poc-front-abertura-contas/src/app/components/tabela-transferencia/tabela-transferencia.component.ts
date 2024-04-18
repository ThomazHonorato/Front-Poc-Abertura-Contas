import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabela-transferencia',
  templateUrl: './tabela-transferencia.component.html',
  styleUrls: ['./tabela-transferencia.component.css']
})
export class TabelaTransferenciaComponent implements OnInit {
  transferencias: any[] = []; // Array para armazenar os depósitos

  //constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Chame o método da API para obter os depósitos
    //this.apiService.getDeposits().subscribe((data: any) => {
    //this.deposits = data; // Atribua os dados recebidos à variável deposits
    //});
  }
}

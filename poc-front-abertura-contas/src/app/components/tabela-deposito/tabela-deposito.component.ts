import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-deposito',
  templateUrl: './tabela-deposito.component.html',
  styleUrls: ['./tabela-deposito.component.css']
})
export class TabelaDepositoComponent implements OnInit {
  deposits: any[] = []; // Array para armazenar os depósitos

  //constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Chame o método da API para obter os depósitos
    //this.apiService.getDeposits().subscribe((data: any) => {
      //this.deposits = data; // Atribua os dados recebidos à variável deposits
    //});
  }
}

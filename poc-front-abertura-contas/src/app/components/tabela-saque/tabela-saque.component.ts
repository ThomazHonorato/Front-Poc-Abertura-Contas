import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabela-saque',
  templateUrl: './tabela-saque.component.html',
  styleUrls: ['./tabela-saque.component.css']
})
export class TabelaSaqueComponent implements OnInit {
  saques: any[] = []; // Array para armazenar os depósitos

  //constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Chame o método da API para obter os depósitos
    //this.apiService.getDeposits().subscribe((data: any) => {
    //this.deposits = data; // Atribua os dados recebidos à variável deposits
    //});
  }
}

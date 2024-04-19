import {Injectable} from '@angular/core';
import {apiUsuario} from "../../../lib/axios";

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor() {
  }

  async cadastrarTelefone(dadosTelefone: any): Promise<void> {
    try {
      alert("Chegou no serviço"+ dadosTelefone.idUsuario)
     const response = await apiUsuario.post('/telefone/cadastro', {...dadosTelefone});
      alert("Resposta da requisição de salvar no serviço"+response.data.idUsuario)
      console.log('Cadastro de telefone realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar telefone:', error);
      throw error;
    }
  }

  /*async cadastrarTelefone(dadosTelefone: any): Promise<void> {
    try {
    const response =  await apiUsuario.post('/telefone/cadastro', dadosTelefone);
    alert("serviço cadastrar telefone"+ response.data.idUsuario)
    } catch (error) {
      console.error('Erro ao cadastrar Usuario:', error);
      throw error;
    }
  }*/
}

import { FolhaPagamento } from "../models/FolhaPagamento";

const folhas: FolhaPagamento[] = [];

export class FolhaPagamentoRepository {
  cadastrar(folhasRecebidas: FolhaPagamento[]): FolhaPagamento[] {
    for (let index = 0; index < folhasRecebidas.length; index++) {
      const folha = folhasRecebidas[index];
      folhas.push(folha);
    }
    return folhas;
  }

  listarPorCpf(cpf:String, mes:String, ano:String): FolhaPagamento {
        console.log(cpf);
        console.log(mes);
        console.log(ano);
        for (let index = 0; index < folhas.length; index++) {
          const folha = folhas[index];
          if(folha.funcionario.cpf === cpf &&
            folha.ano.toString === ano.toString &&
            folha.mes.toString === mes.toString){
              return folha
            }
        }
        return folhas[0];
  }
  listar(): FolhaPagamento[] {
    return folhas;
  }
}

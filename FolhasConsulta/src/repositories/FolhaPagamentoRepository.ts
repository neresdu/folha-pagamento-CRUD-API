import { Payroll } from "../models/FolhaPagamento";

const folhas: Payroll[] = [];

export class FolhaPagamentoRepository {
  cadastrar(folhasRecebidas: Payroll[]): Payroll[] {
    for (let index = 0; index < folhasRecebidas.length; index++) {
      const folha = folhasRecebidas[index];
      folhas.push(folha);
    }
    return folhas;
  }

  listarPorCpf(cpf:String, mes:Number, ano:Number): Payroll {
        for (let index = 0; index <= folhas.length; index++) {
          var folha = folhas[index];
          if(folha.employee.cpf === cpf &&
            folha.year === ano &&
            folha.month === mes){
              console.log("Payroll found:")
              return folha;
            }
        }
        return folhas[0];
  }
  listar(): Payroll[] {
    return folhas;
  }
}

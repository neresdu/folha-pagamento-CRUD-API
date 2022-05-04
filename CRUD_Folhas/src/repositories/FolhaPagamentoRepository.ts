import { FolhaPagamento } from "../models/FolhaPagamento";

const folhas: FolhaPagamento[] = [];
let id = 0;

export class FolhaPagamentoRepository {
  cadastrar(folha: FolhaPagamento): FolhaPagamento[] {
    id++;
    folha.processada = false;
    folha.enviada = false;
    folha.id = id;
    folhas.push(folha);
    return folhas;
  }

  listar(): FolhaPagamento[] {
    return folhas;
  }

  listarProcessadas(): FolhaPagamento[] {
    const folhasProcessadas: FolhaPagamento[] = [];
    for (let index = 0; index < folhas.length; index++) {
      const folha = folhas[index];
      if(folha.processada && !folha.enviada){
        folha.enviada = true;
        folhasProcessadas.push(folha);
      }
      
    }
    return folhasProcessadas;
  }

//  remover(id: number): Produto[] {
//    const index = produtos.findIndex((produto) => produto.id === id);
//    produtos.splice(index, 1);
//    return produtos;
//  }

  calcular(): FolhaPagamento[] {
    for (let i = 0; i < folhas.length; i++) {
      let folhaAlterada = folhas[i];
      if(!folhaAlterada.processada){
        folhaAlterada.processada = true;
        folhaAlterada.bruto = folhaAlterada.horas * folhaAlterada.valor;

        //irrf
        if(folhaAlterada.bruto <= 1903.98){
          folhaAlterada.irrf = 0.0
        }
        if(folhaAlterada.bruto > 1903.98 && folhaAlterada.bruto <= 2826.65){
          folhaAlterada.irrf = (folhaAlterada.bruto * 0.075) - 142.80;
        }
        if(folhaAlterada.bruto > 2826.65 && folhaAlterada.bruto <= 3751.05){
          folhaAlterada.irrf = (folhaAlterada.bruto * 0.15) - 354.80;
        }
        if(folhaAlterada.bruto > 3751.06 && folhaAlterada.bruto <= 4664.68){
          folhaAlterada.irrf = (folhaAlterada.bruto * 0.225) - 636.13;
        }
        if(folhaAlterada.bruto > 4664.68){
          folhaAlterada.irrf = (folhaAlterada.bruto * 0.275) - 869.36;
        }

        //inss
        if(folhaAlterada.bruto > 1693.72){
          folhaAlterada.inss = folhaAlterada.bruto * 0.08;
        }
        if(folhaAlterada.bruto >= 1693.73 && folhaAlterada.bruto <= 2822.90){
          folhaAlterada.inss = folhaAlterada.bruto * 0.09;
        }
        if(folhaAlterada.bruto >= 2822.91 && folhaAlterada.bruto <= 5645.80){
          folhaAlterada.inss = folhaAlterada.bruto * 0.11;
        }
        if(folhaAlterada.bruto > 5645.81){
          folhaAlterada.inss = 621.03;
        }
        //fgts
        folhaAlterada.fgts = folhaAlterada.bruto * 0.08;

        //liquido
        folhaAlterada.liquido = folhaAlterada.bruto - folhaAlterada.irrf - folhaAlterada.inss;
        
        folhas[i] = folhaAlterada;
      }
    }
    return folhas;

//    const index = folhas.findIndex((folha) => folha.id === folhas.id && folha.processada === false);
 //   folhaAlterada.processada = true;
  //  folhaAlterada.bruto = folhaAlterada.horas * folhaAlterada.valor;
   // folhas[index] = folhaAlterada;
    //return folhas;
  }
}

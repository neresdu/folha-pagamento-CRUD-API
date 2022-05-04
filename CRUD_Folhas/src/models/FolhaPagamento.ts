export interface FolhaPagamento {
  id: number;
  mes: number;
  ano: number;
  horas: number;
  valor: number;
  bruto: number;
  irrf: number;
  inss: number;
  fgts: number;
  processada: boolean;
  enviada: boolean;
  liquido: number;
  funcionario: {
    nome: String;
    cpf: String;
  }
}

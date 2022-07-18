import { Payroll } from "../models/Payroll";

const payrolls: Payroll[] = [];
let id = 0;

export class payrollPagamentoRepository {

  listar(): Payroll[] {
    return payrolls;
  }

  listarProcessadas(): Payroll[] {
    const processedPayrolls: Payroll[] = [];
    for (let index = 0; index < payrolls.length; index++) {
      const payroll = payrolls[index];
      if(payroll.processed && !payroll.sent){
        payroll.sent = true;
        processedPayrolls.push(payroll);
      }
      
    }
    return processedPayrolls;
  }

//  remover(id: number): Produto[] {
//    const index = produtos.findIndex((produto) => produto.id === id);
//    produtos.splice(index, 1);
//    return produtos;
//  }

  calcular(): Payroll[] {
    for (let i = 0; i < payrolls.length; i++) {
      let payrollAlterada = payrolls[i];
      if(!payrollAlterada.processed){
        payrollAlterada.processed = true;
        payrollAlterada.grossSalary = payrollAlterada.workedHours * payrollAlterada.hourValue;

        //irrf
        if(payrollAlterada.grossSalary <= 1903.98){
          payrollAlterada.irrf = 0.0
        }
        if(payrollAlterada.grossSalary > 1903.98 && payrollAlterada.grossSalary <= 2826.65){
          payrollAlterada.irrf = (payrollAlterada.grossSalary * 0.075) - 142.80;
        }
        if(payrollAlterada.grossSalary > 2826.65 && payrollAlterada.grossSalary <= 3751.05){
          payrollAlterada.irrf = (payrollAlterada.grossSalary * 0.15) - 354.80;
        }
        if(payrollAlterada.grossSalary > 3751.06 && payrollAlterada.grossSalary <= 4664.68){
          payrollAlterada.irrf = (payrollAlterada.grossSalary * 0.225) - 636.13;
        }
        if(payrollAlterada.grossSalary > 4664.68){
          payrollAlterada.irrf = (payrollAlterada.grossSalary * 0.275) - 869.36;
        }

        //inss
        if(payrollAlterada.grossSalary > 1693.72){
          payrollAlterada.inss = payrollAlterada.grossSalary * 0.08;
        }
        if(payrollAlterada.grossSalary >= 1693.73 && payrollAlterada.grossSalary <= 2822.90){
          payrollAlterada.inss = payrollAlterada.grossSalary * 0.09;
        }
        if(payrollAlterada.grossSalary >= 2822.91 && payrollAlterada.grossSalary <= 5645.80){
          payrollAlterada.inss = payrollAlterada.grossSalary * 0.11;
        }
        if(payrollAlterada.grossSalary > 5645.81){
          payrollAlterada.inss = 621.03;
        }
        //fgts
        payrollAlterada.fgts = payrollAlterada.grossSalary * 0.08;

        //netSalary
        payrollAlterada.netSalary = payrollAlterada.grossSalary - payrollAlterada.irrf - payrollAlterada.inss;
        
        payrolls[i] = payrollAlterada;
      }
    }
    return payrolls;
  }
}

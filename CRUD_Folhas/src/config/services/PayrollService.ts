import { Payroll } from "../../models/Payroll";
import PayrollSchema from "../../models/PayrollSchema";
export class PayrollService {
    calculateNetSalary(payrollToProcess: Payroll): Payroll{
        if(payrollToProcess.processed == false){
            payrollToProcess.processed = true;
            payrollToProcess.grossSalary = payrollToProcess.workedHours * payrollToProcess.hourValue;
    
            //irrf
            if(payrollToProcess.grossSalary <= 1903.98){
              payrollToProcess.irrf = 0.0
            }
            if(payrollToProcess.grossSalary > 1903.98 && payrollToProcess.grossSalary <= 2826.65){
              payrollToProcess.irrf = (payrollToProcess.grossSalary * 0.075) - 142.80;
            }
            if(payrollToProcess.grossSalary > 2826.65 && payrollToProcess.grossSalary <= 3751.05){
              payrollToProcess.irrf = (payrollToProcess.grossSalary * 0.15) - 354.80;
            }
            if(payrollToProcess.grossSalary > 3751.06 && payrollToProcess.grossSalary <= 4664.68){
              payrollToProcess.irrf = (payrollToProcess.grossSalary * 0.225) - 636.13;
            }
            if(payrollToProcess.grossSalary > 4664.68){
              payrollToProcess.irrf = (payrollToProcess.grossSalary * 0.275) - 869.36;
            }
    
            //inss
            if(payrollToProcess.grossSalary > 1693.72){
              payrollToProcess.inss = payrollToProcess.grossSalary * 0.08;
            }
            if(payrollToProcess.grossSalary >= 1693.73 && payrollToProcess.grossSalary <= 2822.90){
              payrollToProcess.inss = payrollToProcess.grossSalary * 0.09;
            }
            if(payrollToProcess.grossSalary >= 2822.91 && payrollToProcess.grossSalary <= 5645.80){
              payrollToProcess.inss = payrollToProcess.grossSalary * 0.11;
            }
            if(payrollToProcess.grossSalary > 5645.81){
              payrollToProcess.inss = 621.03;
            }
            //fgts
            payrollToProcess.fgts = payrollToProcess.grossSalary * 0.08;
    
            //netSalary
            payrollToProcess.netSalary = payrollToProcess.grossSalary - payrollToProcess.irrf - payrollToProcess.inss;
            return payrollToProcess;
    }
    //error case
    payrollToProcess.processed=false
    return payrollToProcess;
}
constructor (){
    
}
}
export default PayrollService;
export interface Payroll extends Document{
  id: number;
  month: number;
  year: number;
  workedHours: number;
  hourValue: number;
  grossSalary: number;
  irrf: number;
  inss: number;
  fgts: number;
  processed: boolean;
  sent: boolean;
  netSalary: number;
  employee: {
    name: String;
    cpf: String;
  }
  
}
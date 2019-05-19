export const enum Bandeira {
  MASTER = 'MASTER',
  VISA = 'VISA',
  ELO = 'ELO',
  AMERICAN = 'AMERICAN',
  DINNERS = 'DINNERS'
}

export interface ICartaoCredito {
  id?: number;
  bandeira?: Bandeira;
  numero?: string;
  cv?: string;
  nomeCartao?: string;
}

export class CartaoCredito implements ICartaoCredito {
  constructor(public id?: number, public bandeira?: Bandeira, public numero?: string, public cv?: string, public nomeCartao?: string) {}
}

export const enum GrupoMenu {
  ENTRADA = 'ENTRADA',
  PRATOFRIO = 'PRATOFRIO',
  PRATOQUENTE = 'PRATOQUENTE',
  SOBREMESA = 'SOBREMESA'
}

export interface IMenu {
  id?: number;
  nome?: string;
  grupo?: GrupoMenu;
  valorNormal?: number;
  tempoPreparo?: number;
  disponivel?: boolean;
  valorReduzido?: number;
}

export class Menu implements IMenu {
  constructor(
    public id?: number,
    public nome?: string,
    public grupo?: GrupoMenu,
    public valorNormal?: number,
    public tempoPreparo?: number,
    public disponivel?: boolean,
    public valorReduzido?: number
  ) {
    this.disponivel = this.disponivel || false;
  }
}

import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class MenuComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-menu div table .btn-danger'));
  title = element.all(by.css('jhi-menu div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class MenuUpdatePage {
  pageTitle = element(by.id('jhi-menu-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  nomeInput = element(by.id('field_nome'));
  grupoSelect = element(by.id('field_grupo'));
  valorNormalInput = element(by.id('field_valorNormal'));
  tempoPreparoInput = element(by.id('field_tempoPreparo'));
  disponivelInput = element(by.id('field_disponivel'));
  valorReduzidoInput = element(by.id('field_valorReduzido'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setNomeInput(nome) {
    await this.nomeInput.sendKeys(nome);
  }

  async getNomeInput() {
    return await this.nomeInput.getAttribute('value');
  }

  async setGrupoSelect(grupo) {
    await this.grupoSelect.sendKeys(grupo);
  }

  async getGrupoSelect() {
    return await this.grupoSelect.element(by.css('option:checked')).getText();
  }

  async grupoSelectLastOption(timeout?: number) {
    await this.grupoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setValorNormalInput(valorNormal) {
    await this.valorNormalInput.sendKeys(valorNormal);
  }

  async getValorNormalInput() {
    return await this.valorNormalInput.getAttribute('value');
  }

  async setTempoPreparoInput(tempoPreparo) {
    await this.tempoPreparoInput.sendKeys(tempoPreparo);
  }

  async getTempoPreparoInput() {
    return await this.tempoPreparoInput.getAttribute('value');
  }

  getDisponivelInput(timeout?: number) {
    return this.disponivelInput;
  }
  async setValorReduzidoInput(valorReduzido) {
    await this.valorReduzidoInput.sendKeys(valorReduzido);
  }

  async getValorReduzidoInput() {
    return await this.valorReduzidoInput.getAttribute('value');
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class MenuDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-menu-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-menu'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}

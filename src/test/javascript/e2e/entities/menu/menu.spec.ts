/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { MenuComponentsPage, MenuDeleteDialog, MenuUpdatePage } from './menu.page-object';

const expect = chai.expect;

describe('Menu e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let menuUpdatePage: MenuUpdatePage;
  let menuComponentsPage: MenuComponentsPage;
  let menuDeleteDialog: MenuDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Menus', async () => {
    await navBarPage.goToEntity('menu');
    menuComponentsPage = new MenuComponentsPage();
    await browser.wait(ec.visibilityOf(menuComponentsPage.title), 5000);
    expect(await menuComponentsPage.getTitle()).to.eq('bestMealApp.menu.home.title');
  });

  it('should load create Menu page', async () => {
    await menuComponentsPage.clickOnCreateButton();
    menuUpdatePage = new MenuUpdatePage();
    expect(await menuUpdatePage.getPageTitle()).to.eq('bestMealApp.menu.home.createOrEditLabel');
    await menuUpdatePage.cancel();
  });

  it('should create and save Menus', async () => {
    const nbButtonsBeforeCreate = await menuComponentsPage.countDeleteButtons();

    await menuComponentsPage.clickOnCreateButton();
    await promise.all([
      menuUpdatePage.setNomeInput('nome'),
      menuUpdatePage.grupoSelectLastOption(),
      menuUpdatePage.setValorNormalInput('5'),
      menuUpdatePage.setTempoPreparoInput('5'),
      menuUpdatePage.setValorReduzidoInput('5')
    ]);
    expect(await menuUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');
    expect(await menuUpdatePage.getValorNormalInput()).to.eq('5', 'Expected valorNormal value to be equals to 5');
    expect(await menuUpdatePage.getTempoPreparoInput()).to.eq('5', 'Expected tempoPreparo value to be equals to 5');
    const selectedDisponivel = menuUpdatePage.getDisponivelInput();
    if (await selectedDisponivel.isSelected()) {
      await menuUpdatePage.getDisponivelInput().click();
      expect(await menuUpdatePage.getDisponivelInput().isSelected(), 'Expected disponivel not to be selected').to.be.false;
    } else {
      await menuUpdatePage.getDisponivelInput().click();
      expect(await menuUpdatePage.getDisponivelInput().isSelected(), 'Expected disponivel to be selected').to.be.true;
    }
    expect(await menuUpdatePage.getValorReduzidoInput()).to.eq('5', 'Expected valorReduzido value to be equals to 5');
    await menuUpdatePage.save();
    expect(await menuUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await menuComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Menu', async () => {
    const nbButtonsBeforeDelete = await menuComponentsPage.countDeleteButtons();
    await menuComponentsPage.clickOnLastDeleteButton();

    menuDeleteDialog = new MenuDeleteDialog();
    expect(await menuDeleteDialog.getDialogTitle()).to.eq('bestMealApp.menu.delete.question');
    await menuDeleteDialog.clickOnConfirmButton();

    expect(await menuComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});

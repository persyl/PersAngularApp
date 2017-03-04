import { PersAngularAppPage } from './app.po';

describe('pers-angular-app App', () => {
  let page: PersAngularAppPage;

  beforeEach(() => {
    page = new PersAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Welcome to');
  });
});

import { AerocafeterosPage } from './app.po';

describe('aerocafeteros App', () => {
  let page: AerocafeterosPage;

  beforeEach(() => {
    page = new AerocafeterosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

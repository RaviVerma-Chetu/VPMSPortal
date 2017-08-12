import { VPMSPortalPage } from './app.po';

describe('vpmsportal App', () => {
  let page: VPMSPortalPage;

  beforeEach(() => {
    page = new VPMSPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

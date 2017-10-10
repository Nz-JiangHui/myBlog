import { NzBlogPage } from './app.po';

describe('nz-blog App', () => {
  let page: NzBlogPage;

  beforeEach(() => {
    page = new NzBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

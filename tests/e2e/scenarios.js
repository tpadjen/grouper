'use strict';

describe('grouperApp', function() {

  it('should say hello', function() {
    browser.get('/');
    expect(element.all(by.css('p')).first().getText()).
      toMatch(/How you doin'\?/);
  });

});
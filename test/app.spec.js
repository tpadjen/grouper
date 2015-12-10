'use strict';

describe('grouperApp', function() {

  describe('MainController', function(){
    var scope, mainCtrl;

    beforeEach(module('grouperApp'));

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      mainCtrl = $controller('MainController', {$scope: scope});
    }));

    it('should be defined', function() {
      expect(mainCtrl).toBeDefined();
    });

    it('should have a message', function() {
      scope.$digest();
      expect(scope.message).toEqual("How you doin'?");
    });

  });
});
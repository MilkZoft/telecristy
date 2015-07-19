(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        var telecristyApp = angular.module('telecristyApp', []);

        telecristyApp
            .controller('homeController', HomeController);

        HomeController.$inject = ['$scope'];

        function HomeController($scope) {
            var vm = this;

            vm.name = 'Carlos';
        }
    });
})();

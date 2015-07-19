(function() {
    'use strict';

    var telecristyApp = angular.module('telecristyApp', []);

    telecristyApp
        .controller('homeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;

        vm.name = 'Carlos';
    }
})();

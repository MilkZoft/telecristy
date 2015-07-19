(function() {
    'use strict';

    require(['angular'], function(angular) {
        require(['telecristyApp'], function() {
            angular
                .element(document)
                .ready(function() {
                    angular.bootstrap(document, ['telecristyApp']);
                });
        });
    });
})();

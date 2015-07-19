(function() {
    'use strict';

    require.config({
        paths: {
            // General dependencies
            'angular': '../bower_components/angular/angular.min',

            // Local dependencies
            'telecristyApp': 'telecristy/telecristy.module'
        },

        priority: ['angular'],

        shim: {
            'angular': {
                exports: 'angular'
            },

            'telecristyApp': {
                deps: ['angular']
            }
        }
    });

    require([
        'telecristy/bootstrap'
    ]);
})();

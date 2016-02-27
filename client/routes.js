angular.module('birthlist')
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('Home', {
                url: '/',
                template: '<article-list></article-list>',
            }
        );

        $urlRouterProvider.otherwise('/');
        }
    )
    .run(function ($rootScope, $location) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {
                $state.go('Home');
            }
        });
});

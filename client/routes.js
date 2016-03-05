angular.module('birthlist')
    .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
                .state('home', {
                    url: '/',
                    template: '<article-list></article-list>'
                })
                .state('admin',{
                    'abstract': true,
                     resolve: {
                         currentUser: ($q) => {
                             if (Meteor.userId() == null) {
                                 return $q.reject('AUTH_REQUIRED');
                             }
                             else {
                                 return $q.resolve();
                             }
                         }
                     },
                    template: '<div ui-view />'
                })
                .state('adminArticle', {
                    parent: 'admin',
                    url: '/admin/article',
                    template: '<admin-article></admin-article>'
                })
                .state('login', {
                    url: '/login',
                    template: '<login></login>'
                })
                .state('register', {
                    parent: 'admin',
                    url: '/admin/register',
                    template: '<register></register>'
                })
                .state('resetpw', {
                    url: '/resetpw',
                    template: '<resetpw></resetpw>'
                });

            $urlRouterProvider.otherwise('/');
        }
    )
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            if (error === 'AUTH_REQUIRED') {

                Session.set('returnToState',toState.name);
                Session.set('returnToStateParams',toParams);

                $state.go('login');
            }
        });
});

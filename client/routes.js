angular.module("birthlist").run(["$rootScope", "$location", function ($rootScope, $location) {
    $rootScope.$on("$stateChangeError", function (event, next, previous, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === "AUTH_REQUIRED") {
            $location.path("/");
        }
    });
}]);

angular.module("birthlist").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: 'client/home/views/article-list.ng.html',
                controller: 'ArticleListCtrl'
            }
        );

        $urlRouterProvider.otherwise("/");
    }
]);
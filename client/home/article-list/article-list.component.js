angular.module('birthlist').directive('articleList', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/home/article-list/article-list.html',
        controllerAs: 'articleList',
        controller: function ($scope, $reactive) {
            $reactive(this).attach($scope);
            this.helpers({
               test: () => {
                 return 'Hello World !';
               }
            });
            this.subscribe('users');
        }
    }
});
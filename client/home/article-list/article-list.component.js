angular.module('birthlist').directive('articleList', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/home/article-list/article-list.html',
        controllerAs: 'articleList',
        controller: function ($scope, $stateParams) {
            $scope.test='test';
        }
    }
});
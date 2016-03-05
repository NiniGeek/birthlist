angular.module('birthlist').directive('adminArticle', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/admin/article/article.html',
        controllerAs: 'adminArticle',
        controller: function ($scope, $reactive) {
            $reactive(this).attach($scope);
            this.helpers({
                test: () => {
                    return 'Hello World !';
                }
            });
            this.subscribe('article');
        }
    }
});
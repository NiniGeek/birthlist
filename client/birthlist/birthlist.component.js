angular.module('birthlist').directive('birthlist', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/birthlist/birthlist.html',
        controllerAs: 'birthlist',
        controller: function ($scope, $reactive, $state) {
            $reactive(this).attach($scope);

            this.helpers({
                isLoggedIn: () => {
                    return Meteor.userId() !== null;
                },
                currentUser: () => {
                    return Meteor.user();
                }

            });

            this.logout = () => {
                Accounts.logout();
                $state.go('home');
            }
        }
    }
});
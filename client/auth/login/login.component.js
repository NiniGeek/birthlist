angular.module("birthlist").directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/auth/login/login.html',
    controllerAs: 'login',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: '',
        password: ''
      };

      this.error = '';

      this.login = () => {
        Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (err) => {
          if (err) {
            this.error = err;
          }else if(Session.get('returnToState') && Session.get('returnToStateParams')){
            $state.go(Session.get('returnToState'),Session.get('returnToStateParams'));
          }
          else {
            $state.go('home');
          }
        });
      };
    }
  }
});
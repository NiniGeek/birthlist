angular.module('birthlist', ['angular-meteor', 'ui.router']);

function onReady() {
    angular.bootstrap(document, ['birthlist']);
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);
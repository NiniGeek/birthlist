let modulesToLoad = [
    'angular-meteor',
    'ui.router',
    'accounts.ui'
];


angular.module('birthlist', modulesToLoad);

function onReady() {
    angular.bootstrap(document, ['birthlist']);
}

if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
else
    angular.element(document).ready(onReady);

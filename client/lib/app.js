let modulesToLoad = [
    'angular-meteor',
    'ui.router',
    'accounts.ui',
    'ui.bootstrap',
    'ngFileUpload',
    'ngImgCrop',
    'xeditable',
    'angular-sortable-view'
];


angular.module('birthlist', modulesToLoad);

function onReady() {
    angular.bootstrap(document, ['birthlist'], {
        strictDi: true
    });
}

if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
else
    angular.element(document).ready(onReady);

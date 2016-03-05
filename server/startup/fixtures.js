Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser(Meteor.settings.private.defaultUser);
    }
});
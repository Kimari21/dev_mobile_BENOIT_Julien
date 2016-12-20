var auth = angular.module("auth");

auth.controller('LoginCtrl', function($scope, Auth, $state) {
  Auth.$signInWithPopup("google")
    .then(function(firebaseUser) {
      $state.go('chatList');
    }).catch(function(error) {
        console.log("L'authentification a échoué:", error);
    });
})

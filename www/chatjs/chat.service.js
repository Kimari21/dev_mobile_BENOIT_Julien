var chat = angular.module("chat");

chat.factory("chatList", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref();

    return $firebaseArray(ref);
  }
]);
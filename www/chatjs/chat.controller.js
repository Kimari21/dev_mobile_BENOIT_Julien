var chat = angular.module("chat");





chat.controller("ChatListCtrl",
  function($scope, chatList, $state, $ionicModal) {
    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = chatList;

    $scope.addMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.messages.$add({
        from: $scope.user,
        content: $scope.message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });

      $scope.message = "";
    };

    // if the messages are empty, add something for fun!
    $scope.messages.$loaded(function() {
      if ($scope.messages.length === 0) {
        $scope.messages.$add({
          from: "Uri",
          content: "Hello!",
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      }
    });


  });


 chat.controller("ChatCtrl", 
  function($scope, chatMessages) {
    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = chatMessages;

    $scope.addMessage = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.messages.$add({
        from: $scope.user,
        content: $scope.message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      });

      $scope.message = "";
    };
});





 
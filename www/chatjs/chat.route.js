var chat = angular.module("chat");

chat.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state("chatList", {
          url: "/chatList",
          templateUrl : "template/chatList.html",
          controller: 'ChatListCtrl',

      });
      $stateProvider
      .state("chat", {
          url: "/chat",
          templateUrl : "template/chat.html",
          controller: 'ChatCtrl',

      })


});

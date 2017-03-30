angular.module('DiaLog', [
  'ui.router'
]);

angular.module('DiaLog').config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: '/templates/home.html',
    controller: 'HomePageController',
    controllerAs: 'homePageCtrl'
  });

  $stateProvider.state('chats', {
    url: '/chats',
    templateUrl: '/templates/chats.html',
    controller: 'ChatsPageController',
    controllerAs: 'chatsPageCtrl'
  });

  $stateProvider.state('chats.messages', {
    url: '/:id',
    templateUrl: '/templates/chat-panel.html',
    controller: 'ChatPanelController',
    controllerAs: 'chatPanelCtrl'
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise(function($injector) {
    $injector.get('$state').go('home');
  });
});

angular.module('DiaLog').controller('ChatsPageController', function(ChatsService) {
  var chatsPageCtrl = this;

  ChatsService.getChats().then(function(chats) {
    chatsPageCtrl.chats = chats;
  });
});

angular.module('DiaLog').controller('ChatPanelController', function(ChatsService, $stateParams) {
  var chatPanelCtrl = this;

  chatPanelCtrl.alignment = 'left';

  var chatId = $stateParams.id;
  ChatsService.getChat(chatId).then(function(chat) {
    chatPanelCtrl.chat = chat;
  });

  chatPanelCtrl.addMessage = function() {
    chatPanelCtrl.chat.messages.push({
      text: chatPanelCtrl.text,
      mine: true,
      time: new Date()
    });
    chatPanelCtrl.text = '';
  };

  chatPanelCtrl.removeMessage = function(message) {
    var messageIndex = chatPanelCtrl.chat.messages.indexOf(message);
    chatPanelCtrl.chat.messages.splice(messageIndex, 1);
  };

  chatPanelCtrl.changeAlignment = function(alignment) {
    chatPanelCtrl.alignment = alignment;
  };
});

angular.module('DiaLog').factory('ChatsService', function($http) {

  var service = {};

  service.getChats = function() {
    return loadChats().then(function(chats) {
      _.each(chats, function(chat) {
        chat.lastMessage = _.last(chat.messages);
      });

      return chats;
    });
  };

  service.getChat = function(chatId) {
    return loadChats().then(function(chats) {
      return _.find(chats, { id: chatId });
    });
  };

  var chatsPromise;
  function loadChats() {
    if (!chatsPromise) {
      chatsPromise = $http({
        url: '/data/chats.json'
      }).then(function(res) {
        return res.data;
      });
    }

    return chatsPromise;
  }

  return service;
});

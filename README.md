# Comem+ MAS-RAD DFA Angular Exercise

This repository contains a starter project for an Angular UI router exercise in the [MAS-RAD DFA][dfa] course.

## Exercise

Set up the same kind of routing structure as in the [Angular UI router slides][slides]:

* A home page (state) accessible by clicking the DiaLog link in the navbar
  (a `HomePageController` in `js/home.js` and template in `templates/home.html` are provided for you)
* A chat list page (state) accessible by clicking the My DiaLogs link in the navbar
  (a `ChatsPageController` in `js/chats.js` and template in `templates/chats.html` are provided for you)
* A chat details state showing a chat's messages to the right of the list,
  accessible by clicking one of the chats in the list
  (a `ChatPanelController` in `js/chats.js` and template in `templates/chat-panel.html` are provided for you)

Also:

* Use HTML 5 mode
* Make sure the My DiaLogs link in the navbar is highlighted when in the chat list or chat details states
* Make sure chat list items in `templates/chats.html` are highlighted when the corresponding chat is displayed



[dfa]: https://github.com/MediaComem/comem-masrad-dfa
[slides]: https://mediacomem.github.io/comem-webdev-docs/2017/subjects/angular-ui-router/?home=MediaComem%2Fcomem-masrad-dfa%23readme#1

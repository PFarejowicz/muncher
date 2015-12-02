// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.discover', {
    url: '/discover',
    views: {
      'tab-discover': {
        templateUrl: 'templates/tab-discover.html',
        controller: 'DiscoverCtrl'
      }
    }
  })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'temp.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.outings', {
    url: '/outings',
    views: {
      'tab-outings': {
        templateUrl: 'templates/tab-outings.html',
        controller: 'OutingsCtrl'
      }
    }
  })

  .state('tab.history', {
    url: '/history',
    views: {
      'tab-history': {
        templateUrl: 'templates/tab-history.html',
        controller: 'HistoryCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/profile');

});
//
//
// .controller('Messages', function($scope, $timeout, $ionicScrollDelegate) {
//
//   $scope.showTime = true;
//
//   var genieIndex = 0;
//   var pollIndex = 0;
//   var genieText = ["Hi! I’m Muncher, and I’m here to help you decide what to eat. Launch polls and decide places now with the light-bulb button at the bottom left!",
//     "Awesome! The votes are out:\n Japanese - 4, Italian - 1",
//     "Awesome! The votes are out:\n Palo Alto - 3, Mountain View - 2",
//     "Jin Sho - Modern sushi bar and Japanese kitchen",
//     "Rangoon Ruby - Hearty Burmese family-style cuisine",
//     "Nola's - New Orleans soul food, jazz and drinks",
//     "St. Michael's Alley - New American modern brunch and coffee",
//     "La Bodeguita de Medio - Cuban fine dining with a Latin flair",
//     "Excellent! Based on your group’s preferences, here are the top 3 choices. Click and drag to rank!\n 1. Nola's\n 2. St. Michael's Alley\n 3. Rangoon Ruby",
//     "Are you sure?",
//     "Based on everyone’s preferences, I’ve decided on this place for you all:",
//     "St. Michael's Alley - New American modern brunch and coffee",
//     "I’ve made reservations for St. Michael’s Alley on: Sun Nov 1, 11:30am - 1:30pm",
//     "I’ve added it into your calendar! You’re good to go."];
//   var pollText = ["What cuisine do you prefer at the moment?",
//     "What neighborhood do you prefer at the moment?",
//     "I have a few places in mind: indicate Yes or No and I'll shortlist 3 top options."];
//
//   var isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
//
//   $scope.sendMessage = function() {
//     var d = new Date();
//     d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
//
//     $scope.messages.push({
//       userId: '54321',
//       text: $scope.data.message,
//       time: d
//     });
//
//     if (genieIndex == 0) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[0],
//         time: d
//       });
//       genieIndex++;
//       pollIndex++;
//     } else if (genieIndex == 2) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[1],
//         time: d
//       });
//       genieIndex++;
//       pollIndex++;
//     } else if (genieIndex == 4) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[2],
//         time: d
//       });
//       genieIndex++;
//       pollIndex++;
//     } else if (genieIndex == 7) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[4],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 8) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[5],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 9) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[6],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 10) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[7],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 11) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[8],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 12) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[9],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 13) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[10],
//         time: d
//       });
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[11],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 14) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[12],
//         time: d
//       });
//       genieIndex++;
//     } else if (genieIndex == 15) {
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[13],
//         time: d
//       });
//       genieIndex++;
//     }
//
//     delete $scope.data.message;
//     $ionicScrollDelegate.scrollBottom(true);
//
//   };
//
//   $scope.sendPoll = function() {
//     var d = new Date();
//     d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
//
//     if (pollIndex == 1) {
//       $scope.messages.push({
//         userId: '12345',
//         text: pollText[0],
//         time: d
//       });
//       pollIndex++;
//       genieIndex++;
//     } else if (pollIndex == 3) {
//       $scope.messages.push({
//         userId: '12345',
//         text: pollText[1],
//         time: d
//       });
//       pollIndex++;
//       genieIndex++;
//     } else if (pollIndex == 5) {
//       $scope.messages.push({
//         userId: '12345',
//         text: pollText[2],
//         time: d
//       });
//       pollIndex++;
//       genieIndex++;
//       $scope.messages.push({
//         userId: '12345',
//         text: genieText[3],
//         time: d
//       });
//       genieIndex++;
//     }
//     $ionicScrollDelegate.scrollBottom(true);
//   };
//
//
//   $scope.inputUp = function() {
//     if (isIOS) $scope.data.keyboardHeight = 216;
//     $timeout(function() {
//       $ionicScrollDelegate.scrollBottom(true);
//     }, 300);
//
//   };
//
//   $scope.inputDown = function() {
//     if (isIOS) $scope.data.keyboardHeight = 0;
//     $ionicScrollDelegate.resize();
//   };
//
//   $scope.closeKeyboard = function() {
//     // cordova.plugins.Keyboard.close();
//   };
//
//
//   $scope.data = {};
//   $scope.myId = '12345';
//   $scope.messages = [];
//
// });

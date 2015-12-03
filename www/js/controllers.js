angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope, $location) {
  $scope.goHome = function() {
    $location.path('outings');
  };
})

.controller('DiscoverCtrl', function($scope, $location) {
  $scope.goHome = function() {
    $location.path('outings');
  };
})

.controller('OutingsCtrl', function($scope, $location) {
  $scope.goHome = function() {
    $location.path('outings');
  };

  $scope.openChat = function() {
  	$location.path('messages');
  };

  $scope.items = [
    {title: "Alpha Eta Brunch", description: "Monica, Gloria, Rebecca... (15)", img: "img/time1.png"},
    {title: "Date Night", description: "Yifei", img: "img/time2.png"},
    {title: "CS 147 Team Dinner", description: "KJ, Monica, Gloria, Leigh (5)", img: "img/time3.png"},
    {title: "BASES BD Dinner", description: "Victoria, Sunny, Jonathan (4)", img: "img/time4.png"},
  ]
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true
})

.controller('HistoryCtrl', function($scope, $location) {
  $scope.goHome = function() {
    $location.path('outings');
  };
})

.controller('SettingsCtrl', function($scope, $location) {
  $scope.goHome = function() {
    $location.path('outings');
  };
})

.controller('MessagesCtrl', function($scope, $timeout, $ionicScrollDelegate, $location) {
  $scope.goHome = function() {
    $location.path('outings');
  };

  $scope.showTime = true;

  var genieIndex = 0;
  var pollIndex = 0;
  var genieText = ["Hi! I’m Muncher, and I’m here to help you decide what to eat. Launch polls and decide places now with the light-bulb button at the bottom left!",
    "Awesome! The votes are out:\n Japanese - 4, Italian - 1",
    "Awesome! The votes are out:\n Palo Alto - 3, Mountain View - 2",
    "Jin Sho - Modern sushi bar and Japanese kitchen",
    "Rangoon Ruby - Hearty Burmese family-style cuisine",
    "Nola's - New Orleans soul food, jazz and drinks",
    "St. Michael's Alley - New American modern brunch and coffee",
    "La Bodeguita de Medio - Cuban fine dining with a Latin flair",
    "Excellent! Based on your group’s preferences, here are the top 3 choices. Click and drag to rank!\n 1. Nola's\n 2. St. Michael's Alley\n 3. Rangoon Ruby",
    "Are you sure?",
    "Based on everyone’s preferences, I’ve decided on this place for you all:",
    "St. Michael's Alley - New American modern brunch and coffee",
    "I’ve made reservations for St. Michael’s Alley on: Sun Nov 1, 11:30am - 1:30pm",
    "I’ve added it into your calendar! You’re good to go."];
  var pollText = ["What cuisine do you prefer at the moment?",
    "What neighborhood do you prefer at the moment?",
    "I have a few places in mind: indicate Yes or No and I'll shortlist 3 top options."];

  var isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: '54321',
      text: $scope.data.message,
      time: d
    });

    if (genieIndex == 0) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[0],
        time: d
      });
      genieIndex++;
      pollIndex++;
    } else if (genieIndex == 2) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[1],
        time: d
      });
      genieIndex++;
      pollIndex++;
    } else if (genieIndex == 4) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[2],
        time: d
      });
      genieIndex++;
      pollIndex++;
    } else if (genieIndex == 7) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[4],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 8) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[5],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 9) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[6],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 10) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[7],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 11) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[8],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 12) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[9],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 13) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[10],
        time: d
      });
      $scope.messages.push({
        userId: '12345',
        text: genieText[11],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 14) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[12],
        time: d
      });
      genieIndex++;
    } else if (genieIndex == 15) {
      $scope.messages.push({
        userId: '12345',
        text: genieText[13],
        time: d
      });
      genieIndex++;
    }

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };

  $scope.sendPoll = function() {
    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    if (pollIndex == 1) {
      $scope.messages.push({
        userId: '12345',
        text: pollText[0],
        time: d
      });
      pollIndex++;
      genieIndex++;
    } else if (pollIndex == 3) {
      $scope.messages.push({
        userId: '12345',
        text: pollText[1],
        time: d
      });
      pollIndex++;
      genieIndex++;
    } else if (pollIndex == 5) {
      $scope.messages.push({
        userId: '12345',
        text: pollText[2],
        time: d
      });
      pollIndex++;
      genieIndex++;
      $scope.messages.push({
        userId: '12345',
        text: genieText[3],
        time: d
      });
      genieIndex++;
    }
    $ionicScrollDelegate.scrollBottom(true);
  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

});

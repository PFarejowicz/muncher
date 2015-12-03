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
      time: d,
      width: "0",
      height: "0"
    });

    if (genieIndex == 0) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/1.png",
        width: "210",
        height: "120"
      });
      genieIndex++;
      pollIndex++;
    } else if (genieIndex == 2) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/3.png",
        width: "170",
        height: "80"
      });
      genieIndex++;
      pollIndex++;
    } else if (genieIndex == 4) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/5.png",
        width: "170",
        height: "100"
      });
      genieIndex++;
      pollIndex++;
    } else if (genieIndex == 7) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/8.png",
        width: "200",
        height: "142"
      });
      genieIndex++;
    } else if (genieIndex == 8) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/9.png",
        width: "200",
        height: "142"
      });
      genieIndex++;
    } else if (genieIndex == 9) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/10.png",
        width: "200",
        height: "142"
      });
      genieIndex++;
    } else if (genieIndex == 10) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/11.png",
        width: "200",
        height: "142"
      });
      genieIndex++;
    } else if (genieIndex == 11) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/12.png",
        width: "200",
        height: "310"
      });
      genieIndex++;
    } else if (genieIndex == 12) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/13.png",
        width: "90",
        height: "30"
      });
      genieIndex++;
    } else if (genieIndex == 13) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/14.png",
        width: "200",
        height: "70"
      });
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/15.png",
        width: "200",
        height: "160"
      });
      genieIndex++;
    } else if (genieIndex == 14) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/16.png",
        width: "200",
        height: "110"
      });
      genieIndex++;
    } else if (genieIndex == 15) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/17.png",
        width: "200",
        height: "50"
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
        time: d,
        img: "img/2.png",
        width: "190",
        height: "60"
      });
      pollIndex++;
      genieIndex++;
    } else if (pollIndex == 3) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/4.png",
        width: "200",
        height: "70"
      });
      pollIndex++;
      genieIndex++;
    } else if (pollIndex == 5) {
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/6.png",
        width: "200",
        height: "80"
      });
      pollIndex++;
      genieIndex++;
      $scope.messages.push({
        userId: '12345',
        time: d,
        img: "img/7.png",
        width: "200",
        height: "142"
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

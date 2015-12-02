angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ProfileCtrl', function($scope) {})

.controller('DiscoverCtrl', function($scope) {})

.controller('OutingsCtrl', function($scope) {
  $scope.items = [
    {title: "Alpha Eta Brunch", description: "Monica, Gloria, Rebecca... (15)"},
    {title: "Date Night", description: "Yifei"},
    {title: "CS 147 Team Dinner", description: "KJ, Monica, Gloria, Leigh (5)"},
    {title: "BASES BD Dinner", description: "Victoria, Sunny, Jonathan (4)"},
  ]
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true
})

.controller('HistoryCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {})

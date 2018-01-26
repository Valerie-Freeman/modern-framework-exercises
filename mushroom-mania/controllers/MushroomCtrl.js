"use strict";

angular.module("mushrooms").controller("MushroomCtrl", function($scope, MushroomFactory) {
    console.log("mushctrl");
    MushroomFactory.getShrooms()
    .then( (shroomData) => {
        $scope.mushrooms = Object.values(shroomData.data);
        console.log('shroomData', $scope.mushrooms);
    });

});
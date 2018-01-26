"use strict";

angular.module("mushrooms", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl: "partials/mushrooms.html",
        controller: "MushroomCtrl"
    })
    .otherwise("/")
})
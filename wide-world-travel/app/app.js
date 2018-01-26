"use strict";

angular.module("worldTravel", ["ngRoute"])
.config($routeProvider =>  {
    $routeProvider
    .when("/", {
        templateUrl: "../partials/books.html",
        controller: "BookCtrl"
    })
    .otherwise("/")
})
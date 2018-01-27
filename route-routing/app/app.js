"use strict";

angular.module("routing", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl: "../partials/greeting.html"
    })
    .when("/12", {
        templateUrl: "../partials/hwy.html",
        controller: "Hwy12Ctrl"
    })
    .when("/overseas", {
        templateUrl: "../partials/hwy.html",
        controller: "OverseasHwyCtrl"
    })
    .otherwise("/");
})
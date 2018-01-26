"use strict";

angular.module("worldTravel").controller("BookCtrl", function($scope, BookFactory) {
    BookFactory.getBooks()
    .then(books =>{
        $scope.books = books.data.guides;
        console.log($scope.books);
    });
})
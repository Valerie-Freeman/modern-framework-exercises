"use strict";

angular.module("worldTravel").factory("BookFactory", function($q, $http) {
        let getBooks = () => {
            return $q( (resolve, reject) => {
                $http
                .get("../data/guides.json")
                .then(books => {
                    resolve(books);
                })
                .catch(err => {
                    reject(err);
                });
            });
        };
        return {getBooks};
})
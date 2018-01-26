"use strict";

angular.module("mushrooms").factory("MushroomFactory", function($q, $http) {
    let getShrooms = () => {
        return $q( (resolve, reject) => {
            $http
            .get("https://mushroom-c23.firebaseio.com/mushrooms.json")
            .then( (shrooms) => {
                resolve(shrooms);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };
    return { getShrooms };
});

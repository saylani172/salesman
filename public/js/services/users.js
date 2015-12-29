angular.module("salesman")
    .service("users", function ($scope, $http) {
        $http.get("/users/user").then(
            function (err) {
                console.log(err)
            },
            function (data) {
                console.log(data)
            })
    });
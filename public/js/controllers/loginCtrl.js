angular.module("salesman")
    .controller("LoginCtrl", function ($http, $scope, $timeout, $mdDialog, $location) {
        $scope.loginNow = function () {
            var obj = {
                userName: $scope.user.userName.toLowerCase(),
                password: $scope.user.password.toLowerCase()
            };
            $http.post("/account/login", obj)
                .then(
                    function (data) {
                        var user = data.data;
                        if (!user) {
                            $scope.showMsg("Invalid user name or password!");
                        }
                        else {
                            $timeout(function () {
                                $mdDialog.hide();
                                $scope.showMsg("Welcome " +
                                    user.firstName.charAt(0).toUpperCase() +
                                    user.firstName.slice(1) + " " +
                                    user.lastName.charAt(0).toUpperCase() +
                                    user.lastName.slice(1));
                                $location.path("/dashboard/"+user._id);
                            }, 2000);
                            $scope.showLoading();
                        }
                    },
                    function (err) {
                        console.log(err);
                    });
        }
    });
angular.module("salesman")
    .controller("SignUpCtrl", function ($scope, $http, $timeout, $location, $mdDialog) {
        $scope.addUser = function () {

            if ($scope.user.password == $scope.user.ConfirmPassword) {
                var obj = {
                    firstName: $scope.user.firstName.toLowerCase(),
                    lastName: $scope.user.lastName.toLowerCase(),
                    userName: $scope.user.userName.toLowerCase(),
                    password: $scope.user.password.toLowerCase()
                };
                $http.post("/account/signup", obj)
                    .then(
                        function (success) {
                            if (success.data.message) {
                                $scope.showMsg(success.data.message)
                            }
                            else {
                                $scope.showLoading();
                                $timeout(function () {
                                    $mdDialog.hide();
                                    $location.path("/dashboard/" + success.data._id);
                                    $scope.showMsg("Account Successfully created")
                                }, 1500);
                            }
                        },
                        function (err) {
                            console.log(err);
                        });
            }
            else {
                $scope.user.password = "";
                $scope.user.ConfirmPassword = "";
                $scope.showMsg("These passwords don't match. Try again?");
            }


        }
    });
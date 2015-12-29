angular.module("salesman")
    .controller("AppCtrl", function ($scope, $mdToast, $mdDialog, $timeout, $state) {
        $scope.showMsg = function showMsg(msg) {
            $mdToast.show(
                $mdToast
                    .simple()
                    .textContent(msg)
                    .position("bottom right")
                    .hideDelay(2000)
            )

        };
        $scope.showLoading = function () {
            $mdDialog.show({
                template: '' +
                '<md-dialog class="loading">' +
                '<md-progress-circular md-diameter="100"></md-progress-circular>' +
                '</md-dialog>',
                parent: angular.element(document.body),
                clickOutsideToClose: false
            });
        };
        $scope.doLogOut = function () {
            $scope.showLoading();
            $timeout(function () {
                $mdDialog.hide();
                $state.go("login")
            },1000)

        }
    });
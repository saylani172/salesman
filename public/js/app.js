angular.module("salesman", ["ngMaterial", "ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: "LoginCtrl"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "templates/signup.html",
                controller: "SignUpCtrl"
            })
            .state("dashboard", {
                url: "/dashboard/:uId",
                templateUrl: "templates/dashboard.html",
                controller: "Dashboard"
            });
        $urlRouterProvider.otherwise("/login");
    });

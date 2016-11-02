
var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/contact", {
        templateUrl : "app/views/contact.html"
    })
    .when("/about", {
        templateUrl : "app/views/about.html"
      })

.otherwise({
	redirectTo:'/'
});
});
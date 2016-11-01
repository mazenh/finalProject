(function (){
	angular.module("app").config(route);
	function route($routeProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "/app/views/html2.html",
        // controller: "animalId",
    });
};
})();

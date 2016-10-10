(function(){
	var app=angular.module("app");
	app.controller("animalId",animalId);
	function animalId($scope){
		$scope.send=function(){
				var data={
					name:$scope.name,
					age:$scope.age,
					breed:$scope.breed,
					location:$scope.location,
					file:$scope.file,
				};
				var JSONdata=JSON.stringify(data);
				localStorage.setItem("data",JSONdata);
		     };
		      $scope.getData= function(){
		      var data = localStorage.getItem("data");
		      var parsedData =JSON.parse(data);
		      alert(parsedData.name);  
		};
	}
})();

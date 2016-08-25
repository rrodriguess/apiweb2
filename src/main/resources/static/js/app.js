//Criação do modulo principal da aplicação
var appCliente = angular.module("appCliente", []);

//Criação de controllers
appCliente.controller("indexController", function($scope, $http) {

    $scope.nome = "Jão";
    $scope.sobrenome = "da Silva";
    $scope.clientes = [];

    $http({method:'GET', url:'http://localhost:8081/clientes'})
        .then(function(response){
            $scope.clientes = response.data;

            console.log(response.data);
            console.log(response.status);
        }, function(response){
            console.log(response.data);
            console.log(response.status);
        });

});




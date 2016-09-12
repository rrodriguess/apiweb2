//Criação do modulo principal da aplicação
var appCliente = angular.module("appCliente", []);

//Criação de controllers
appCliente.controller("indexController", function($scope, $http) {

    $scope.clientes = [];
    $scope.cliente={}; //Binding com o form

    $scope.carregarClientes = function() {
        $http({method:'GET', url:'http://localhost:8081/clientes'})
            .then(function(response){
                $scope.clientes = response.data;

            }, function(response){
                console.log(response.data);
                console.log(response.status);
        });
    };

    $scope.salvarCliente = function() {
        $http({method:'POST', url:'http://localhost:8081/clientes', data:$scope.cliente})
            .then(function(response){
                $scope.clientes.push(response.data);

            }, function(response){
                console.log(response.data);
                console.log(response.status);
        });
    };

    $scope.excluirCliente = function(cliente) {
        $http({method:'DELETE', url:'http://localhost:8081/clientes/'+cliente.id})
            .then(function(response){
            //Buscar posição  e remover cliente do Array.
            pos = $scope.clientes.indexOf(cliente);
            $scope.clientes.splice(pos, 1);

            }, function(response){
                console.log(response.data);
                console.log(response.status);
        });
    };

    $scope.alterarCliente = function(cli) {
        $scope.cliente = angular.copy(cli);
    };

    $scope.cancelarAlteracaoCliente = function() {
        $scope.cliente={};
    };

    $scope.carregarClientes();


});




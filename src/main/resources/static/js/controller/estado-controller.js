appCliente.controller("estadoController", function($scope, $http) {

    $scope.estados = [];
    $scope.estado={}; //Binding com o form

    carregarEstados = function() {
        $http({method:'GET', url:'http://localhost:8081/estados'})
            .then(function(response){
                $scope.estados = response.data;

            }, function(response){
                console.log(response.data);
                console.log(response.status);
        });
    };

    $scope.salvarEstado = function() {
        $http({method:'POST', url:'http://localhost:8081/estados', data:$scope.estado})
            .then(function(response){
                //$scope.estados.push(response.data);
                carregarEstados();
                $scope.cancelarAlteracaoEstado();

            }, function(response){
                console.log(response.data);
                console.log(response.status);
        });
    };

    $scope.excluirEstado = function(estado) {
        $http({method:'DELETE', url:'http://localhost:8081/estado/'+estado.id})
            .then(function(response){
            //Buscar posição  e remover estado do Array.
            pos = $scope.estados.indexOf(estado);
            $scope.estados.splice(pos, 1);

            }, function(response){
                console.log(response.data);
                console.log(response.status);
        });
    };

    $scope.alterarEstado = function(cli) {
        $scope.estado = angular.copy(cli);
    };

    $scope.cancelarAlteracaoEstado = function() {
        $scope.estado={};
    };

    carregarEstados();


});

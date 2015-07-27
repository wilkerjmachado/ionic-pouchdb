/**
 * Created by wilker on 21/07/15.
 */
app.controller('ContatosListCtrl', function ($scope, ContatosRepository, $rootScope, $location) {

    $scope.pagina = 0
    $scope.continuarBusca = true;
    $scope.contatos = [];

    $scope.editar = function (contato) {
        $location.path("/contatos/edit/"+contato._id);
    }

    $scope.excluir = function (index, contato) {
        ContatosRepository.delete(contato).then(function (result) {
            $scope.continuarBusca = true;
            $scope.contatos.splice(index, 1);
        });
    }

    $scope.atualizarLista = function () {
        ContatosRepository.getPage($scope.pagina).then(function (result) {
            if (result.docs.length < $rootScope.limitBusca || result.docs.length === 0) {
                $scope.continuarBusca = false;
            }
            $scope.contatos = $scope.contatos.concat(result.docs);
            $scope.pagina++;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }).catch(function (err) {
            console.log('Erro - ' + err)
        });
    }

    $scope.limparCampos = function () {
        $scope.pagina = 0;
        $scope.contatos = [];
        $scope.continuarBusca = true;
    }
})
    .controller('ContatosEditCtrl', function ($scope, ContatosRepository, $rootScope, $stateParams, $location) {

        if( $stateParams.id){
            ContatosRepository.get($stateParams.id).then(function (result) {
                $scope.contato = result.docs[0];
            });
        }else{
            $scope.contato = {};
        }

        $scope.salvarContato = function (contato) {
            ContatosRepository.saveOrUpdate(contato).then(function (result) {
                $scope.limparCampos();
                $location.path("/contatos/list");
            }).catch(function (err) {
                console.log('Erro - ' + err)
            });
        }

        $scope.limparCampos = function(){
            $scope.contato = {};
        }

    });

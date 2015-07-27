/**
 * Created by wilker on 21/07/15.
 */

app.service('ContatosRepository', function (pouchDB, $rootScope) {

    $rootScope.limitBusca = 5;

    var db = pouchDB('curso');


    return {
        saveOrUpdate: function (contato) {
            contato.type = 'tabelaContato'
            contato.timestamp = new Date().getTime();
            if (contato._id) {
                return db.put(contato);
            } else {
                return db.post(contato);
            }
        },
        delete: function (contato) {
            return db.remove(contato);
        },
        get: function (id) {
            return db.find({
                selector: {type: 'tabelaContato', _id: {$eq: id}},
                limit: 1
            });
        },
        getAll: function () {
            return db.find({
                selector: {type: 'tabelaContato'}
            });
        },
        getPage: function (pagina) {
            return db.find({
                skip: pagina * $rootScope.limitBusca,
                limit: $rootScope.limitBusca,
                selector: {type: 'tabelaContato', nome: {$exists: true}},
                sort: ['nome']
            });
        },
        createIndex: function(){
            db.createIndex({
                index: {
                    fields: ['nome', 'type']
                }
            })
        }

    }

});
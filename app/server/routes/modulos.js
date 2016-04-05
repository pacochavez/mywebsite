var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});

var loadData = function(data){
    var name;
    var query = {};
    var condicion = {};
    switch(data){
        case 'year':
            name = 'timeline';
            query[data] = 1;
            break;
        case 'icons':
            name = 'icons';
            break;
        case 'networks':
            name = 'socialmedia';
            break;
        case 'modulos':
            name = 'modules';
            query ={name:1,link:1,active:1,order:1}
            condicion ={active:1,status:'public'}
            break;
        case 'time-line':
            name = 'timeline';
            query ={year:1,descriptions:1,icon:1}
            break;
    }
    return {
        name:name,
        query: query,
        condicion : condicion
    };
}

db = new Db('pacochavez', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'Modulodb' database");
        db.collection('timeline', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'main_modules' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.home = function(req, res) {
    res.render('app');
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving Modulo: ' + id);
    db.collection('main_modules', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};


exports.findAll = function(req, res) {
    var id = req.params.data;
    var data = loadData(id);
   
    db.collection(data.name, function(err, collection) {
         collection.find(data.condicion,data.query).toArray(function(err, items) {
             res.send(items);
         });
     });
};

var form_name = function(name){
    var collection_name;
    switch(name){
        case 'T':
        collection_name = 'timeline';
        break; 
        case 'I':
        collection_name = 'icons';
        break;
        case 'S':
        collection_name = 'socialmedia';
        break;
        case 'M':
        collection_name = 'modules';
        break;
    }
    return collection_name;
    
}
exports.addModulo = function(req, res) {
    var modulo = req.body;
    var name = form_name(modulo.form);
     console.log(modulo);
    db.collection(name, function(err, collection) {
        collection.insertOne(modulo.send, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(JSON.stringify(result.result));
            }
        });
    });
}

exports.updateModulo = function(req, res) {
    var id = req.params.id;
    var modulo = req.body;
    var name = form_name(modulo.form);    
    db.collection(name, function(err, collection) {
        collection.update(modulo.id,modulo.send,{save:true},function(err, result) {
            if (err) {
                console.log('Error updating Modulo: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(modulo);
            }
        });
    });
}

exports.deleteModulo = function(req, res) {
    var id = req.params.id;
    console.log('Deleting Modulo: ' + id);
    db.collection('main_modules', function(err, collection) {
        collection.remove({'_id':id}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

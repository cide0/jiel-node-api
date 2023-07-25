const db = require('./MongoDBConnector');


async function getDataForParams(res, esp, type = '', limit = 1000, order = 'ASC'){

    let dataModel = getDataModel(esp);
    if(!dataModel){
        res.status(400);
        return 'The given esp name `' + esp + '` does not exist, only `jack` or `elias` allowed!';
    }

    let filter = getFilter(type);

    let resultOrder = getOrder(order);
    if(!resultOrder){
        res.status(400);
        return 'The specified order `' + order + '` is not valid, only `ASC` or `DESC` allowed!';
    }

    let result = await dataModel.find(filter).sort({_id: resultOrder}).limit(limit).then(function(data) {
        if(data[0]){
            return data;
        } else {
            res.status(400);
            return 'No data found matching esp: ' + esp + ' and type: ' + type + '!';
        }
    }).catch(function(err) {
        res.status(500);
        return err;
    });

    return result;
}

function getDataModel(esp){
    if(esp == 'elias'){
        return db.DataModelElias;
    }
    else if (esp == 'jack'){
        return db.DataModelJack;
    }
    else {
        return false;
    }
}

function getFilter(type){
    if(type == ''){
        return {};
    } else {
        return {"type" : {$regex : type}};
    }
}

function getOrder(order){
    if(order == 'ASC'){
        return 1;
    } 
    else if (order == 'DESC'){
        return -1;
    } else {
        return false;
    }
}

module.exports = getDataForParams;
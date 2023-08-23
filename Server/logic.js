const db =require('./db');

const allLists =(id)=>{
    return db.list.find().then(
        (result)=>{
            if(result){
                return {
                  statusCode: 200,
                  product: result,
                };
            }
            else
            return {
              statusCode: 404,
              message: "no data is available",
            };
        }
    )
}

module.exports={
    allLists,
}
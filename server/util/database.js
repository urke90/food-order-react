// const { MongoClient } = require('mongodb');

// const MONGO_DB_URL =
//     'mongodb+srv://urke90:cikaKure1990@cluster0.yqbde.mongodb.net/food-order-app?retryWrites=true&w=majority';

// let _db;

// const mongoConnect = (cb) => {
//     MongoClient.connect(MONGO_DB_URL)
//         .then((client) => {
//             //console.log('result connecting to DB', client);
//             _db = client.db();
//             cb(client);
//         })
//         .catch((err) => {
//             console.log('err', err);
//             throw err;
//         });
// };

// const getDb = () => {
//     if (_db) {
//         return _db;
//     }
//     throw 'No database found!!!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

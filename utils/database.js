const mongoose = require('mongoose');

const url = process.env.ATLAS_URL;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(url, clientOptions);
mongoose.Promise = global.Promise;

module.export = mongoose;



// ATLAS_URL=mongodb+srv://rakoto:rakoto@perso.pc8w8fv.mongodb.net/?retryWrites=true&w=majority
// SECRET_KEY=nodeRestApi
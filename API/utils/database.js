const mongoose = require('mongoose');

const url = process.env.ATLAS_URL;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(url, clientOptions);
mongoose.Promise = global.Promise;

module.export = mongoose;
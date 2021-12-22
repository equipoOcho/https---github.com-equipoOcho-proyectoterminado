const mongoose = require('mongoose');

const URI = 'mongodb+srv://root:Uninorte123@cluster0.sh6gg.mongodb.net/plataforma?retryWrites=true&w=majority';
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
    
module.exports = mongoose;
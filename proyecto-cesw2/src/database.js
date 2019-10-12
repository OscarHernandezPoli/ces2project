const mongoose = require('mongoose');

const URI = 'mongodb+srv://user_admin:748596@projectcesw2-zrsle.mongodb.net/test?retryWrites=true&w=majority';

//mongodb+srv://user_admin:<748596>@projectcesw2-zrsle.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(URI)
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.log(err));

    module.exports=mongoose;
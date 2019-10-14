const express = require('express');
const routerUser = express.Router();
const User = require('../models/userModel');

//read
routerUser.get('/', async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);

});

//read one
routerUser.get('/:cedula', async (req, res) => {
    const user = await User.find({ cedula: req.params.cedula });
    res.json(user);
});

//create
routerUser.post('/', async (req, res, next) => {
    const { cedula, fullName, number, email, company, workArea } = req.body;
    try {
        const user = new User({ cedula, fullName, number, email, company, workArea });
        await user.save();
        console.log(user);
        res.status(200).json({ status: 'user saved' });
    } catch (error) {
        next(error);
    }

});

//update
routerUser.put('/:cedula', async (req, res, next) => {
    const { cedula, fullName, number, email, company, workArea } = req.body;
    try {
        const newUser = { cedula, fullName, number, email, company, workArea };
        console.log({ cedula: req.params.cedula });
        await User.findOneAndUpdate({ cedula: req.params.cedula }, newUser);
        res.status(200).json({ status: 'user update' });
    } catch (error) {
        console.log(error);
        next(error);
    }


});

//delete
routerUser.delete('/:cedula', async (req, res) => {
    const {cedula} = req.body;
    try {
        await User.findOneAndDelete({cedula: cedula});
        res.status(200).json({ status: 'User deleted' });
    } catch (error) {
        console.log(error);
    }
    
})


module.exports = routerUser;
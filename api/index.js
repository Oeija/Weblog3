const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'qowij9283ejo23ionjd293u92n9d';

app.use(cors({ origin: 'http://localhost:5174', credentials:true }));
app.use(express.json());
app.use(cookieParser());

//Connect Mongoose Database
mongoose.connect('mongodb+srv://weblog3:L0CJs2wrYKiHJgjR@cluster0.rtcgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username, password:bcrypt.hashSync(password,salt)});
        res.json(userDoc);
    } catch(e){
        res.status(400).json(e);
    }
    
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    
    if(passOk){
        jwt.sign({username, id:userDoc._id}, secret, {}, () => {
            if(err) throw err;
            res.cookie('token', token).json('ok');
        });
    }else{
        res.status(400).json('wrong credentials');
    }
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json({
        id: userDoc._id,
        username,
    });
})

app.listen(4000);
const express = require('express');

const {clientSignup,getclient,deleteclient} = require('../controller/Clientsignup');
const jwttoken = require('../Token/token');
const protect = require('../Middlewear/Tocken');
const login = require('../controller/Login');

const { getevents, Createvents, deleteevent } = require('../controller/Eventss');


const router = express.Router();
const middleware=[protect]

router.route('/Signupclient').post(clientSignup)
router.route('/verify').get(middleware,clientSignup)
router.route('/login').post(login)
router.route('/get').get(getclient)  
router.route('/delete/:id').delete(deleteclient)
router.route('/eventcreate').post(Createvents)
router.route('/getevent').get(getevents)  
router.route('/deleteevent/:id').delete(deleteevent)
module.exports =router
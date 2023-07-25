const getDataForParams = require('./DataController');
const express = require('express');


function setRoutes(app) {

    app.use(express.static('public'));

    app.get('/data/:esp-:type', async (req, res) => {
        let esp = req.params.esp;
        let type = req.params.type;
        let data = await getDataForParams(res, esp, type);
        res.json(data);
    });

    app.get('/data/:esp-:type/:limit', async (req, res) => {
        let esp = req.params.esp;
        let type = req.params.type;
        let limit = +req.params.limit;
        let data = await getDataForParams(res, esp, type, limit);
        res.json(data);
    });

    app.get('/data/:esp-:type/:limit/:order', async (req, res) => {
        let esp = req.params.esp;
        let type = req.params.type;
        let limit = +req.params.limit;
        let order = req.params.order; 
        let data = await getDataForParams(res, esp, type, limit, order);
        res.json(data);
    });

    app.get('/data/:esp', async (req, res) => {
        let esp = req.params.esp;
        let type = '';
        let data = await getDataForParams(res, esp, type);
        res.json(data);
    });

    app.get('/data/:esp/:limit', async (req, res) => {
        let esp = req.params.esp;
        let limit = +req.params.limit;
        let type = '';
        let data = await getDataForParams(res, esp, type, limit, order);
        res.json(data);
    });

    app.get('/data/:esp/:limit/:order', async (req, res) => {
        let esp = req.params.esp;
        let limit = +req.params.limit;
        let type = '';
        let order = req.params.order; 
        let data = await getDataForParams(res, esp, type, limit, order);
        res.json(data);
    });

    app.get('*', (req, res) => {
        res.status(404).send('Error 404: Requested route does not exist!');
    });
}

module.exports = setRoutes;
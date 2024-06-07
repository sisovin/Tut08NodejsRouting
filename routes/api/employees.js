const express = require('express');
const router = express.Router();
const data = {};
data.employees = require('../../data/employees.json');

router.route('/')
    // To retrieve all records, use GET method
    .get((req, res) => {
        res.json(data.employees);
    })
    // To add a record, use POST method
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    // To update a record, use PUT method
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    // delete a record, use DELETE method
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });

router.route('/:id')
    // To retrieve a record by id, use GET method
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });

module.exports = router;
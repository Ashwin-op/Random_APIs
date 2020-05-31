// Importing libraries
const axios = require('axios')
const express = require('express');
const router = express.Router();

// GET homepage
router.get('/', function (req, res) {
    // Initializing variables
    let activityData, quoteData;

    // Defining functions
    function getActivity() {
        return axios.get('https://www.boredapi.com/api/activity/');
    }

    function getQuote() {
        return axios.get('https://programming-quotes-api.herokuapp.com/quotes/random');
    }

    // Getting the data from APIs
    Promise.all([getActivity(), getQuote()])
        .then(function (results) {
            activityData = results[0].data;
            quoteData = results[1].data;

            res.render('index', {activity: activityData, quote: quoteData});
        })
        .catch(reason => {
            console.log(reason);
        });
});

module.exports = router;

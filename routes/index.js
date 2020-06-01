// Importing libraries
const axios = require('axios')
const express = require('express');
const router = express.Router();

// GET homepage
router.get('/', (req, res) => {
    // Initializing variables
    let activityData, quoteData;

    // Defining functions
    const getActivity = () => axios.get('https://www.boredapi.com/api/activity/');
    const getQuote = () => axios.get('https://programming-quotes-api.herokuapp.com/quotes/random');

    // Getting the data from APIs
    Promise.all([getActivity(), getQuote()])
        .then(results => {
            activityData = results[0].data;
            quoteData = results[1].data;

            res.render('index', {activity: activityData, quote: quoteData});
        })
        .catch(reason => {
            console.log(reason);
        });
});

module.exports = router;




function middle(req, res, next){
    console.log('I am middleware function...');
    next();
}

function authen(req, res, next){
    console.log('Authentifikatsiya');
    next();
}

module.exports.middle = middle;
module.exports.authen = authen;

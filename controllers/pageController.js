const pageIndex = (req, res) => {
    res.render('home', {title: 'Home'});
}

const streamer = (req, res) => {
    res.render('streamer', {title: 'Streamer'});
}

const client = (req, res) => {
    res.render('client', {title: 'Client'});
}
module.exports = {
    pageIndex,
    streamer, 
    client
}
const pageIndex = (req, res) => {
    res.render('home', {title: 'Home'});
}

const takeAttendance = (req, res) => {
    res.render('takeAttendance', {title: 'Take Attendance'});
}

const client = (req, res) => {
    res.render('client', {title: 'Client'});
}

const train = (req, res) => {
    res.render('train', {title: 'Train'});
}

const viewAttendance = (req, res) => {
    res.render('viewAttendance', {title: 'View Attendance'})
}

module.exports = {
    pageIndex,
    takeAttendance, 
    client,
    train,
    viewAttendance
}
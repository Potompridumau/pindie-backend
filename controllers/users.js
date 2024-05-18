const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user));
};

const sendUserUpdated = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end({ message: 'Пользователь обновлен' });
};

const sendUserDeleted = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.user));
};

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(res.user);
    res.end(JSON.stringify(req.user));
};

module.exports = sendAllUsers;
module.exports = sendUserCreated;
module.exports = sendUserUpdated;
module.exports = sendUserDeleted;
module.exports = sendMe;

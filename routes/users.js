const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users');
const sendUserUpdated = require('../controllers/games');
const updateUser = require('../middlewares/games');
const sendUserDeleted = require('../controllers/games');
const deleteUser = require('../middlewares/games');
const checkIsUserExists = require('../middlewares/games');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/games');
const checkEmptyNameAndEmail = require('../middlewares/games');
const hashPassword = require('../middlewares/users');
const checkAuth = require("../middlewares/auth.js");
const sendMe = require("../controllers/users.js");

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.put(
    '/users/:id',
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted);



usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;

const categoriesRouter = require('express').Router();

const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');
const createCategory = require('../middlewares/categories');
const sendCategoryCreated = require('../controllers/categories');
const sendCategoryById = require('../controllers/categories');
const findCategoryById = require('../middlewares/categories');
const sendCategoryUpdated = require('../controllers/games');
const updateCategory = require('../middlewares/games');
const sendCategoryDeleted = require('../controllers/games');
const deleteCategory = require('../middlewares/games');
const checkIsCategoryExists = require('../middlewares/games');
const checkEmptyName = require('../middlewares/games');
const checkAuth = require("../middlewares/auth.js");

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
    '/categories',
    findAllCategories,
    checkIsCategoryExists,
    checkAuth,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.put(
    '/categories/:id',
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;

const sendAllCategories = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryCreated = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.category));
};

const sendCategoryUpdated = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end({ message: 'категория обновлена' });
};

const sendCategoryDeleted = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.category));
};

module.exports = sendAllCategories;
module.exports = sendCategoryCreated;
module.exports = sendCategoryUpdated;
module.exports = sendCategoryDeleted;
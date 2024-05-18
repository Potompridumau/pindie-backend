const sendAllGames = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.game));
};

const sendGameUpdated = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.json({ message: 'Игра обновлена' });
};

const sendGameDeleted = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(req.game));
};

module.exports = sendAllGames;
module.exports = sendGameCreated;
module.exports = sendGameUpdated;
module.exports = sendGameDeleted;
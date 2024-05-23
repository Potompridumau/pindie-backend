require('dotenv').config();

const ALLOWEDCORS = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://rich-frontend-practicum.nomoredomainswork.ru',
];

function cors(req, res, next) {
    const { origin } = req.headers;

    // Проверяем, разрешен ли исходный запрос
    if (ALLOWEDCORS.includes(origin)) {
        // Устанавливаем заголовок Access-Control-Allow-Origin
        res.setHeader('Access-Control-Allow-Origin', origin);

        // Разрешаем использование учетных данных
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // Разрешаем заголовки
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');

        // Разрешаем методы
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    next();
}

module.exports = cors;

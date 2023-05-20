// const http = require('http');
// const getCharById = require('../controllers/getCharById');
// const getCharDetail = require('../controllers/getCharDetail');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     let id = req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }

//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

// }).listen(3001, 'localhost');





const http = require('http');
const { sendNotFound } = require('../controllers/controllers');
const characters = require('../utils/data');
const { saveApiData } = require('../controllers/saveApiData')
const { sequelize } = require('../DB_connection') //va en start.js cuando la crees
const PORT = 3001;



http.createServer((req, res) => {
		const takeUrl = req.url.split('/');
		const takeId = Number(takeUrl.pop());
		const url = takeUrl.join('/');

		if (url === '/rickandmorty/character') {
			const character = characters.find((char) => {
				return char.id === takeId;
			});
			if (character) {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(character));
			} else {
				sendNotFound(res);
			}
		} else if (req.url === '/rickandmorty/characters') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(characters));
		} else {
			sendNotFound(res);
		}
	})
	.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let rappers = {
	'21 savage': {
		age: 28,
		birthName: 'Sheyaa Bin Abraham-Joseph',
		birthLocation: 'London, England',
	},
	'nba youngboy': {
		age: 22,
		birthName: 'Kentrell DeSean Gaulden',
		birthLocation: 'Baton Rouge, LA',
	},
	unknown: {
		age: 'unknown',
		birthName: 'unknown',
		birthLocation: 'unknown',
	},
};

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');
});

app.get('/api/rappers', (request, response) => {
	response.json(rappers);
});

app.get('/api/rappers/:rapperName', (request, response) => {
	const rapName = request.params.rapperName.toLowerCase();
	console.log(rapName);
	if (rappers[rapName]) {
		response.json(rappers[rapName]);
	} else {
		response.json(rappers.unknown);
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server running at localhost:${PORT}`);
});

import express from 'express';
import routes from './routes';
const app = express();

app.use(express.json());
app.use(routes);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running  on ${PORT}`);
});

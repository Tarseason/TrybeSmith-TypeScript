import express from 'express';
import ProductsRouter from './routes/products.route';
import UsersRouter from './routes/users.route';

const app = express();

app.use(express.json());
app.use(ProductsRouter);
app.use(UsersRouter);

export default app;

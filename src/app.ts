import express from 'express';
import ProductsRouter from './routes/products.route';
import UsersRouter from './routes/users.route';
import OrderRouter from './routes/orders.route';

const app = express();

app.use(express.json());
app.use(ProductsRouter);
app.use(UsersRouter);
app.use(OrderRouter);

export default app;

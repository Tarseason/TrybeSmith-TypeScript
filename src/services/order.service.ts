import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Orders from '../interfaces/orders.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Orders[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;
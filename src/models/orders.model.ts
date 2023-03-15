import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const result = await this.connection.execute(`
    SELECT 
        orde.id,
        orde.user_id AS userId,
        JSON_ARRAYAGG(prod.id) AS productsIds
    FROM
        Trybesmith.orders AS orde
            INNER JOIN
        Trybesmith.products AS prod ON orde.id = prod.order_id
    GROUP BY prod.order_id;
    `);
    const [rows] = result;
    return rows as Orders[];
  }
}
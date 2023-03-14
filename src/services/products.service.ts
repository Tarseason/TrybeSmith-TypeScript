import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Products from '../interfaces/products.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Products): Promise<Products> {
    return this.model.create(product);
  }
}

export default ProductService;
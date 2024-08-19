import ProductModel from "../models/product.model.js";

class ProductService {

    constructor () {
        this.productModel = ProductModel;
    }

    async getAllProducts() {
        const products = await this.productModel.findAll();
        return products;
    }

    async getProductById(id) {
        const product = await this.productModel.findByPk(id);
        return product;
    }

    async getProductByName(name) {
        const product = await this.productModel.findOne({ where: { name } });
        return product;
    }

    async createProduct(data) {
        const product = await this.productModel.create(data);
        return product;
    }

    async updateProduct(id, data) {
        const product = await this.productModel.update(data, { where: { id } });
        return product;
    }

    async deleteProduct(id) {
        const product = await this.productModel.destroy({ where: { id } });
        return product;
    }

}

export default new ProductService()
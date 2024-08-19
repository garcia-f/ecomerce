import ProductService from "../services/product.service.js";



class ProductController {

    constructor() {
        this.productService = ProductService;
    }

    async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            if(!products || products.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: "No hay productos"
                });
            }
            res.status(200).send({ products });          
        } catch (error) {
            console.error(error);
        }
    }


    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById( id ); 
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se encontro el producto"
                });
            }
            res.status(200).send({ product });
        } catch (error) {
            console.log(error);
        }
    }


    async createProduct(req, res) {
        try {
            const data = req.body;
            const product = await ProductService.createProduct(data);
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se pudo crear el producto"
                });
            }
            res.status(200).send({ product });
        } catch (error) {
           console.log(error);
        }
    }


    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const product = await ProductService.updateProduct(id, data);
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se pudo actualizar el producto"
                });
            }
            res.status(200).send({ product });
        } catch (err) {
            return res.status(err.statusCode || 500).send({
                message: err.message,
                status: err.status
            })
        }
    }


    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.deleteProduct( id );
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se pudo eliminar el producto"
                });
            }
            res.status(200).send({ product });
        } catch (err) {
            // como hace el profe
            return res.status(err.statusCode || 500).send({
                message: err.message,
                status: err.status
            })
        }
    }

}

export default new ProductController()
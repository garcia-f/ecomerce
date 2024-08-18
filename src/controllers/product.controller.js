import ProductService from "../services/product.service.js";



class ProductController {

    constructor() {
        this.productService = ProductService;
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.productService.getAllProducts();
            if(!products || products.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: "No hay productos"
                });
            }
            res.status(200).json({ products });           // es send o json ??????????????
        } catch (error) {
            console.error(error);
        }
    }


    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById( id ); 
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se encontro el producto"
                });
            }
            res.status(200).json({ product });
        } catch (error) {
            console.log(error);
        }
    }


    async createProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.getProductById( id );
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se pudo crear el producto"
                });
            }
            res.status(200).json({ product });
        } catch (error) {
           console.log(error);
        }
    }


    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const product = await this.productService.updateProduct(id, data);
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se pudo actualizar el producto"
                });
            }
            res.status(200).json({ product });
        } catch (err) {
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    }


    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productService.deleteProduct( id );
            if(!product) {
                return res.status(404).send({
                    status: 404,
                    message: "No se pudo eliminar el producto"
                });
            }
            res.status(200).json({ product });
        } catch (err) {
            // como hace el profe
            return res.status(err.statusCode || 500).json({
                message: err.message,
                status: err.status
            })
        }
    }

}


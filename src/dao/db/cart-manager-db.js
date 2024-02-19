import CartModel from "../models/cart.model.js"

class CartManager {
    async createCart() {
        try {
            const newCart = new CartModel({products: []});
            await newCart.save(); 
            return newCart; 
        } catch (error) {
            console.log("Error al crear el nuevo carrito de compras");
        }
    }

    async getCarritoById(id) {
        try {
            const cart = await CartModel.findById(id);
                if(!cart) {
                    console.log("No se encontro el carrito");
                    return null;
                }

            return cart;
        } catch (error) {
            console.log("Error al buscar el Id del carrito");
        }
    }

    async addProductToCaert(cid, pid, quantity = 1) {
        try {
            const cart = await this.getCarritoById(cid); 
            const productExist = cart.products.find(item => item.product.toString() === pid);

            if(productExist) {
                productExist.quantity += quantity;
            } else {
                cart.products.push({product: pid, quantity});
            }

            //Vamos a marcar la propiedad "products" como modificada antes de guardar: 
            cart.markModified("products");

            await cart.save();
            return cart;
            
        } catch (error) {
            console.log("Error al cargar productos al carrito");
        }
    }

}

export default CartManager; 
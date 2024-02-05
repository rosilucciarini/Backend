import ProductModel = require("../models/product.model.js");



class ProductManager {
    async addProduct(newObjet) {
        let { title, description, code, price, status, stock,category, thumbnail } = newObjet;
        let productAll = await this.readProduct();
        let id = parseInt(productAll.length);
        console.log(id)
        for (let i = 0; i < productAll.length; i++) {
          if (productAll[i].code === code) {
            console.log(`El Codigo ${code} ya existe`);
            return;
          }
        }

        const existeProducto = await ProductModel.findOne({code:code});
        if(existeProducto) {
            console.log("El codigo debe ser unico");
            return;
        }

        const newProduct = { title, description, code, price, status, stock,category, thumbnail };
        console.log(newProduct)
        if (!Object.values(newProduct).includes(undefined)) {
          id++;
          productAll.push({ ...newProduct, id: id });
        } else {
          console.log("Debe Completar Todos los Campos");
        }
        await this.saveFile(productAll);
      }
}
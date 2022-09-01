import ShoppingCart from "../models/ShoppingCart.js";


//TODO: usar el isActive
const createShoppingCart = async (req, res) => {
    try{
        const newShoppingCart = await ShoppingCart.create(req.body);
        return res.json({
            msg: 'Carrito de compras creado',
            shoppingCart: newShoppingCart,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear carrito de compras',
            error,
        });
    }
};

const getAllShoppingCart = async (req, res) => {
    try {
        const shoppingCart = await ShoppingCart.find();
        return res.json({
            msg: 'Carritos de compras encontrados',
            data: {
                shoppingCart: shoppingCart
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar carritos de compra',
            error,
        });
    }
};


const updateShoppingCart = async (req, res) => {
    try {
        const { id } = req.params;
        const updateShoppingCart = await ShoppingCart.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.json({
            msg: 'Carrito de compras actualizado',
            data: { shoppingCart: updateShoppingCart},
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar carrito de compras',
            error,
        });
    }
};

const deleteShoppingCart = async (req, res) => {
    try{
      const { id } = req.params;
      const shoppingCart = await ShoppingCart.findByIdAndDelete(id);
      return res.json({
        msg: 'Carrito eliminado'
      });
    }catch (error){
      return res.status(500).json({
        msg: 'error al eliminar carrito',
        error,
      });
    }
  };
  
export { createShoppingCart, getAllShoppingCart, updateShoppingCart, deleteShoppingCart };
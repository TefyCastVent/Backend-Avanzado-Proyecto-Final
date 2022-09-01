import Product from '../models/Product.js'

const createProduct = async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      return res.json({
        msg: 'Producto creado',
        Movie: newMovie,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'error al crear el Producto',
        error,
      });
    }
  };

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json({
          msg: 'Productos encontrados',
          data: products
        })
      } catch (error) {
        return res.status(500).json({
          msg: 'Error al mostrar productos',
          error,
        })
      }
  };
  
  
  const updateProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const updateProduct = await Movie.findByIdAndUpdate(id, req.body, { new: true });
      return res.json({
        msg: 'Producto actualizado',
        data: { product: updateProduct },
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'error al actualizar producto',
        data: error,
      });
    }
  };
  
  const deleteMovieById = async (req, res) => {
    try{
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      return res.json({
        msg: 'Producto eliminado',
        data: { movie },
      });
    }catch (error){
      return res.status(500).json({
        msg: 'error al eliminar producto',
        error,
      });
    }
  };
  
  export { createProduct, getAllProduct, updateProductById, deleteMovieById };
  
  
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const api = express();

api.use(express.json());

api.get('/status', ( req, res ) => {
    return res.json({
        msg: 'API en linea y funcionando'
    })
})
api.use(authRoutes)
api.use(productRoutes)
api.use(categoryRoutes)

export default api;
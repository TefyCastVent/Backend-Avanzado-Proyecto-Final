import express from "express";
// import bookRoutes from "./routes/bookRoutes.js";
// import clientRoutes from "./routes/clientRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const api = express();

api.use(express.json());

api.get('/status', ( req, res ) => {
    return res.json({
        msg: 'API en linea y funcionando'
    })
})
api.use(authRoutes)
// api.use(bookRoutes)
// api.use(clientRoutes)

export default api;
import Coupon from "../models/Coupon.js";

const createCoupon = async (req, res) => {
    try{
        const newCoupon = await Coupon.create(req.body);
        return res.json({
            msg: 'Cupón creado',
            discountCoupon: newCoupon,
        })
    } catch(error){
        return res.status(500).json({
            msg: 'Error al crear cupón',
            error,
        });
    }
};

const getAllCoupon = async (req, res) => {
    try {
        const Coupon = await Coupon.find();
        return res.json({
            msg: 'Cupones encontrados',
            data: {
                Coupon: Coupon,
            }
        })
    } catch (error) {
        return res.json({
            msg: 'Error al buscar cupones de descuento',
            error,
        });
    }
};

export { createCoupon, getAllCoupon };
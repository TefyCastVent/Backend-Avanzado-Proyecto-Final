import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber:{
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ['Administrator', 'Seller', 'Customer'],
    default: 'Customer',
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // TODO: 8 caracteres min, 1 mayus, 1 minus, 1 signo
  password: {
    type: String,
    required: true,
  },
  // Datos para cuando el rol es "Customer"
  // ----------------------------------------------
  adress: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true, 
  },
  outdoorNumber: {
    type: Number,
    required: true
  },
  interiorNumber: {
    type: Number,
  }, 
  betweenStreets: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true, 
  },
  zipCode: {
    type: Number,
    required: true,
  },
  references: {
    type: String,
  },
  contacts: {
    type: [
        { nameContact: String,
          phoneContact: String,
        }
    ]
  },
  // ---------------------------------------
  isVerificate: {
    type:Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Client", schema);


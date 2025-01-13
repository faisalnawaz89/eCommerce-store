import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    items: {type: Array, requried: true},
    amount: {type: Number, requried: true},
    address: {type: Object, requried: true},
    status: { type: String, requried: true, default: 'Order Placed'},
    paymentMethod: {type: String, requried: true},
    payment: {type: Boolean, requried: true, default: false},
    date: {type: Number, required: true}
})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
export default orderModel
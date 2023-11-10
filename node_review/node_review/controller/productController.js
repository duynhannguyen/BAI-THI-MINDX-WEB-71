import { ObjectId } from "mongodb";
import { db } from "../db.js";

const getProduct = async (req, res) => {
  const getAllProduct = await db.inventories
    .find({ instock: { $lt: 100 } })
    .toArray();

  return res.status(200).json({ getAllProduct });
};

const getOrder = async (req, res) => {
  const id = req.params.id;
  const exitstingOrder = await db.orders.findOne({ _id: +id });
  if (!exitstingOrder) {
    return res.status(400).json({
      message: "Order not found",
    });
  }
  const getProductById = await db.inventories.findOne({
    _id: +id,
  });
  const orderWithDescrypt = {
    ...exitstingOrder,
    description: getProductById.description,
  };

  res.status(200).json({
    order: orderWithDescrypt,
  });
};
const productController = { getProduct, getOrder };

export default productController;

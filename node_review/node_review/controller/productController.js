import { db } from "../db.js";

const getProduct = async (req, res) => {
  const getAllProduct = await db.inventories
    .find({ instock: { $lt: 100 } })
    .toArray();

  return res.status(200).json({ getAllProduct });
};

const productController = { getProduct };

export default productController;

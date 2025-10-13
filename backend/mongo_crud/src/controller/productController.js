import Product from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const data = await Product.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};


export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

export const SingleProduct = async (req, res) => {
  try {
    let onedata = await Product.findById(req.params.id);
    if (!onedata) return res.status(404).send("product not found");
    res.json(onedata);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const updateproduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updateproduct);
  } catch (error) {
    console.log(error);
  }
}
export const DeleteProduct = async (req, res) => {
  try {
    let a = await Product.findByIdAndDelete(req.params.id);
    res.send({ product: a, massage: "Product deleted" });
  } catch (error) {
    console.log(error);
  }
};
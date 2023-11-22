const Products = require("../model/product");
const Register = require("../model/userRegister");

exports.zoboFc = async (req, res) => {
  const {productName, price, description, image } = req.body;
  let imagepath = '/images/' + req.file.filename ;
  try {
    const product = await Products.create({
      productName: productName,
      price: price,
      description: description,
      image: imagepath,
    });
    res.status(201).json({
      status: "Success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
  }
};

exports.showProduct = async (req, res) => {
  try {
    const data = await Products.find({});
    res.status(201).json({
      status: "Successful",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

exports.registerUser = async (req, res) => {
  const { fullName, email, password, bvn } = req.body;
  try {
    const user = await Register.create({ fullName, email, password, bvn });
    res.status(201).json({
      status: "Success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Products.findById({ _id: id }).then((update) => {
      res.status(200).json({
        status: "Success",
        update,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "Failed",
    });
  }
};

exports.editProduct = async (req, res) => {
  const id = req.params.id;
  const { productName, price, description } = req.body;
  try {
    await Products.findByIdAndUpdate(id, { productName, price, description });
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "Failled",
    });
  }
};

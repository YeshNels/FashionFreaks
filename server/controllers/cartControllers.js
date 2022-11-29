const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { User } = require('../models');
const { addProducttoCart } = require('../../client/src/utils/api');
//const { getAllCartProducts } = require('../../client/src/utils/api');

module.exports = {
  
  // remove a product from `cart`
  async deleteProduct({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedCart: { productId: params.productId } } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Couldn't find user with this id!" });
    }
    return res.json(updatedUser);
  },

  // get all cart products
  async getAllCartProducts(req, res) {
    const allCartProducts = await Cart.find({});

    if (!allCartProducts) {
      return res.status(400).json({ message: 'No products found in the cart' });
    }
    res.status(200).json(allCartProducts);
  },

  // Add products to the cart
  async addProducttoCart(req,res) {
    const userId = req.params.id;
    const { productId, quantity } = req.body;

    try{
        let cart = await Cart.findOne({userId});
        let item = await Product.findOne({_id: productId});
        if(!item){
            res.status(404).send('Item not found!')
        }
        const price = Product.price;
        const name = Product.name;
        
        if(cart){
            // if cart exists for the user
            let productIndex = Cart.products.findIndex(p => p.productId == productId);

            // Check if product exists or not
            if(productIndex > -1)
            {
                let productItem = cart.products[productIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.products.push({ productId, name, quantity, price });
            }
            cart.bill += quantity*price;
            cart = await cart.save();
            return res.status(201).send(cart);
        }
        else{
            // no cart exists, create one
            const newCart = await Cart.create({
                userId,
                products: [{ productId, name, quantity, price }],
                bill: quantity*price
            });
            return res.status(201).send(newCart);
        }       
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
},

    // Update cart
async updateCart (req, res) {
        const userId = req.params.id;
        const { productId, qty } = req.body;
    
        try{
            let cart = await Cart.findOne({userId});
            let product = await Product.findOne({_id: productId});
    
            if(!product)
                return res.status(404).send('Product not found!'); // not returning will continue further execution of code.
            
            if(!cart)
              return res.status(400).send("Cart not found");
            else{
                // if cart exists for the user
                let productIndex = cart.products.findIndex(p => p.productId == productId);
    
                // Check if product exists or not
                if(productIndex == -1)
                  return res.status(404).send('Product not found in cart!');
                else {
                    let productItem = cart.products[productIndex];
                    productItem.quantity = qty;
                    cart.products[productIndex] = productItem;
                }
                cart.bill = cart.products.reduce((sum, item) => sum + product.price * product.quantity,0);
                cart = await cart.save();
                return res.status(201).send(cart);
            }     
        }
        catch (err) {
            // just printing the error wont help us find where is the error. Add some understandable string to it.
            console.log("Error in update cart", err);
            res.status(500).send("Something went wrong");
        }
    },
    
// Delete products from the cart
async deletefromCart (req,res) {
    const userId = req.params.userId;
    const productId = req.params.productId;
    try{
        let cart = await Cart.findOne({userId});
        let productIndex = cart.products.findIndex(p => p.productId == productId);
        if(itemIndex > -1)
        {
            let productItem = cart.products[productIndex];
            cart.bill -= productItem.quantity*productItem.price;
            cart.products.splice(productIndex,1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
},
  

};



const db = require('../config/connection');
const { Category, Product } = require('../models');

const categoryData = require('./categoryData.json');
const productData = require('./productData.json');


db.once('open', async () => {
    await Category.deleteMany({});
    await Product.deleteMany({});

    const categories = await Category.insertMany(categoryData);
    const products = await Product.insertMany(productData);

    console.log('Category seeded!');
    console.log('Product seeded!');
    process.exit(0);
});

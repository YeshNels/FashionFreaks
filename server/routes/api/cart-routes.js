const router = require('express').Router();
const {
    getAllCartProducts,
    addProducttoCart,
    updateCart,
    deletefromCart,
  } = require('../../controllers/cartControllers');


router.route('/:id').get(getAllCartProducts);
router.route('/:id').post(addProducttoCart);
router.route('/:id').put(updateCart);
router.route('/:userId/:itemId').delete(deletefromCart);

module.exports = router;
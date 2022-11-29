
const router = require('express').Router();
const {
    get_orders,
    checkout,
  } = require('../../controllers/orderControllers');

router.route('/order/:id').get(get_orders);
router.route('/order/:id').post(checkout);

module.exports = router;
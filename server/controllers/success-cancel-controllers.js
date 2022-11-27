//Create a Checkout Session
// POST v1/checkout/sessions
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

app.post('/v1/checkout/sessions', async (req, res) => {
const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
  line_items: [
    {price: 'price_H5ggYwtDq4fbrJ', quantity: 2},
  ],
  mode: 'payment',
});

res.redirect(303, session.url);
});
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (request, response) => {
  const { id } = request.params;
  response.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (request, response) => {
  response.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (r, response) => {
  const name = r.body.userName;
  response.send(`Welcome ${name}`);
});

app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});

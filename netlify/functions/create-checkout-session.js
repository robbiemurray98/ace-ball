

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const ALLOWED_PRICE_IDS = [
    'price_1UIyNCF1qnrB31fNINsey3PL',
    'price_1UIyNAF1qnrB31fNXkhp4FPl',
    'price_1UIyN8F1qnrB31fNqrPtTjD0',
    'price_1UIyN5F1qnrB31fNSdOMzBeH',
    'price_1UIyMzF1qnrB31fNuEY814ho'
];

exports.handler = async (event) => {
  // 1. Setup CORS headers to allow GitHub Pages to talk to Netlify
  const headers = {
    'Access-Control-Allow-Origin': 'https://playaceball.com', // or your GitHub Pages URL
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // 2. Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Ensure it's a POST request
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    // Parse the incoming JSON body
    const { priceId } = JSON.parse(event.body);

    if (!priceId) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing priceId' }) };
    }

    if (!ALLOWED_PRICE_IDS.includes(priceId)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid product' }) };
    }

    // Create the Stripe session
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded_page',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      // return_url: 'https://playaceball.com/thank-you-page.html?session_id={CHECKOUT_SESSION_ID}',
      return_url: 'https://playaceball.com/thank-you-page',
    });

    // Return the client secret to the frontend
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ clientSecret: session.client_secret })
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return { 
      statusCode: 500, 
      headers, 
      body: JSON.stringify({ error: error.message }) 
    };
  }
};

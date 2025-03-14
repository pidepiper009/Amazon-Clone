import { Injectable } from '@nestjs/common';

import Stripe from 'stripe';

import { Cart } from './Cart.model'

@Injectable()
export class StripeService {
  private stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-11-20.acacia'
    })
  }

  checkout(cart: Cart) {
    const totalPrice = cart.reduce((acc, item) => 
      acc + item.quantity * item.price, 0)

    return this.stripe.paymentIntents.create({
      amount: totalPrice * 100, //cents
      currency: 'usd', // set currency
      payment_method_types: ['card'],
    })
  }

}

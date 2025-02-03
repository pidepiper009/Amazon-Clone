import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentComponent = () => {
  return (
    <div>Payment.component</div>
  )
}

const PaymentGateway = () => {
  const stripePromise = loadStripe
  (`pk_test_51QTWPKLmRlqQHfotL9zePR9RzIuE74YizRAFd6A9YpwicyDvrYW7g0uFXlrLgYwVM7JFqnJPgvn305xSK4MQalVv00eSyLs2SI`)

  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent />
    </Elements>
  ); 
};

export default PaymentGateway;

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JK6RpBDw05K79trrztdCFrsU65CYDusvpS8DeGgaXsGeqb0qFI4PRtykFtGJLEkpoQUaUnum1XvNDhfBERt9DIl00cDa0FBPX');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'white',
                            '::placeholder': {
                                color: 'white',

                            },


                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
        </Elements>
    );
};
export default ProcessPayment;
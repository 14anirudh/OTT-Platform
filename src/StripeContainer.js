import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Payment from './Components/Payment'

const PUBLIC_KEY="pk_test_51KagdESHn3ay7iVGk3WpoWNVLGsc3l67U66OMllAFXRThwMsbRJhCYvWRnwGt6cTysLIVPro1t6qvmT1NXTeK9nO00hV2sH7GV"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Payment />
    </Elements>
  )
}

export default StripeContainer

// const PUBLIC_KEY="pk_test_51KagdESHn3ay7iVGk3WpoWNVLGsc3l67U66OMllAFXRThwMsbRJhCYvWRnwGt6cTysLIVPro1t6qvmT1NXTeK9nO00hV2sH7GV"
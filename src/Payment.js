import React,{useState} from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import "./Payment.css"
import { Link } from 'react-router-dom';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#180920",
			color: "#180920",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#180920" }
		},
		invalid: {
			iconColor: "red",
			color: "red"
		}
	}
}

const Payment = () => {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            // const response = await axios.post("https://helpful-elk-pinafore.cyclic.app/payment", {
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Payment Successful")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
  return (
    <div className='w-[50%] m-auto pt-16 h-screen'>
       <>
        {!success ? 
        <form onSubmit={handleSubmit} >
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className='pay_button'>Pay</button>
        </form>
        :
       <div className='h-full'>
           <h2 className='text-whitesmoke text-xl text-center'>You have now gained access to a new World.Keep Binging!!</h2>
           <Link to="/home"><button className='pay_button'>explore the movie library</button></Link>
       </div> 
        }
            
        </>
    </div>
    
  )
}

export default Payment

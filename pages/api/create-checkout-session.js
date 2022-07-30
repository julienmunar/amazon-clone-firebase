const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


export default async (req,res)=>{

        const {items,email}=req.body;

  
      const transformedItems= items.map(item =>({
        quantity:item.amount,
        price_data:{
            currency:'eur',
            unit_amount:item.price *100,
            product_data:{
                name:item.title,
                images:[item.image]
            }
        }
      }))

      const session= await stripe.checkout.sessions.create({
        
        payment_method_types:["card"],
        // shipping_rates:['shr_1LO60rBx2eF0cZXNlllxMxNe','shr_1LO6HWBx2eF0cZXN6nmDQcJr'],
        shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 1500,
                  currency: 'eur',
                },
                display_name: 'Next day air',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 1,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 1,
                  },
                },
              },
            },
            {
                shipping_rate_data: {
                  type: 'fixed_amount',
                  fixed_amount: {
                    amount: 800,
                    currency: 'eur',
                  },
                  display_name: 'Not in Priority',
                  delivery_estimate: {
                    minimum: {
                      unit: 'business_day',
                      value: 2,
                    },
                    maximum: {
                      unit: 'business_day',
                      value: 5,
                    },
                  },
                },
              },
          ],
        shipping_address_collection:{
            allowed_countries:['GB','US',"FR"]
        },
        line_items:transformedItems,
        mode:'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
        metadata:{
            email,
            images: JSON.stringify(items.map(item => item.image))
        }



        
      })
  res.status(200).json({id:session.id})
}


    
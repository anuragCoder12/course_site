import React from 'react'
import './Pricing.css'

export default function Pricing() {
  const price=[
    {
      title:"Regular Member",
      price:"$200/month",
     color:"#ffff",
      desc:[
        "Unlimited acceess to the course",
        "Customer suport",
        "5 classes per week"
      ]
    },
    {
      title:"Premium Member",
      price:"$500/month",
      color:" rgb(96, 96, 240)",
      desc:[
        "Unlimited acceess to the course",
        "Customer suport",
        "Personel mentor",
        "Job assurancy",
        "5 classes per week"
      ]
    },
    {
      title:"Standard Member",
      price:"$500/month",
      color:"#ffff",
      desc:[
        "Unlimited acceess to the course",
        "Customer suport",
        
        "Job assurancy",
        "5 classes per week"
      ]
    }
    

  ]
  return (
    <div>
      <div className="pricing">
        <div className="pricing-title">
            <h2>pricing</h2>
        </div>
        <div className="box">
          {price.map( (pricing,index)=>(
            <div className="pricing-box" key={index}>
            <div className="top" >
              <h3>{pricing.title}</h3>
              <h3>{pricing.price}</h3>
              </div>
              <div className="bottom">
               <ul>
               {pricing.desc.map((desc,index)=>(
                <li key={index}>{desc}</li>
               ))}
               </ul>
           
  
            </div>
            <button>Join</button>
            </div>

          ))}
        

     

        </div>
      </div>
    </div>
  )
}

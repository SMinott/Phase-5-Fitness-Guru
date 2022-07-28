import React from 'react'
import { Link } from 'react-router-dom'

function PlanList({ plans, joinPlan, leavePlan }) {

  //Users not allowed to create plan
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [fee, setFee] = useState('')

  const leaveOrJoinButton = (plan) => {
    if (plan.membership) {
      return <button onClick={() => leavePlan(plan.id)}>Leave Plan</button>
    } else {
      return <button  onClick={() => joinPlan(plan.id)}>Join Plan</button>
    }
  }
  //Users not allowed to create plan
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   createPlan({ name, location })
  //   setName('')
  //   setLocation('')
  // }

  return (
    <div className='plan-list'>

      <h1 >Plans</h1>
      <div >
        {plans.map(plan => (
          <p>
            <Link to={`plans/${plan.id}`}>
              {plan.name}
            </Link>
            {plan.description}
            ${plan.fee}/monthly
            <span>{leaveOrJoinButton(plan)}</span>
          </p>
          
        ))}
        
      </div>

    </div>
  )
}

export default PlanList

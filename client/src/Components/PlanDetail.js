import React, { useState, useEffect, useCallback } from 'react'

function PlanDetail({ planId, joinPlan, leavePlan, plans}) {

  const [plan, setPlan] = useState(null)
  // const {name, description, fee} = plans

  const fetchPlanCallback = useCallback(() => {
    fetch(`/plans/${planId}`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(plan => setPlan(plan))
  }, [planId])
  
  useEffect(() => {
    fetchPlanCallback()
  }, [fetchPlanCallback])

  const leaveOrJoinButton = (plan) => {
    if (plan.membership) {
      return (
        <button 
          onClick={() => leavePlan(plan.id).then(() => fetchPlanCallback())}
        >
          Leave Plan
        </button>
      )
    } else {
      return (
        <button
          onClick={() => joinPlan(plan.id).then(() => fetchPlanCallback())}
        >
          Join Plan
        </button>
      )
    }
  }

  if(!plan){ return <div></div>}

  return (
    <div className='plan-detail'>
      
      <h2>Plan Details</h2>
      
      <h1 >{plan.name}</h1>
      <div> {plan.description}</div>
      <div>${plan.fee}/monthly</div>

      {leaveOrJoinButton(plan)}
      

      {/* <h2>Members</h2>
      <ul>
        {plan.members?.map(member => <li>{member.username}</li>)}
      </ul> */}

    </div>
  )
}

export default PlanDetail

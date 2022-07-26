import React, { useState, useEffect, useCallback } from 'react'

function PlanDetail({ planId, joinPlan, leavePlan }) {

  const [plan, setPlan] = useState(null)

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
    <div>
      
      <h1 >{plan.name}</h1>
      {leaveOrJoinButton(plan)}

      <h2>Members</h2>
      <ul>
        {plan.members?.map(member => <li>{member.username}</li>)}
      </ul>

    </div>
  )
}

export default PlanDetail

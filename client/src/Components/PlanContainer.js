import React, {useEffect, useState} from 'react'
// import {Routes, Route} from 'react-router-dom'

import PlanList from './PlanList'
import PlanDetail from './PlanDetail'


function PlanContainer() {

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/plans', 
    // {credentials: 'include'}
    )
    .then(r => r.json())
    // .then(plans => console.log(plans))
    .then(plans => setPlans(plans))
  }, [])

  const joinPlan = (planId) => {
    return fetch ('/memberships', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // credentials: 'include',
      body: JSON.stringify({plan_id: planId})
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(membership => {
        const updatedPlans = plans.map(plan => {
          if (plan.id === planId) {
            return {
              ...plan,
              membership: membership
            }
          } else {
            return plan
          }
        })
        setPlans(updatedPlans)
      })
  }

  const leavePlan = (planId) => {
    let membership = plans.find(plan => plan.id === planId).membership.id
    return fetch(`/memberships/${membership}`, {
      method: 'DELETE',
      // credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          const updatedPlans = plans.map(plan => {
            if (plan.id === planId) {
              return {
                ...plan,
                membership: undefined
              }
            } else {
              return plan
            }
          })
          setPlans(updatedPlans)
        }
      })
  }

return (
  <div>
    <h1> Plan Containers coming soon</h1>
    <PlanList plans={plans} joinPlan={joinPlan} leavePlan={leavePlan}/>
    <PlanDetail plans={plans} joinPlan={joinPlan} leavePlan={leavePlan} />
    {/* <Routes>
      <Route exact path="/plans">
        <PlanList
          plans={plans}
          joinPlan={joinPlan}
          leavePlan={leavePlan}
        />
      </Route>

      <Route exact path="/plans/:id"
        render={({ match }) => {
          return (
            <PlanDetail
              planId={match.params.id}
              joinPlan={joinPlan}
               leavePlan={leavePlan}
            />
          )
        }}
      />
    </Routes> */}
  </div>
)
}

export default PlanContainer

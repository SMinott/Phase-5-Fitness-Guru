import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Card } from 'semantic-ui-react'
import logo from '../assets/images/Logo.png'

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

      <h2 >Plans</h2>
      <div >
        {plans.map(plan => (
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={logo} />
              <Item.Content>
                <Item.Header>
                <Link to={`plans/${plan.id}`} key={plan.id}>
                  {plan.name}
                </Link>
                </Item.Header>
                <Item.Meta>
                  Description:
                </Item.Meta>
                <Item.Description>
                  <p>{plan.description}</p>
                </Item.Description>
                <Item.Extra>
                  Additional Details:
                  <p>${plan.fee}/monthly</p>
                </Item.Extra>
              </Item.Content>
              
            </Item>
           
            <span>{leaveOrJoinButton(plan)}</span>
          </Item.Group>

         
          
        ))}
        
      </div>

    </div>
  )
}

export default PlanList

import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'

function HorizontalScrollbar({data, bodyPart, setBodyPart}) {

    // console.log(data)

  return (
    <ScrollMenu className='horizontal-scrollbar'>

        {data.map((item) => ( 
            <BodyPart  
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            item={item}
            />)
        )}

    </ScrollMenu>
  )
}

export default HorizontalScrollbar

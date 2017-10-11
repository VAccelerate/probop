import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import './Helplines.css'

const Helplines = (props) => {
  return (
    <div className='ListGroup'>
      <ListGroup style={{width: '100vw'}}>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Alcohol & Drug Helpline</ListGroupItemHeading>
          <a href='tel://+64800787797'><img alt='' className='Phone' src='phone.png' /> 0800 787 797</a>
          <a href='https://alcoholdrughelp.org.nz/'><img className='Arrow' alt=''src='arrow1.png' /></a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Are you Okay (violence helpline)</ListGroupItemHeading>
          <a href='tel://+64800456450'><img alt='' className='Phone' src='phone.png' /> 0800 456 450</a>
          <a href='http://www.areyouok.org.nz/'><img className='Arrow' alt=''src='arrow1.png' /></a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Depression Hotline</ListGroupItemHeading>
          <a href='tel://+64800456450'><img alt='' className='Phone' src='phone.png' /> 0800 111 757</a>
          <a href='sms://4202'><img alt='' className='Sms' src='sms.png' /> 4202</a>
          <a href='https://depression.org.nz/'><img className='Arrow' alt='' src='arrow1.png' /></a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Lifeline (crisis support)</ListGroupItemHeading>
          <a href='tel://+64800543354'><img alt='' className='Phone' src='phone.png' /> 0800 543 354</a>
          <a href='https://www.lifeline.org.nz/'><img className='Arrow' alt=''src='arrow1.png' /></a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Pacifika Helpline</ListGroupItemHeading>
          <a href='tel://+64800787799'><img alt='' className='Phone' src='phone.png' /> 0800 787 799</a>
          <a href='sms://8681'><img alt='' className='Sms' src='sms.png' /> 8681</a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Outline (sexuality & gender support)</ListGroupItemHeading>
          <a href='tel://+648006885463'><img alt='' className='Phone' src='phone.png' /> 0800 688 5463</a>
          <a href='http://www.outline.org.nz/'><img className='Arrow' alt=''src='arrow1.png' /></a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Shakti (ethnic women support)</ListGroupItemHeading>
          <a href='tel://+64800742584'><img alt='' className='Phone' src='phone.png' /> 0800 742 584</a>
          <a href='http://shakti-international.org/'><img className='Arrow' alt=''src='arrow1.png' /></a>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading style={{fontSize: '5.0vw'}}>Youthline</ListGroupItemHeading>
          <a href='tel://+64800376633'><img alt='' className='Phone' src='phone.png' /> 0800 376 633</a>
          <a href='sms://234'><img alt='' className='Sms' src='sms.png' /> 234</a>
          <a href='https://www.youthline.co.nz/'><img className='Arrow' alt=''src='arrow1.png' /></a>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Helplines

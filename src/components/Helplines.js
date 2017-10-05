import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import Menu from './Menu'
import * as FontAwesome from 'react-icons/lib/fa'

const Helplines = (props) => {
  return (
    <div>
      <Menu />
      <h1>
         Helplines
       </h1>
      <ListGroup>
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading>
                Alcohol & Drug Helpline
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />  0800 787 797<br /><FontAwesome.FaEnvelope /> <a href='https://alcoholdrughelp.org.nz/'>https://alcoholdrughelp.org.nz</a></p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
                Are you Okay (Violence Helpline)
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />  0800 456 450<br /><FontAwesome.FaEnvelope /> http://www.areyouok.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
                Depression Hotline
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />0800 111 757<br /><FontAwesome.FaCommenting /> 4202 <br /> <FontAwesome.FaEnvelope /> https://depression.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
                Lifeline (Crisis Support)
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />  0800 543 354<br /><FontAwesome.FaEnvelope /> https://www.lifeline.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
                Pacifika Helpline
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone /> 0800 787 799<br /><FontAwesome.FaCommenting /> 8681</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
            Outline (Sexuality & Gender Support)
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone /> 0800 688 5463<br /><FontAwesome.FaEnvelope /> http://www.outline.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
            Shakti (Ethnic women support)
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />  0800 742 584<br /><FontAwesome.FaEnvelope /> http://shakti-international.org/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
            Youthline
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />  0800 376 633<br /><FontAwesome.FaCommenting /> 234<br /><FontAwesome.FaEnvelope /> https://www.youthline.co.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
            Safe to Talk (Sexaul Assault Support Line)
              </ListGroupItemHeading>
            <p><FontAwesome.FaPhone /><br /><FontAwesome.FaCommenting /><br /><FontAwesome.FaEnvelope /> </p>
          </ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  )
}

export default Helplines

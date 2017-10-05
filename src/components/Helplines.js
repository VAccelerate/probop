import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import Menu from './Menu'
import * as FontAwesome from 'react-icons/lib/fa'

const Helplines = (props) => {
  return (
    <div>
      <Menu />
      <h1>Helplines</h1>
      <h3> Lets go for a ? </h3>
      <ListGroup>
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading>
              Alcohol & Drug Helpline
            </ListGroupItemHeading>
            <p><FontAwesome.FaPhone />0800 787 797<br /><FontAwesome.FaEnvelope />https://alcoholdrughelp.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Are you Okay (Violence Helpline)
            </ListGroupItemHeading>
            <p>0800 456 450<br />http://www.areyouok.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Depression Hotline
            </ListGroupItemHeading>
            <p>0800 111 757<br />TXT: 4202 <br /> https://depression.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Lifeline (Crisis Support)
            </ListGroupItemHeading>
            <p>0800 543 354<br />https://www.lifeline.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Pacifika Helpline
            </ListGroupItemHeading>
            <p>0800 787 799<br />TXT: 8681</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Outline (Sexuality & Gender Support)
            </ListGroupItemHeading>
            <p>0800 688 5463<br />http://www.outline.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Shakti (Ethnic women support)
            </ListGroupItemHeading>
            <p>0800 742 584<br />http://shakti-international.org/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Youthline
            </ListGroupItemHeading>
            <p>0800 376 633<br />TXT 234<br />https://www.youthline.co.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Safe to Talk (Sexaul Assault Support Line)
            </ListGroupItemHeading>
          </ListGroupItem>
        </ListGroup>
      </ListGroup>
    </div>
  )
}

export default Helplines

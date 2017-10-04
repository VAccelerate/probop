import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap'
import Menu from './Menu'

const Helplines = (props) => {
  return (
    <div>
      <Menu />
      <h1>Helplines</h1>
      <ListGroup>
        <ListGroup>
          <ListGroupItem>
            <ListGroupItemHeading>
              Alcohol & Drug Helpline
            </ListGroupItemHeading>
            <p>0800 787 797<br></br>https://alcoholdrughelp.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Are you Okay (Violence Helpline)
            </ListGroupItemHeading>
            <p>0800 456 450<br></br>http://www.areyouok.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Depression Hotline
            </ListGroupItemHeading>
            <p>0800 111 757<br></br>TXT: 4202 <br></br> https://depression.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Lifeline (Crisis Support)
            </ListGroupItemHeading>
            <p>0800 543 354<br></br>https://www.lifeline.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
              Pacifika Helpline
            </ListGroupItemHeading>
            <p>0800 787 799<br></br>TXT: 8681</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Outline (Sexuality & Gender Support)
            </ListGroupItemHeading>
            <p>0800 688 5463<br></br>http://www.outline.org.nz/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Shakti (Ethnic women support)
            </ListGroupItemHeading>
            <p>0800 742 584<br></br>http://shakti-international.org/</p>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>
          Youthline
            </ListGroupItemHeading>
            <p>0800 376 633<br></br>TXT 234<br></br>https://www.youthline.co.nz/</p>
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

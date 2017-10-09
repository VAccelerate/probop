import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import Menu from './Menu'
import * as FontAwesome from 'react-icons/lib/fa'
import './Helplines.css'

const Helplines = (props) => {
  return (
    <div>
      <Menu />
      <h1>Helplines</h1>
      <div className='ListGroup'>
        <ListGroup>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                Alcohol & Drug Helpline
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+64800787797'>0800 787 797</a> <br /><FontAwesome.FaGlobe /> <a href='https://alcoholdrughelp.org.nz/'>https://alcoholdrughelp.org.nz</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Are you Okay (Violence Helpline)
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+64800456450'>0800 456 450</a> <br /><FontAwesome.FaGlobe /> <a href='http://www.areyouok.org.nz/'>http://www.areyouok.org.nz/</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Depression Hotline
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+64800456450'>0800 111 757</a> <br /><FontAwesome.FaCommenting /> <a href='sms://4202'>4202</a> <br /> <FontAwesome.FaGlobe /> <a href='https://depression.org.nz/'>https://depression.org.nz/</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Lifeline (Crisis Support)
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+64800543354'>0800 543 354</a> <br /><FontAwesome.FaGlobe /> <a href='https://www.lifeline.org.nz/'>https://www.lifeline.org.nz/</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Pacifika Helpline
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /> <a href='tel://+64800787799'>0800 787 799</a> <br /><FontAwesome.FaCommenting /> <a href='sms://8681'>8681</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Outline (Sexuality & Gender Support)
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+648006885463'>0800 688 5463</a> <br /><FontAwesome.FaGlobe /> <a href='http://www.outline.org.nz/'>http://www.outline.org.nz/</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Shakti (Ethnic women support)
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+64800742584'>0800 742 584</a> <br /><FontAwesome.FaGlobe /> <a href='http://shakti-international.org/'>http://shakti-international.org/</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Youthline
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><a href='tel://+64800376633'>0800 376 633</a> <br /><FontAwesome.FaCommenting /> <a href='sms://234'>234</a><br /><FontAwesome.FaGlobe /> <a href='https://www.youthline.co.nz/'>https://www.youthline.co.nz/</a></p>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Safe to Talk (Sexaul Assault Support Line)
              </ListGroupItemHeading>
              <p><FontAwesome.FaPhone /><br /><FontAwesome.FaCommenting /><br /><FontAwesome.FaGlobe /> </p>
            </ListGroupItem>
          </ListGroup>
        </ListGroup>
      </div>
    </div>
  )
}

export default Helplines

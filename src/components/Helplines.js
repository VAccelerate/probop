import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'
import './Helplines.css'

const Helplines = (props) => {
  return (
    <div>
      <h1>Helplines</h1>
      <div className='ListGroup FontAwesome'>
        <ListGroup>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                Alcohol & Drug Helpline
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800787797'>0800 787 797</a>
              <br /><FontAwesome.FaGlobe size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='https://alcoholdrughelp.org.nz/'>https://alcoholdrughelp.org.nz</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Are you Okay (Violence Helpline)
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800456450'>0800 456 450</a> <br /><FontAwesome.FaGlobe size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='http://www.areyouok.org.nz/'>http://www.areyouok.org.nz/</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Depression Hotline
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800456450'>0800 111 757</a> <br /><FontAwesome.FaCommenting size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='sms://4202'>4202</a>  &nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaGlobe size='10%' /> &nbsp;&nbsp;
              <a href='https://depression.org.nz/'>https://depression.org.nz/</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Lifeline (Crisis Support)
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800543354'>0800 543 354</a>&nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaGlobe size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='https://www.lifeline.org.nz/'>https://www.lifeline.org.nz/</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Pacifika Helpline
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800787799'>0800 787 799</a> &nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaCommenting size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='sms://8681'>8681</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Outline (Sexuality & Gender Support)
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+648006885463'>0800 688 5463</a>&nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaGlobe size='10%' /> &nbsp;&nbsp;&nbsp;
              <a href='http://www.outline.org.nz/'>http://www.outline.org.nz/</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Shakti (Ethnic women support)
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800742584'>0800 742 584</a>&nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaGlobe size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='http://shakti-international.org/'>http://shakti-international.org/</a>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>
                Youthline
              </ListGroupItemHeading>
              <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='tel://+64800376633'>0800 376 633</a>&nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaCommenting size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='sms://234'>234</a>&nbsp;&nbsp;&nbsp;
              <br /><FontAwesome.FaGlobe size='10%' />&nbsp;&nbsp;&nbsp;
              <a href='https://www.youthline.co.nz/'>https://www.youthline.co.nz/</a>
            </ListGroupItem>
          </ListGroup>
        </ListGroup>

      </div>
    </div>
  )
}

export default Helplines

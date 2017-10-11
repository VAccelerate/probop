import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import * as FontAwesome from 'react-icons/lib/fa'
import './Helplines.css'
import ImageHelpline from '../images/arrow1.png'

const Helplines = (props) => {
  return (
    <div>
      <div className='ListGroup FontAwesome'>
        <ListGroup style={{width: '100vw'}}>
          <ListGroupItem style={{minHeight: '130px'}}>
            <ListGroupItemHeading>
                Alcohol & Drug Helpline
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800787797'>0800 787 797</a>
            <span className='TopArrow'>
              <a href='https://alcoholdrughelp.org.nz/'><img alt=''src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '130px'}}>
            <ListGroupItemHeading>
                Are you Okay (Violence Helpline)
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800456450'>0800 456 450</a>
            <span className='ImageHelpline'>
              <a href='http://www.areyouok.org.nz/'><img className='ImageHelpline' alt=''src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '210px'}}>
            <ListGroupItemHeading>
                Depression Hotline
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800456450'>0800 111 757</a> <br /><FontAwesome.FaCommenting size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='sms://4202'>4202</a>  &nbsp;&nbsp;&nbsp;
            <span className='Arrow'>
              <a href='https://depression.org.nz/'><img alt='' src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '130px'}}>
            <ListGroupItemHeading>
                Lifeline (Crisis Support)
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800543354'>0800 543 354</a>&nbsp;&nbsp;&nbsp;
            <span className='CrisisArrow'>
              <a href='https://www.lifeline.org.nz/'><img className='ImageHelpline' alt=''src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '130px'}}>
            <ListGroupItemHeading>
                Pacifika Helpline
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800787799'>0800 787 799</a> &nbsp;&nbsp;&nbsp;
            <br /><FontAwesome.FaCommenting size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='sms://8681'>8681</a>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '130px'}}>
            <ListGroupItemHeading>
                Outline (Sexuality & Gender Support)
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+648006885463'>0800 688 5463</a>&nbsp;&nbsp;&nbsp;
            <span className='ImageHelpline'>
              <a href='http://www.outline.org.nz/'><img className='ImageHelpline' alt=''src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '130px'}}>
            <ListGroupItemHeading>
                Shakti (Ethnic women support)
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800742584'>0800 742 584</a>&nbsp;&nbsp;&nbsp;
            <span className='ShaktiArrow'>
              <a href='http://shakti-international.org/'><img alt=''src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
          <ListGroupItem style={{minHeight: '210px'}}>
            <ListGroupItemHeading>
                Youthline
              </ListGroupItemHeading>
            <FontAwesome.FaPhone size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='tel://+64800376633'>0800 376 633</a>&nbsp;&nbsp;&nbsp;
            <br /><FontAwesome.FaCommenting size='10%' />&nbsp;&nbsp;&nbsp;
            <a href='sms://234'>234</a>&nbsp;&nbsp;&nbsp;
            <span className='Arrow'>
              <a href='https://www.youthline.co.nz/'><img alt=''src={ImageHelpline} /></a>
            </span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  )
}

export default Helplines

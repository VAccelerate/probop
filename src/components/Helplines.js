import React from 'react'

import Menu from './Menu'

const Helplines = (props) => {
  return (
    <div>
      <Menu />
      <h1>Helplines</h1>
      <table>
        <tr>
          <th>Alcohol & Drug Helpline</th>
          <td>0800 787 797</td>
          <td>alcoholdrughelp.org.nz</td>
        </tr>
        <tr>
          <th>Are you Okay (violence helpline)</th>
          <td>0800 456 450</td>
          <td>www.areyouok.org.nz</td>
        </tr>
        <tr>
          <th>Depression Hotline</th>
          <td>0800 111 757</td>
          <td>www.depression.org.nz</td>
        </tr>
        <tr>
          <th>Lifeline (crisis support)</th>
          <td>0800 543 354</td>
          <td>www.lifeline.org.nz</td>
        </tr>
        <tr>
          <th>Pacifika helpline</th>
          <td>0800 787 799</td>
          <td>TXT: 8681</td>
        </tr>
        <tr>
          <th>Outline (Sexuality & Gender support)</th>
          <td>0800 688 5463</td>
          <td>www.outline.org.nz</td>
        </tr>
        <tr>
          <th>Shakti (Ethnic women support)</th>
          <td>0800 742 584</td>
          <td>shakti-international.org</td>
        </tr>
        <tr>
          <th>Youthline</th>
          <td>0800 376 633</td>
          <td>TXT 234</td>
          <td>www.youthline.co.nz</td>
        </tr>
        <tr>
          <th>Safe to Talk (Sexaul assault support line)</th>
          <td>TBC</td>
          <td>TBC</td>
        </tr>
      </table>
    </div>
  )
}

export default Helplines

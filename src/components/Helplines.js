import React from 'react'

import Menu from './Menu'

const Helplines = (props) => {
  return (
    <div>
      <Menu />
      <h1>Helplines</h1>
      <table>
        <tr>
          <th>Helpline</th>
          <th>Contact</th>
          <th>URL</th>
        </tr>
        <tr>
          <td>Alcohol & Drug Helpline</td>
          <td>0800 787 797</td>
          <td>alcoholdrughelp.org.nz</td>
        </tr>
      </table>
    </div>
  )
}

export default Helplines

import React from 'react'

import './Header.css'

const STRING_APP_NAME = "AGILE TRACKER"

class Header extends React.Component {

 render () {
   return(
     <div className="agile-tracker-header-root">
       <div className="agile-tracker-header">
        <div className="col-12 padding-0 agile-tracker-header-app-name">
          {STRING_APP_NAME}
        </div>
       </div>
     </div>
   )
 } 
}

export default Header

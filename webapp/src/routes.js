import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './Containers/App'

import Board from './Containers/BoardComponent'

export default (
    <div>
        <Switch>
            <App>
                <Route path='/' component={Board}/>
            </ App>
        </Switch>
    </div>
)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import Favicon from 'react-favicon'

ReactDOM.render(
    <div>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
        <App />
    </div>
    
    , document.getElementById('app'))
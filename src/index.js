import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faHome, faFile, faPlay, faSignInAlt, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons'

import Routes from './routes'

library.add(faBars, faHome, faFile, faPlay, faSignInAlt, faSignOutAlt)



const App = () => {
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

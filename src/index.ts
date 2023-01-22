'use strict';
import './style.less';

import {signPage} from './templates/pages/autorization/index';
import {regPage} from './templates/pages/registration/index';
import {changeInfoPage} from './templates/pages/changeInfo/index';
import {changePassPage} from './templates/pages/changePassword/index';
import {infoPage} from './templates/pages/info/index';
import {notfoundPage} from './templates/pages/page404/index';
import {fixPage} from './templates/pages/page500/index';
import {chatListPage} from './templates/pages/chatlist/index';
import {chatPage} from './templates/pages/talking/index';

function render(query, block) {
    const root = document.querySelector(query);
    if(root)
        root.appendChild(block.getContent());

    block.dispatchComponentDidMount();
    return root;
}


if (window.location.pathname == '/autorization') {
    render('#root', signPage);
} else if (window.location.pathname == '/registration') {
    render('#root', regPage);
} else if (window.location.pathname == '/page404') {
    render('#root', notfoundPage);
} else if (window.location.pathname == '/page500') {
    render('#root', fixPage);
} else if (window.location.pathname == '/info') {
    render('#root', infoPage);
} else if (window.location.pathname == '/changeinfo') {
    render('#root', changeInfoPage);
} else if (window.location.pathname == '/changepassword') {
    render('#root', changePassPage);
} else if (window.location.pathname == '/chatlist') {
    render('#root', chatListPage);
} else if (window.location.pathname == '/chat') {
    render('#root', chatPage);
} else {
    render('#root', signPage);
}

// document.getElementById('root').querySelector('a').addEventListener('click', (e) => {
//
// })


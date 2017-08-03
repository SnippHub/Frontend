import 'styles/global.scss';

import { AppContainer as HotAppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from 'containers/AppContainer';

//Clarity Scripts
import 'mutationobserver-shim';
import '@webcomponents/custom-elements';
import 'clarity-icons';


const rootElement = document.getElementById('app');
const render = Component =>
    ReactDOM.render(
        <HotAppContainer>
            <Component />
        </HotAppContainer>,
        rootElement
    );

render(AppContainer);
if (module.hot) module.hot.accept('containers/AppContainer', () => render(AppContainer));
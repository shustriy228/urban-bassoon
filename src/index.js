import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Layout1 from './components/Layout';
import 'antd/dist/antd.css';

function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Layout1/>
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
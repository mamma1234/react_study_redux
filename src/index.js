import React from 'react';
import ReactDOM from 'react-dom';

// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';
// **** (1) Provider 불러오기
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// **** 리덕스 개발자도구 적용
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// **** (2) 스토어를 만들고 현재 값 확인해보기
// const store = createStore(rootReducer);
const store = createStore(rootReducer, devTools);
console.log(store.getState());

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

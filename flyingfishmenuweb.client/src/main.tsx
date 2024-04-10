import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { url } from './consts.ts';

//css
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//redux
import { store } from './app/store.js'
import { Provider } from 'react-redux'

//error boundary
import { ErrorBoundary } from "react-error-boundary";

//react-router-dom
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';

//Add pre connect link to web app
const preconnectLink = document.createElement('link');
preconnectLink.rel = 'preconnect';
preconnectLink.href = url == null ? "" : url;
document.head.appendChild(preconnectLink);

const root = createRoot(document.getElementById('root')!);

//Toggle dark/light mode based on window settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementsByTagName('html')[0].setAttribute('data-bs-theme','dark')
}
else {
    document.getElementsByTagName('html')[0].removeAttribute('data-bs-theme');
}

root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={<ErrorPage/>}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);


import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

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

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);


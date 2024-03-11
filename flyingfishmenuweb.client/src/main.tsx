import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store.js'
import { ErrorBoundary } from "react-error-boundary";

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ReactQueryDevtools} from 'react-query/devtools';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            cacheTime: Infinity
        }
    },
    queryCache: new QueryCache({
        onError: (error, query) => {
            // 🎉 only show error toasts if we already have data in the cache
            // which indicates a failed background update
            if (query.state.data !== undefined) {
            }
        }
    })
});

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </BrowserRouter>
);



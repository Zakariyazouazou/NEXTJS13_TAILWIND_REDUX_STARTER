'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }:any) {
    return (
        <Provider store={store}>
              {children}
            {/* <ThemeProvider enableSystem={true} attribute='class'>
              
            </ThemeProvider> */}
        </Provider>
    )
}
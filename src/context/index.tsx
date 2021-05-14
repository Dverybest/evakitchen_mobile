import React, { } from 'react';
import { IContextProvider } from '../components/interface';
import AppContextProvider from './appContext';

const Provider = ({children}:IContextProvider)=>{
    return(
        <AppContextProvider>
            {children}
        </AppContextProvider>
    )
}

export default Provider
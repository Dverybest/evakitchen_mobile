import React, { } from 'react';
import { IContextProvider } from '../interfaces/common';
import AppContextProvider from './appContext';

const Provider = ({children}:IContextProvider)=>{
    return(
        <AppContextProvider>
            {children}
        </AppContextProvider>
    )
}

export default Provider
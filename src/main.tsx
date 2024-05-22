import { BrowserRouter, } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { Profiler, ProfilerOnRenderCallback } from 'react' */
import App from './App.tsx'
import store from './redux/store.ts'
import './index.scss'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'



 const onRenderCallback/* :ProfilerOnRenderCallback */ = (
 /*   id:any, 
   phase:any,  
   actualDuration:any, 
   baseDuration:any,  
   startTime:any,  
   commitTime:any,  
   interactions:any */
 ) => {
   /*console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions});*/
 }
 

ReactDOM.createRoot(document.getElementById('root')!).render(
   /* <Profiler id='myApp' onRender={onRenderCallback}> */
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <PayPalScriptProvider>
          <App />
          </PayPalScriptProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
   /* </Profiler> */
)



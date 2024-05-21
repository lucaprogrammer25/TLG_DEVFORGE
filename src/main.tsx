import { BrowserRouter, } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Profiler, ProfilerOnRenderCallback } from 'react'
import App from './App.tsx'
import store from './redux/store.ts'
import './index.scss'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'



// const onRenderCallback:ProfilerOnRenderCallback = (
//   id:any, // the "id" prop of the Profiler tree that has just committed
//   phase:any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
//   actualDuration:any, // time spent rendering the committed update
//   baseDuration:any, // estimated time to render the entire subtree without memoization
//   startTime:any, // when React began rendering this update
//   commitTime:any, // when React committed this update
//   interactions:any // the Set of interactions belonging to this update
// ) => {
//   console.log({id, phase, actualDuration, baseDuration, startTime, commitTime, interactions});
// }


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Profiler id='myApp' onRender={onRenderCallback}>
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <PayPalScriptProvider>
          <App />
          </PayPalScriptProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
  // </Profiler>
)



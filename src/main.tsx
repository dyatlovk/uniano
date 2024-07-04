
import FooterTriggerProvider from '@common/context/footer_trigger'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
       <FooterTriggerProvider>
              <App />
       </FooterTriggerProvider>
)

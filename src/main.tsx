import FooterTriggerProvider from '@common/context/footer_trigger'
import App from './App'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FooterTriggerProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FooterTriggerProvider>
)

import FooterTriggerProvider from '@common/context/footer_trigger'
import App from './App'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FooterTriggerProvider>
    <App />
  </FooterTriggerProvider>
)

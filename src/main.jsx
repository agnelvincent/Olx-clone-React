import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {FirebaseProvider} from './store/Context.jsx'

import Context from './store/Context.jsx'

import firebase from './firebase/config.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <Context>
      <App />
      </Context>   
    </FirebaseProvider>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import { Provider as ReduxPropvider} from 'react-redux'

import { store } from './store/store'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <ReduxPropvider store={store}>
    <App />
  </ReduxPropvider>
)

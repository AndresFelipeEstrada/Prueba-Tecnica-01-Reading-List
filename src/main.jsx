import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReadingListProvider } from './context/readingList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReadingListProvider>
    <App />
  </ReadingListProvider>

)

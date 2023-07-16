import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReadingListProvider } from './context/ReadingList.jsx'
import { FilterProductsProvider } from './context/filterProducts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProductsProvider>
    <ReadingListProvider>
      <App />
    </ReadingListProvider>
  </FilterProductsProvider>

)

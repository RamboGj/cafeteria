import { BrowserRouter } from 'react-router-dom'
import OrderContextProvider from './contexts/OrderContext'
import Router from './Router'

export default function App() {
  return (
    <BrowserRouter>
      <OrderContextProvider>
        <Router />
      </OrderContextProvider>
    </BrowserRouter>
  )
}
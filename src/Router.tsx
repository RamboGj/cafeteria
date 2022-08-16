import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import OrderDone from './pages/OrderDone'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/delivered' element={<OrderDone />}/>
            </Route>
        </Routes>
    )
}
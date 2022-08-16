import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink, Outlet } from "react-router-dom"
import logo from '../../public/logo.svg'

const styles = {
    wrapper: 'w-full py-8 px-40 flex justify-between mx-auto',
    menu: 'flex items-center gap-x-3',
    locationLabel: 'flex items-center px-3 py-2 bg-purple-100 rounded-md text-purple-500 font-medium gap-x-1',
    cartLink: 'p-2 rounded-md bg-yellow-300 cursor-pointer hover:scale-x-105 hover:scale-y-105 transition duration-500'
}

export default function Header() {
    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <NavLink to='/'>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className={styles.menu} > 
                    <div className={styles.locationLabel}>
                        <MapPin weight="fill" size={24} className="text-purple-300"/>
                        <span>Blumenau, SC </span>    
                    </div>
                    <div className={styles.cartLink}>
                        <NavLink to='/cart'>
                            <ShoppingCart size={24} weight="fill" className='text-yellow-500'/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
import { Alarm, Coffee, Package, ShoppingCart } from 'phosphor-react'

const styles ={
    itemsWrapper: 'mt-8 md:mt-16 w-full grid grid-cols-1 md:grid-cols-2',
}

export default function ListOfItemsHome() {
    return (
        <div className={styles.itemsWrapper}>
            <div className='col-span-1'>
                <div className="flex gap-3 items-center mt-4 md:mt-0">
                    <ShoppingCart weight='fill' size={36} className="text-white p-2 rounded-full bg-yellow-500"/>
                    <p>Compra simples e segura</p>
                </div>
                <div className="flex gap-3 items-center mt-4">
                    <Alarm weight='fill' size={36} className="text-white p-2 rounded-full bg-yellow-400"/>
                    <p>Entrega rápida e rastreada</p>
                </div>
            </div>
            <div className='col-span-1'>
                <div className="flex gap-3 items-center mt-4 md:mt-0">
                    <Package weight='fill' size={36} className="text-white p-2 rounded-full bg-brown-700"/>
                    <p>Embalagem mantém o café intacto</p>
                </div>
                <div className="flex gap-3 mt-4 items-center">
                    <Coffee weight='fill' size={36} className="text-white p-2 rounded-full bg-purple-300"/>
                    <p>O café chega fresquinho até você</p>
                </div>
            </div>
        </div>
    )
}
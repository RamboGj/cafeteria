import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import coffePhoto from '../assets/list/americano.svg'

export default function CoffeCard() {
    const [coffeAmount, setCoffeAmount] = useState<number>(0)

    return (
        <div className='w-[256px] flex-col justify-center mx-auto bg-gray-100 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md px-6 pb-6'>
                    <img className="-mt-8 mx-auto" src={coffePhoto} />
                    <div className='mt-3 flex justify-center'>
                        <span className=' text-yellow-500 bg-yellow-300 px-4 py-1 rounded-full font-bold text-sm'>TRADICIONAL</span>
                    </div>

                    <h1 className='mt-4 flex justify-center'>Expresso Tradicional</h1>
                    
                    <p className='text-brown-300 text-md text-center'>O tradicional café feito com água quente e grãos moídos</p>

                    <div className='mt-8 flex'>
                        <span className='font-semibold text-sm text-brown-300 flex items-center gap-1'>R$ <h1 className='text-brown-700 text-xl'>9,90</h1></span>
                        <div className='ml-6 bg-gray-200 rounded-lg px-2 space-x-2 items-center flex'>
                            <button 
                                className='text-purple-300' 
                                onClick={() => {
                                    if (coffeAmount === 0) {
                                        setCoffeAmount(coffeAmount)
                                    } else {
                                        setCoffeAmount(coffeAmount - 1)
                                    }
                                }}
                            >
                                <Minus size={20} />
                            </button>
                            <span>{coffeAmount > 0 ? coffeAmount : 0}</span>
                            <button  className='text-purple-300'  onClick={() => setCoffeAmount(coffeAmount + 1)}>
                                <Plus size={20} />
                            </button>
                        </div>
                        <div className='ml-2 bg-purple-500 rounded-lg text-white p-2 cursor-pointer hover:bg-purple-300 transition duration-500'>
                            <ShoppingCart weight='fill' size={28}/>
                        </div>

                    </div>

                </div>
    )
}
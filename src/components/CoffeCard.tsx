import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'


interface CoffeProps {
    image: string
    name: string
    description: string
    features: string[]
}

export default function CoffeCard({image, name, description, features}: CoffeProps) {
    const [coffeAmount, setCoffeAmount] = useState<number>(0)

    return (
        <div className='w-[256px] flex-col justify-center mx-auto bg-gray-100 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md px-6 pb-6'>
                    <img className="-mt-8 mx-auto" src={image} />
                    <div className='mt-3 flex justify-center gap-2'>
                        {features && features.map((feature) => {
                            return <span className=' text-yellow-500 bg-yellow-300 px-2 py-1 rounded-full font-bold text-sm'>{feature}</span>
                        })}
                    </div>

                    <h1 className='mt-4 flex justify-center'>{name}</h1>
                    
                    <p className='text-brown-300 text-md text-center'>{description}</p>

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
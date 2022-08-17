import { CurrencyDollar, Alarm, MapPin } from 'phosphor-react'
import motoboyImage from '../assets/motoboy.svg'

export default function OrderDone() {
    return (
        <div className="max-w-[1280px] flex justify-between py-20 mx-auto items-end">
            <div>
                <h1 className='text-orange-500 text-4xl'>Uhu! Pedido confirmado</h1>
                <p className='mt-2 text-lg'>Agora é só aguardar que logo o café chegará até você</p>
                <div className='mt-10 p-10 border-2 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl border-b-purple-300 border-r-purple-300 border-t-purple-500 border-l-purple-500'>
                    <ul className='space-y-8'>
                        <li className='flex items-center gap-x-5'>
                            <div className='p-2 rounded-full bg-purple-300'>
                                <MapPin className="text-white" weight="fill"size={18} />
                            </div>
                            <div>
                                <p>Entrega em <strong>Rua Governador Jorge Lacerda, 2515</strong></p>
                                <p>Bairro, Cidade, UF</p>
                            </div>
                        </li>
                        <li className='flex items-center gap-x-5'>
                            <div className='p-2 rounded-full bg-yellow-300'>
                                <Alarm className="text-white" weight="fill" size={18} />
                            </div>
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </li>
                        <li className='flex items-center gap-x-5'>
                            <div className='p-2 rounded-full bg-yellow-500'>
                                <CurrencyDollar className="text-white" size={18} />
                            </div>
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>Cartão de crédito</strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={motoboyImage} alt="" />
            </div>
        </div>
    )
}
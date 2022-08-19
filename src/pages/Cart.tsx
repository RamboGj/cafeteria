import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash, Plus, Minus } from "phosphor-react"
import { useState } from "react"
import americano from "../assets/americano.svg"
import Input from "../components/Input"
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const navigate = useNavigate()

    const paymentMethodsIds = {
        CreditCard: 0,
        DebitCard: 1,
        Money: 2
    }

    const paymentMethods = [
        { id: paymentMethodsIds.CreditCard, name: "CARTÃO DE CRÉDITO", icon: <CreditCard size={18} className="text-purple-500"/> },
        { id: paymentMethodsIds.DebitCard, name: "CARTÃO DE DÉBITO", icon: <Bank size={18}className="text-purple-500"/> },
        { id: paymentMethodsIds.Money, name: "DINHEIRO", icon: <Money size={18} className="text-purple-500"/> },
    ]

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<number | null>(null)

    // <MapPinLine size={32} />
    return (
        <div className="max-w-[1280px] flex justify-between py-20 mx-auto items-end">
            <form className="flex w-full space-x-8">
                <div className="flex-col flex-1">
                    <h1 className="text-lg">Complete seu pedido</h1>
                    <div className="space-y-3">
                        <div className="p-10 bg-[#F2F2F2] mt-4 rounded-md">
                            <div className="flex items-start gap-x-2">
                                <MapPinLine size={24} className="text-yellow-500"/>
                                <div>
                                    <p className="text-black">Endereço de entrega</p>
                                    <p className="text-brown-500">Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-x-3 space-y-4 mt-8">
                            <input
                                placeholder={"CEP"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-2 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />
                            <input
                                placeholder={"Rua"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-6 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />
                            <input
                                placeholder={"Número"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-2 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />
                            <input
                                placeholder={"Complemento"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-4 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />
                            <input
                                placeholder={"Bairro"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-3 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />
                            <input
                                placeholder={"Cidade"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-2 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />
                            <input
                                placeholder={"UF"}
                                className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-1 border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
                                type={"text"} 
                            />

                                
                                {/* <Input type="text" placeholder="CEP" colSpan={2}/>
                                <Input type="text" placeholder="Rua" colSpan={6}/>
                                <Input type="number" placeholder="Número" colSpan={2}/>
                                <Input type="text" placeholder="Complemento" colSpan={4}/>
                                <Input type="text" placeholder="Bairro" colSpan={3}/>
                                <Input type="text" placeholder="Cidade" colSpan={2}/>
                                <Input type="text" placeholder="UF" colSpan={1}/> */}
                            </div>
                        </div>
                        <div className="p-10 bg-[#F2F2F2] mt-4 rounded-md">
                            <div className="flex items-start gap-x-2">
                                <CurrencyDollar size={24} className="text-purple-500" />
                                <div>
                                    <p className="text-black">Pagamento</p>
                                    <p className="text-brown-500">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </div>
                            <div className="flex mt-8 gap-x-3">
                                {paymentMethods && paymentMethods.map((method) => {
                                    return (
                                        <div
                                            onClick={() => setSelectedPaymentMethod(method.id)} 
                                            key={method.id} 
                                            className={`flex p-4 gap-x-3 w-[200px] border rounded-md hover:cursor-pointer ${selectedPaymentMethod === method.id ? `bg-purple-100 border-purple-300` : `border-transparent bg-[#E6E6E5]`}`}>
                                                {method.icon}
                                                <p className="text-sm">{method.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[448px]">
                    <h1>Cafés selecionados</h1>
                    <div className="p-10 bg-[#F2F2F2] mt-4 rounded-md flex-col justify-center">
                        <ul className="space-y-12">
                            <li className="w-full flex">
                                <img width={64} height={64} src={americano} alt="foto de um café" />
                                <div className="ml-5">
                                    <p>Nome do café</p>
                                    <div className="flex gap-x-2 mt-2">
                                        <div className="flex gap-x-[5px] items-center px-3 py-1 rounded-md bg-gray-200">
                                            <Minus size={16} className="text-purple-500"/>
                                                0
                                            <Plus size={16} className="text-purple-500"/>
                                        </div>
                                        <div className="flex items-center gap-x-2 px-3 py-1 rounded-md bg-gray-200">
                                            <Trash size={16} className="text-purple-500"/>
                                            REMOVER
                                        </div>
                                    </div>
                                    
                                </div>
                                <span className="font-bold text-brown-500">R$ 9,90</span>
                            </li>
                        </ul>
                        <div className="p-[1px] bg-gray-200 w-full my-8"></div>
                        <div className="space-y-3 flex-col">  
                            <div className="flex items-center justify-between text-gray-500">
                                <p>Total de itens</p>
                                <span>R$ 29,90</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <p>Entrega</p>
                                <span>R$ 3,50</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-brown-900 text-xl font-bold">Total</p>
                                <span className="text-brown-900 text-xl font-bold">R$ 33,40</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => navigate("/delivered")}
                            className="mt-6 w-[368px] py-3 text-center rounded-md bg-yellow-300 hover:bg-yellow-500 transition duration-500 text-white font-bold">
                                CONFIRMAR PEDIDO
                        </button>
                        </div>  
                    </div>
                </form>
            </div>
    )    
}    
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import Input from "../components/Input"

export default function Cart() {
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
                                <Input type="text" placeholder="CEP" colSpan={2}/>
                                <Input type="text" placeholder="Rua" colSpan={6}/>
                                <Input type="number" placeholder="Número" colSpan={2}/>
                                <Input type="text" placeholder="Complemento" colSpan={4}/>
                                <Input type="text" placeholder="Bairro" colSpan={3}/>
                                <Input type="text" placeholder="Cidade" colSpan={2}/>
                                <Input type="text" placeholder="UF" colSpan={1}/>
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
                                <div className="flex p-4 gap-x-3 bg-[#E6E6E5] rounded-md hover:cursor-pointer">
                                    <CreditCard size={18} className="text-purple-500"/>
                                    <p className="text-sm">CARTÃO DE CRÉDITO</p>
                                </div>
                                <div className="flex p-4 gap-x-3 bg-[#E6E6E5] rounded-md hover:cursor-pointer">
                                    <Bank size={18} className="text-purple-500"/>
                                    <p className="text-sm">CARTÃO DE DÉBITO</p>
                                </div>
                                <div className="flex p-4 gap-x-3 bg-[#E6E6E5] rounded-md hover:cursor-pointer">
                                    <Money size={18} className="text-purple-500"/>
                                    <p className="text-sm">DINHEIRO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[448px]">
                    <h1>Cafés selecionados</h1>
                    <div>
                        <ul>
                            <li>café 1</li>
                            <li>café 2</li>
                        </ul>
                        <span>SEPARADOR</span>
                        <div>
                            <p>Total de itens</p>
                            <span>R$ 29,90</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </div>
                        <div>
                            <p>Total</p>
                            <span>R$ 33,40</span>
                        </div>
                        <button>
                            CONFIRMAR PEDIDO
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )    
}    
export default function Cart() {
    return (
        <div className="max-w-[1280px] flex justify-between py-20 mx-auto items-end">
            <form>
                <div>
                    <h1>Complete seu pedido</h1>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div>
                        <div>
                            <div>Icon</div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <div>
                                Icon
                                CARTÃO DE CRÉDITO
                            </div>
                            <div>
                                Icon
                                CARTÃO DE DÉBITO
                            </div>
                            <div>
                                Icon
                                DINHEIRO
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div>
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
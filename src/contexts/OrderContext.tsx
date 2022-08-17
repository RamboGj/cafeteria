import React, { createContext } from "react"

interface OrderContextProps {

}

interface OrderContextProviderProps {
    children: React.ReactNode
}

const OrderContext = createContext({} as any)

export default function OrderContextProvider({ children }: OrderContextProviderProps) {
    return (
        <OrderContext.Provider value={{}}>
            {children}
        </OrderContext.Provider>
    )
}
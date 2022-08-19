interface InputProps {
    type: string
    colSpan: number
    placeholder: string
}

export default function Input({ type, colSpan, placeholder }: InputProps) {
    return (
        <input
            placeholder={placeholder}
            className={`p-3 bg-[#EDEDED] rounded-md border-2 col-span-${colSpan} border-transparent focus:outline-none focus:border-purple-500 focus:bg-white hover:bg-gray-200 transtion duration-300`} 
            type={type} 
        />
    )
}
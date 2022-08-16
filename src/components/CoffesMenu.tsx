import CoffeCard from './CoffeCard'

export default function CoffesMenu() {
    return (
        <div className="mt-24 mb-12">
            <h1 className='text-2xl font-title'>Nossos cafés</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-14 gap-16">
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
            </div>
        </div>
    )
}
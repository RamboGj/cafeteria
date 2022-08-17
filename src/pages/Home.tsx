import heroImg from '../assets/hero.svg'
import coffeBrush from '../assets/coffeBrush.svg'
import coffeBrush2 from '../assets/coffeBrush2.svg'
import ListOfItemsHome from '../components/ListOfItemsHome'
import americano from '../assets/americano.svg'
import capuccino from '../assets/capuccino.svg'
import cremoso from '../assets/cremoso.svg'
import macchiato from '../assets/macchiato.svg'
import leite from '../assets/leite.svg'
import latte from '../assets/latte.svg'
import gelado from '../assets/gelado.svg'
import tradicional from '../assets/tradicional.svg'
import CoffeCard from '../components/CoffeCard'

const styles = {
    wrapper: 'px-8 md:px-40 mt-24',
    firstContentWrapper: 'w-full flex gap-x-14',
    contentTextWrapper: 'max-w-[588px]',
    title: 'text-brown-900 text-5xl font-title',
    subtitle: 'mt-4 text-xl leading-6 text-brown-700',
}

export default function Home() {
    const coffeIds = {
        Americano: 1,
        Capuccino: 2,
        Cremoso: 3,
        Macchiato: 4,
        Leite: 5,
        Latte: 6,
        Gelado: 7,
        Tradicional: 8,
    }

    const coffesList = [
        {id: coffeIds.Americano, image: americano, name: "Americano", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL"]},
        {id: coffeIds.Capuccino, image: capuccino, name: "Capuccino", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL", "COM LEITE"]},
        {id: coffeIds.Cremoso, image: cremoso, name: "Cremoso", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL"]},
        {id: coffeIds.Macchiato, image: macchiato, name: "Macchiato", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL"]},
        {id: coffeIds.Leite, image: leite, name: "Com Leite", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL", "COM LEITE"]},
        {id: coffeIds.Latte, image: latte, name: "Latte", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL", "COM LEITE"]},
        {id: coffeIds.Gelado, image: gelado, name: "Expresso Gelado", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL", "GELADO"]},
        {id: coffeIds.Tradicional, image: tradicional, name: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", features: ["TRADICIONAL"]},
    ]

    const features = ['TRADICIONAL']

    return (
        <div className={styles.wrapper}>
            <div className={styles.firstContentWrapper}>
                <div className={styles.contentTextWrapper}>
                    <img className="z-10 fixed opacity-30" src={coffeBrush2} alt="" />
                    <h1 className={styles.title}>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p className={styles.subtitle}>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <img className="z-10 fixed opacity-30" src={coffeBrush} alt="" />
                    <ListOfItemsHome /> 
                </div>
                <div>
                    <img className="hidden lg:flex" src={heroImg} alt="coffe cup" />
                </div>
            </div>
            <div className="mt-24 mb-12">
                <h1 className='text-2xl font-title'>Nossos cafés</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-14 gap-16">
                    {coffesList.map((coffe) => {
                        return <CoffeCard key={coffe.id} name={coffe.name} image={coffe.image} description={coffe.description} features={coffe.features}/>
                    })}
                    
                </div>
            </div>
        </div>
    )
}
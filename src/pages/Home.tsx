import heroImg from '../public/hero.png'
import coffeBrush from '../public/coffeBrush.png'
import coffeBrush2 from '../public/coffeBrush2.png'
import CoffesMenu from '../components/CoffesMenu'
import ListOfItemsHome from '../components/ListOfItemsHome'

const styles = {
    wrapper: 'px-8 md:px-40 mt-24',
    firstContentWrapper: 'w-full flex gap-x-14',
    contentTextWrapper: 'max-w-[588px]',
    title: 'text-brown-900 text-5xl font-title',
    subtitle: 'mt-4 text-xl leading-6 text-brown-700',
}

export default function Home() {
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
            <CoffesMenu />
        </div>
    )
}
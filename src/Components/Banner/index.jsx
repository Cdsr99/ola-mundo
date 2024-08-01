import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/image.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresantacao}>
                <h1 className={styles.titulo}>
                    Olá, Eu sou Lucas Baladeiro
                </h1>
                <p className={styles.paragrafo}>
                    Manda uma cantada, se for boa eu pego!
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt='Minha foto' />

            </div>


        </div>
    )
}

export default Banner
import styles from "./SobreMim.module.css";

import PostModelo from "Components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Endrio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Endrio Chupetinha"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aquele cara que você sempre vê na balada, curtindo a noite e conhecendo novas pessoas. Estou feliz de compartilhar um pouco da minha história com você.
            </p>
            <p className={styles.paragrafo}>
                Minha jornada pelas festas começou no Instituto Federal do Piauí (IFPI), onde eu fazia o ensino médio. Naquela época, comecei a sair com os amigos e descobri meu gosto por baladas. Eu adorava dançar e conhecer gente nova, mas nunca imaginei que isso se tornaria parte da minha vida.
            </p>
            <p className={styles.paragrafo}>
                Durante a faculdade, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá, entre estudos e projetos, eu ainda encontrava tempo para sair e me divertir. Foi nesse período que me tornei um frequentador assíduo das festas universitárias, onde fiz muitos amigos e aprendi a me socializar ainda mais.
            </p>
            <p className={styles.paragrafo}>
                Com o tempo, fui aprimorando minhas habilidades de interação social e me tornei conhecido como o "cara da balada". Desenvolvi um jeito único de me aproximar das pessoas, e isso me ajudou a fazer amizades duradouras e conhecer pessoas incríveis.
            </p>
            <p className={styles.paragrafo}>
                E foi nesse ambiente de festas que decidi procurar algo mais sério, um equilíbrio entre diversão e responsabilidade. Encontrei uma vaga como promotor de eventos em uma das maiores casas noturnas da cidade, onde posso unir minhas duas paixões: a vida noturna e o contato com pessoas.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tenho vivido uma sequência de noites memoráveis. Cada festa é uma nova oportunidade de criar momentos inesquecíveis e de fazer parte das histórias das pessoas que conheço. Sou muito grato por poder compartilhar essa alegria com todos. Espero que, se um dia nos encontrarmos na balada, possamos curtir juntos!
            </p>

        </PostModelo>
    )
}
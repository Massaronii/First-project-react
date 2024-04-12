import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { Trash, ThumbsUp } from "phosphor-react"


export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yago Massaroni</strong>
              <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1 hora atrás
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

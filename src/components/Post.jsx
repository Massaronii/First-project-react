import styles from "./Post.module.css"

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/massaronii.png"
          />
          <div className={styles.authorInfo}>
            <strong>Yago Massaroni</strong>
            <span>web Developer</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa Acabei de subir mais um projeto no meu portifa.</p>
        <p>
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do
          projeto é DoctorCare
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  )
}
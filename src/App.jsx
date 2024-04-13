import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/massaronii.png",
      name: "Yago Massaroni",
      role: "Full-stack developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2024-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishAt: new Date("2024-05-10 20:00:00"),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return (
           <Post
          author={post.author}
          content={post.content}
          publishAt={post.publishAt}
           />
          )
          })}
        </main>
      </div>
    </div>
  )
}

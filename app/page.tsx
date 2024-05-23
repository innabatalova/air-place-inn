import { FC } from "react"
import { Typography } from "@mui/material"

import SearchField from "@/components/SearchField/page"

import styles from './App.module.css'

const App: FC = () => {
  return (
    <div className={styles.App}>
      <div className={styles.Wrapper}>
        <Typography variant="h3" className={styles.Title}>ПОИСК ПО ИНН</Typography>
        <SearchField />
      </div>
    </div>
  )
}

export default App

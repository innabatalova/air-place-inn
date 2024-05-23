import Link from "next/link"
import { Typography } from "@mui/material"

import styles from './errorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={styles.Wrapper}>
      <Typography variant="h3" className={styles.Title}>Недействительный ИНН</Typography>
      <Link href='/' className={styles.Link}>Попробуйте снова</Link>
    </div>
  )
}

export default ErrorPage
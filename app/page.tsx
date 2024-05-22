'use client'

import { FC, useState } from "react"
import {
  FormControl,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from "@mui/icons-material/Clear"

import validation from "@/utils/validation"

import styles from './App.module.css'

const App: FC = () => {
  const [showClearIcon, setShowClearIcon] = useState<string>("none")
  const [clearField, setClearField] = useState<string>("")
  const [valid, setValid] = useState<boolean>(true)
  const [valueInput, setValueInput] = useState<string>("")

  const changeSearchInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    validation(event) ? setValid(true) : setValid(false)
    setShowClearIcon(event.target.value === "" ? "none" : "flex")
    setClearField(event.target.value)
    setValueInput(event.target.value)
  }

  const clickClearIcon = (): void => {
    setValid(true)
    setShowClearIcon("none")
    setClearField("")
  }

  const clickSearchIcon = (): void => {
    console.log('tester SSR')

  }

  return (
    <div className={styles.App}>
      <div className={styles.Wrapper}>
        <Typography variant="h3" className={styles.Title}>ПОИСК ПО ИНН</Typography>
        <FormControl className={styles.FormControl}>
          <TextField className={styles.TextField}
            size="medium"
            error={!valid ? true : false}
            helperText={valid ? '' : 'Укажите данные в числовом формате'}
            variant="outlined"
            placeholder="Введите ИНН организации"
            value={clearField}
            onChange={changeSearchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  onClick={clickSearchIcon}>
                  <SearchIcon sx={{ cursor: 'pointer' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ display: showClearIcon }}
                  onClick={clickClearIcon}
                >
                  <ClearIcon sx={{ cursor: 'pointer' }} />
                </InputAdornment>
              )
            }}
          />
        </FormControl>
      </div>

    </div>

  );
};

export default App

'use client'

import { FC, useState } from "react"
import { useRouter } from 'next/navigation'

import { Button, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from "@mui/icons-material/Clear"

import validation from "@/utils/validation"

import styles from './searchField.module.css'

const SearchField: FC = () => {
  const router = useRouter()

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

  const clickSearchIcon = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    router.push('/info/' + valueInput)
  }

  return (
    <form onSubmit={clickSearchIcon}>
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
            <Button type="submit">
              <SearchIcon sx={{ cursor: 'pointer' }} />
            </Button>
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
    </form>
  )
}

export default SearchField

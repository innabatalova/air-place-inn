const validation = (event: React.ChangeEvent<HTMLInputElement>): boolean => {
  const regExp = /\D/g
  const trimmedValue = event.target.value.trim()
  return regExp.test(trimmedValue) ? false : true
}

export default validation
export const userIsLogged = () => {
  const msg = localStorage.getItem('token')
    ? 'El usuario esta autenticado'
    : 'El usuario esta no autenticado'

  console.log(msg)
}

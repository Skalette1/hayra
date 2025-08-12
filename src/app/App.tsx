import { MainPage } from '../pages/MainPage'
import { ScrollRestoration } from 'react-router-dom'
function App() {

  return (
    <>
      <MainPage />
      {/* Включаем встроенное восстановление позиции для главной */}
      <ScrollRestoration getKey={(location) => (location.pathname === '/' ? 'main' : location.pathname)} />
    </>
  )
}

export default App

///Users/antonypry/Documents/Учеба/Политех/3 семестр/Веб-клиент/web-client/src/App.tsx
import { useState } from 'react';
import './App.css'
import MainRouter from './app/routes/MainRouter';
import Navbar from './components/Navbar'


const App = () => {
	const [isAuth, setIsAuth] = useState(false)
  return (
    <>
		<Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>

			{/* 
			Здесь будет ваш компонент Navbar, который принимает 
			функцию setIsAuth и isAuth
			*/}

      <MainRouter isAuth={isAuth}/>
    </>
  )
}

export default App;
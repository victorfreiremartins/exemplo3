import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// instalando o pacote de dependecas para crias as rotas
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'
import Home from './routes/Home.jsx'

// Criando a função createBrowserRouter

const router = createBrowserRouter([
  {
    // criando os elementos pai
    path: '/', element: <App/>,
    errorElement: <Error/>,

    // Criando os elementos filho

    children:[
      {
        path:'/', 
        element: <Home/>
      },

      {
        path:'/aluno',
        element: <Aluno/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* criando desetruturação para que seja renderizada */}
    <RouterProvider router = {router} />
  </StrictMode>,
)

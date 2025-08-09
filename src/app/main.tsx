import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.tsx'
const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark')
}

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

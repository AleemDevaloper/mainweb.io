import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './pages/Index.jsx'
import Header from "./components/Header.jsx";
import Footer from "./components/Fotter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />  {/* Header component added */}
    <Index />
    <Footer />  {/*Footer componet added */} 
  </StrictMode>,
)

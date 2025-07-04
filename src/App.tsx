import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black transition-all duration-300 overflow-x-hidden">
      <Header />
      <section className='relative flex items-center justify-center mt-20 h-screen'>
      <h1 className='text-5xl md:text-6xl text-slate-50 font-bold relative bottom-60 text-center bg-gradient-to-r from-white/70 to-purple-400 text-transparent bg-clip-text p-3'>Iago Liziero</h1>
        <div className="flex flex-col items-center justify-center">          <Hero />
        </div>
      </section> 
    </div>
  )
}

export default App

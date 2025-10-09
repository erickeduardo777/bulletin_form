import './App.css'
import CxContent from './components/content'
import CxImage from './components/image'

function App() {

  
  return (
    <div className='w-full h-dvh bg-transparent flex justify-center items-center'>
      <div className='bg-white w-dvh h-dvh flex flex-col-reverse justify-end items-center'>
        <CxContent />
        <CxImage />
      </div>
    </div>
  )
}

export default App

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'

const MainLayout = ( ) => {
  return (
    <div className='bg-black text-white md:px-28 overflow-hidden'>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
)
}

export default MainLayout
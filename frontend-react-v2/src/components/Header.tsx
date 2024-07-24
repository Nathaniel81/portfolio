import { 
  Link, 
  // animateScroll as scroll
} from 'react-scroll'
import Nav from './nav'
import MobileNav from '@/components/mobileNav'

const Header = () => {
  return (
    <header className='fixed z-50 w-full bg-primary py-6 xl:py-8'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* logo */}
        <Link to='hero' spy={true} smooth={true} className='cursor-pointer'>
          <img src='/logo.png' height={54.53} width={41.35} alt='logo' />
        </Link>

        {/* disktop nav */}
        <div className='hidden items-center gap-x-8 xl:flex'>
          <Nav />
          <Link
            to='Contact'
            spy={true}
            smooth={true}
            className='cursor-pointer text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'
          >
            Contact
          </Link>
        </div>
        {/* mobile nav */}
        <div className='z-50 xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

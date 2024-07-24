import { Link } from 'react-scroll'
import Social from './Social'

const Footer = () => {
  return (
    <section className='bg-secondary py-8'>
      <div className='container flex flex-col items-center justify-between gap-4 xl:flex-row'>
        <p className='text-xl font-semibold uppercase'>
          {' '}
          <span>® 2024</span> Nathaniel Demissie
        </p>
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <img src='/logo.png' width={54.08} height={336.65} alt='logo' />
        </Link>
        <Social />
      </div>
    </section>
  )
}

export default Footer

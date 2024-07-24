import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const menu = [
  {
    name: 'services',
    href: '#services'
  },
  {
    name: 'work',
    href: '/#works'
  },
  {
    name: 'Skills',
    href: '/#skills'
  },
  {
    name: 'Contact',
    href: '/#contact'
  }
]

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className='flex items-center'>
        <Menu className='size-8 text-blue' />
      </SheetTrigger>
      <SheetContent>
        <div className='mb-40 mt-32 flex items-center justify-center'>
          <img src='/logo.svg' height={60.53} width={47.35} alt='logo' />
        </div>
        <nav className='mt-8 flex flex-col items-center justify-center gap-8'>
          {menu.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className='text-lg font-medium capitalize'
            >
              <span className='pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue'>
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

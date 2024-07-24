import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";


const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/nathaniel81'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/nathanieldemissie'
  },
  {
    icon: <FaDiscord />,
    path: 'https://discord.com/users/988749033294143488'
  }
]

const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <a
          href={item.path}
          target='_blank'
          key={index}
          className='duration-3000 flex size-10 items-center justify-center rounded-full border-2 border-blue text-blue hover:bg-blue/20 hover:transition-all'
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Social

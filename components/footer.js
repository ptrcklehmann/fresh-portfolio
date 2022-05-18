import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { AiFillGithub, AiFillBehanceSquare } from 'react-icons/ai'
export default function Footer() {
  return (
    <footer className='border-t bg-accent-1 border-accent-2'>
      <Container>
        <div className='flex flex-col items-end py-28 lg:flex-row'>
          <div className='flex items-end justify-end lg:flex-row lg:pl-4 lg:w-full'>
            <a
              href='https://github.com/ptrcklehmann'
              className='px-1 py-1 mx-1 font-bold text-white transition-all duration-500 border rounded-md bg-accent-9 border-accent-8 hover:bg-white hover:text-accent-7 hover:border-transparent lg:px-1 lg:mb-0'
            >
              <AiFillGithub size={'2rem'} />
            </a>
            <a
              href='https://behance.net/ptrcklehmann'
              className='px-1 py-1 mx-1 font-bold text-white transition-all duration-500 border rounded-md bg-accent-9 border-accent-8 hover:bg-white hover:text-accent-7 hover:border-transparent lg:px-1 lg:mb-0'
            >
              <AiFillBehanceSquare size={'2rem'} />
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className='mx-3 font-bold hover:underline'
            ></a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

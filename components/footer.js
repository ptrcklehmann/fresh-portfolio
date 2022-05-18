import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className='border-t bg-accent-1 border-accent-2'>
      <Container>
        <div className='flex flex-col items-end py-28 lg:flex-row'>
          <h3 className='mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-full'></h3>{' '}
          <div className='flex flex-col items-end justify-end lg:flex-row lg:pl-4 lg:w-1/2'>
            <a
              href='https://github.com/ptrcklehmann'
              className='px-4 py-2 mx-2 font-bold text-white transition-colors duration-200 bg-black border border-black hover:bg-white hover:text-black lg:px-2 lg:mb-0'
            ><AiFillGithub /></a>
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

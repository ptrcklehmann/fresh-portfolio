import {CMS_NAME,CMS_URL} from '../lib/constants'
import Typist from "react-typist";
import { useEffect, useState } from 'react';

export default function Intro() {
  const scrambleTexts=[
    'magnificent',
    'terrific',
    'wonderful',
    'superb',
    'delightful',
    'pioneering',
    'magical',
    'great',
    'legendary',
    'funky',
  ]
  const [currentTextCounter,setCurrentTextCounter]=useState(0);

  const day=new Date();
  const weekday=[]
  weekday[0]="Sunday";
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";

  const dayname=weekday[day.getDay()]
  return (
    <section className='flex flex-col items-center w-full mt-16 mb-16 md:justify-between md:mb-12'>
      <p className='w-full mb-2 text-3xl font-bold leading-normal tracking-tight md:text-7xl md:pr-8'>
        🍻 Cheers, I am <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>Patrick</span>,
      </p>
      <p className='mb-20 text-3xl font-bold leading-normal tracking-tight transition-all text-type-1 md:text-7xl md:pr-8'>
        A detail-oriented frontend developer{' '}
        <span className='text-transparent transition-all bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'><a className='hover:text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9' href="https://goo.gl/maps/FJqL7jfmUvnJ2Leu9"> from rural Brazil</a></span>, currently
        living in ~~Berlin~~ on the road. I've transitioned from graphic design
        to web development in the past 3 years, after helping{' '}
        <span className='text-transparent transition-all bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>organisations</span> like the{' '}
        <a
          className='underline transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9 decoration-accent-7 decoration-solid decoration-8 underline-offset-8'
          href='https://www.ilo.org/'
        >
          ILO
        </a>{' '}
        and{' '}
        <a
          className='underline transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9 decoration-accent-7 decoration-solid decoration-8 underline-offset-8'
          href='https://www.aviatrixberlin.com/'
        >
          Aviatrix
        </a>{' '}
        deliver kick-ass campaigns, worked as a barista to level-up my{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>German</span> skills, backpacked 3
        months through Europe with my dog{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>Ponyo</span> 🐕 and tent{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>Priscila</span> ⛺️, discovering the
        southern beaches of Portugal and cruising the cold waters of the Baltic
        Sea.
      </p>
      <p className='w-full mb-2 text-3xl font-bold leading-normal tracking-tight text-type-1 md:text-7xl md:pr-8'>
        I have <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>3 years</span> of experience as a{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'>developer</span> and love working with
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'> React </span> and other hip frameworks.
        If you fancy a chat feel free to <a
          className='underline transition-all duration-500 hover:text-transparent bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9 decoration-accent-7 decoration-solid decoration-8 underline-offset-8'
          href='malito:ptrcklehmann@gmail.com'
        > drop me a line</a>.
      </p>
      <p className='w-full mb-2 text-3xl font-bold leading-normal tracking-tight text-transparent transition-all bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9 md:text-7xl md:pr-8'>Stay bold <span className='text-type-1'> &</span> <br />
        have a <Typist key={currentTextCounter} onTypingDone={() => { if (currentTextCounter <= 9) setCurrentTextCounter(currentTextCounter++)
          else setCurrentTextCounter(0)}} className='text-transparent transition-all bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9' count>
        {scrambleTexts[currentTextCounter]}
        <Typist.Backspace delay={200} count={scrambleTexts[currentTextCounter].length} />
        </Typist>
        {dayname}</p>
    </section>
  )
}

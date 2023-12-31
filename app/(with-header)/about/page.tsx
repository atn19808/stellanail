import type { Metadata } from 'next/types';
import Image from 'next/image';

import Section from '@/components/Section/Section';
import { H1, H2, H3 } from '@/components/Heading/Heading';
import Hero from '@/components/Hero/Hero';
import SiteCTASection from '@/components/SiteCTASection/SiteCTASection';

import imgStella from '../../../public/stella-about-me.webp';

import PageStructuredData from './PageStructuredData';

export const metadata: Metadata = {
  title: 'About me - The Stella Nails',
  description:
    'About my home nail salon journey. Understand why creating a safe space to express yourself is so important to me',
};

export default function AboutMe() {
  return (
    <div className="grow">
      <PageStructuredData />
      <Hero
        contained
        flipped
        title={<H1>About me</H1>}
        subtitle="Hello and welcome! I'm Stella 🤗"
        feature={
          <Image
            src={imgStella}
            alt="Photo of Stella, owner of It's Stella Nails"
            priority
            quality={100}
            placeholder="blur"
          />
        }
      />
      <Section as="article">
        <Section.Column>
          <H2>How It&apos;s Stella Nails was born</H2>
          <p>
            I&apos;ve always been creative from a young age, but especially growing up in an Asian
            family, I never thought that a career in Arts would be an option for me.
          </p>
          <p>
            I tried to be the perfect daughter, which led me down the path of studying primary
            teaching, then counselling, and working 9-5 office jobs.
          </p>
          <p>
            But it wasn&apos;t until my knee injury in 2020 that I really started thinking about
            what I was doing with my life.
          </p>
          <p>
            I was bed-ridden for weeks - I literally had to learn how to walk and run again. For the
            first time in 7 years I took a break from working. I had a lot of time to focus on my
            health and think about the things that bring me joy.
          </p>
          <p>
            Art has always been a form of therapy for me, and doing my own nails and creating lots
            of fun nail art really lifted my spirits during my recovery. Not to mention during all
            of the COVID lockdowns that followed!
          </p>
          <p>
            These events made me realise that I needed to start living life for myself instead of
            doing what everyone expected of me, so I did the unspeakable, and started to pursue my
            hobby of creating beautiful things that bring joy as a full time career. And so, The
            Stella Nails was born!
          </p>
          <p>
            When I thought about the kind of person that I am, and my core values, I knew I wanted
            to do things a little differently.
          </p>
          <H3>Creating a safe space</H3>
          <p>
            I want every client to feel like they are going to a friend&apos;s house to get their
            nails done. Somewhere that you can relax and be your authentic self, no matter what that
            means for you. If you need any accommodations made to feel comfortable, please send me a
            message and I&apos;ll be happy to discuss them with you!
          </p>
          <H3>An island of calm</H3>
          <p>
            As an introvert with anxiety I would dread every time I needed to get my nails done at a
            busy, noisy shopping mall. You can get pampered in my private, clean and
            professionally-equipped home salon — away from all the chaos.
          </p>
          <H3>Personalised nail designs</H3>
          <p>
            You&apos;re unique, and your nail art should celebrate that fact. I tailor every design
            based on things like your specific style, interests, inspo pics and skin tone, so that
            you walk out loving your nails.
          </p>
        </Section.Column>
      </Section>
      <SiteCTASection />
    </div>
  );
}

'use client';

import {
  ClipText,
  TextScrollRead,
  TextScrollReadWrap,
} from '@/components/ui/text-scroll-read';

export function AboutSection() {
  return (
    <section className="bg-primary pt-8 pb-8">
      <TextScrollRead className="px-6 md:px-12">
        <TextScrollReadWrap className="min-h-[30vh] md:min-h-[50vh] place-content-center md:w-3/4 mx-auto overflow-visible">
          <ClipText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-normal leading-tight uppercase text-center px-4 overflow-visible bg-[linear-gradient(-90deg,rgba(0,0,0,0.15)_50%,rgb(0,0,0)_50%)]">
            We craft unforgettable dining experiences with fresh ingredients,
            bold flavors, 
            and a passion for bringing people together around
            great food.
          </ClipText>
        </TextScrollReadWrap>
      </TextScrollRead>
    </section>
  );
}

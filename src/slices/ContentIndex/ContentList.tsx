'use client';

import { Content, isFilled } from '@prismicio/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { MdArrowOutward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.ContentIndexSlice['primary']['content_type'];
  viewMoreText: Content.ContentIndexSlice['primary']['view_more_text'];
};

function ContentList({
  items,
  contentType,
  viewMoreText = 'Read More',
}: ContentListProps) {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  const urlPrefix = contentType === 'Blog' ? '/blog' : '/project';

  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach(item => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: 'elastic.out(1, 0.3)',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom-=100px',
              end: 'bottom center',
              toggleActions: 'play none none none',
            },
          }
        );
      });
      return () => ctx.revert(); // cleanup
    }, component);
  }, []);

  return (
    <div>
      <ul className='grid border-b border-b-slate-100' ref={component}>
        {items.map((item, index) => (
          <>
            {isFilled.keyText(item.data.title) && (
              <li
                key={index}
                className='list-item opacity-0f'
                ref={el => (itemsRef.current[index] = el)}
              >
                <Link
                  href={urlPrefix + '/' + item.uid}
                  className='flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row'
                  aria-label={item.data.title}
                >
                  <div className='flex flex-col'>
                    <span className='text-3xl font-bold'>
                      {item.data.title}
                    </span>
                    <div className='flex gap-3 text-yellow-400 text-lg font-bold'>
                      {item.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
                    {viewMoreText}
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;

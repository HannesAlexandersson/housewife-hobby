import { sanityFetch } from '@/sanity/client'
import { getFooter } from '@/sanity/querys'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../Icon/Icon'

interface FootProps {
  logo: string
  altText: string
}

const Footer = async () => {
  const footerData = await sanityFetch<FootProps[]>({ query: getFooter })

  return (
    <footer className='flex flex-col border-t-2 border-annika-pink bg-annika-cream px-2 py-6 text-annika-blue'>
      <div className='flex flex-1 flex-col items-center justify-start gap-4 pt-6'>
        <div className='flex h-auto w-auto flex-1 flex-col items-center justify-start gap-1'>
          <Image
            src={footerData[0].logo}
            alt={footerData[0].altText}
            width={175}
            height={175}
          />
        </div>
        <div className='flex flex-row justify-center gap-5 pb-10 pt-2'>
          <Link href='#' target='_blank' rel='noreferrer'>
            <Icon name='facebook' size={28} strokeWidth={1} />
          </Link>
          <Link href='#' target='_blank' rel='noreferrer'>
            <Icon name='instagram' size={28} strokeWidth={1} />
          </Link>

          <Link
            href='https://www.linkedin.com/in/hannes-alexandersson-3226952b3/'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='linkedin' size={28} strokeWidth={1} />
          </Link>
          <Link
            href='https://github.com/HannesAlexandersson'
            target='_blank'
            rel='noreferrer'
          >
            <Icon name='github' size={28} strokeWidth={1} />
          </Link>
        </div>
        <div className='flex flex-1 flex-col items-center justify-end gap-4'>
          <h4>
            Sidan konstruerad av{' '}
            <Link href='www.portfolio-new-eight-zeta.vercel.app/'>
              <span className='text-annika-lightGreen hover:text-annika-darkGreen'>
                Hannes Alexandersson
              </span>
            </Link>
          </h4>
        </div>
        <div className='flex flex-1 flex-col items-center justify-end gap-4'>
          <p>&copy; 2024, All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer

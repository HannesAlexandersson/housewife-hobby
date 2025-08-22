import Navbar, { NavbarSkeleton } from '@/app/components/Navbar/Navbar'
import Skeleton from '@/app/components/Skeleton/Skeleton'
import { HeroSkeleton } from './components/Hero/Hero'

const loading = () => {
  return (
    <>
      <NavbarSkeleton />
      <HeroSkeleton />
      <main>
        <section className='flex h-screen items-end justify-center px-6 pb-24 sm:items-center sm:pb-0 md:px-16'>
          <div className='flex w-full max-w-[800px] flex-col gap-12'>
            <div className='flex flex-col gap-2'>
              <Skeleton className={'h-24'} />
              <Skeleton className={'mx-auto h-10 max-w-[600px]'} />
              <Skeleton className={'mx-auto h-10 sm:w-1/2'} />
            </div>
            <Skeleton className={'mx-auto h-10 sm:w-1/2'} />
          </div>
        </section>
      </main>
    </>
  )
}

export default loading
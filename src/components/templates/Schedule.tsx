import { Calendar, Circle } from 'lucide-react'
import Link from 'next/link'

export const Schedule = () => {
  return (
    <div>
      <section
        id='schedule'
        className=' relative min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_200px,#181818,transparent)]  py-12'
      >
        <div className='container mx-auto flex flex-col items-center justify-center'>
          <div className='space-y-6 text-center'>
            <div className='inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-500'>
              Class Schedule
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-orange-100 sm:text-4xl lg:text-5xl'>
              Class Schedule
            </h2>
            <p className='font-heading text-gray-100'>
              Find the perfect class to fit your fitness goals and schedule.
            </p>
          </div>
          <div className='mt-12 flex flex-col justify-evenly gap-6 md:flex-row'>
            <div className='rounded-xl bg-background p-6 shadow-md transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-4'>
                <Circle className='h-8 w-8 text-orange-500' />
                <h3 className='text-xl font-semibold'>
                  Kickboxing Boxing Muay Thai
                </h3>
              </div>
              <p className='mt-2 text-gray-500'>
                Learn the fundamentals of kickboxing in a supportive learning
                environment.
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-gray-500' />
                    <span className='text-sm text-gray-500'>
                      Mon - 9:00AM - 10:30AM
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-gray-500' />
                    <span className='text-sm text-gray-500'>
                      Wed - 9:00AM - 10:30AM
                    </span>
                  </div>
                </div>
                <Link href='/dashboard/billing'>Join Class</Link>
              </div>
            </div>

            <div className='rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:scale-105'>
              <div className='flex items-center gap-4'>
                <Circle className='h-8 w-8 text-orange-500' />
                <h3 className='text-xl font-semibold text-orange-950/90'>
                  Cardio Kickboxing
                </h3>
              </div>
              <p className='mt-2 text-gray-500'>
                Train like a fighter, look like a fighter, save the brain cells.
              </p>
              <div className='mt-4 flex items-center justify-between'>
                <div className='flex flex-col gap-3'>
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-gray-500' />
                    <span className='text-sm text-gray-500'>
                      Tue - 12:00 AM
                    </span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Calendar className='h-5 w-5 text-gray-500' />
                    <span className='text-sm text-gray-500'>Sat - 8:00 AM</span>
                  </div>
                </div>
                <Link href='/dashboard/billing'>Join Class</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { About } from '@/templates/about'
import Benefits from '@/templates/benefits'
import Bookings from '@/templates/bookings'
import { Hero } from '@/templates/hero'
import { Practice } from '@/templates/practice'
import Schedule from '@/templates/schedule'

export default function IndexPage() {
  return (
    <div className='relative min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_200px,#181818,transparent)] '>
      <Hero />
      <About />
      {/* <Practice /> */}
      <Schedule />
      {/* <Benefits /> */}
      <Bookings />
    </div>
  )
}

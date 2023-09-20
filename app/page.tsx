import { CarCard, Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import { carsApi } from '@/utils'
import Image from 'next/image'

export default async function Home() {
  const allCars= await carsApi();
  const isDataEmpty =!Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          {/* <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div> */}
        </div>
        {
          !isDataEmpty ?(
            <section>
              {allCars?.map((car)=>(
                <CarCard car={car}/>
              ))}
            </section>
          ):(
            <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
          )
        }
        </div>
    </main>
  )
}

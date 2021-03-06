import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export interface ExploreData {
  img: string;
  location: string;
  distance: string;
}
export interface CardData {
  img: string;
  title: string;
}

const Home: NextPage<{
  exploreData:ExploreData[];
  cardData:CardData[];
}> = ({ exploreData,cardData }) => {

  return (
    <div className="">
      <Head>
        <title>Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes & Experiences - Airbnb</title>
        <link rel="icon" href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" />
      </Head>
        <Header/>
        <Banner/>
       <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
            {/* Pull some data from a server - api endpoints */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              exploreData.map((item) => (
                 <SmallCard
                    key={item.location}
                    img={item.img}
                    location={item.location}
                    distance={item.distance}
                 />
              ))
            }
            </div>
          </section>
          <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {
                cardData.map((item) => (
                  <MediumCard
                    key={item.title}
                    img={item.img}
                    title={item.title}
                  />
                ))
              }
            </div>
          </section>
           <LargeCard
             img='https://links.papareact.com/4cj'
             title='The Great Outdoors'
             description='Wishlists curated by Airbnb'
              buttonText='Get Inspired'
           />
       </main>
        <Footer/>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
   
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(res => res.json())

  const cardData = await fetch('https://links.papareact.com/zp1').
  then(res => res.json())

  return {
    props: {
       exploreData,
       cardData
    },
  }
}


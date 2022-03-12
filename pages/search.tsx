import { format } from 'date-fns'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'

export interface SearchPageProps {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

const Search:NextPage<{
  searchResults: SearchPageProps[];
}> = ({searchResults}) => {

    const router = useRouter()
    
    const {location,startDate,endDate,noOfGuests} = router.query
    //@ts-ignore
     const formatedStartDate = format(new Date(startDate),'dd MMM yy')
     //@ts-ignore
    const formatedEndDate = format(new Date(endDate),'dd MMM yy')
    const range = `${formatedStartDate} - ${formatedEndDate}`

  return (
    <div >
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
        <main className='flex'>
          <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} number of guests</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
              <p className='button'>Cancellation Flexibility</p>
              <p className='button'>Types of Place</p>
              <p className='button'>Price</p>
              <p className='button'>Rooms and Beds</p>
              <p className='button'>More filters</p>
            </div>
            <div className='flex flex-col'>
            {
              searchResults.map((result,index) => (
                   <InfoCard
                    key={index}
                    img={result.img}
                    location={result.location}
                    title={result.title}
                    description={result.description}
                    star={result.star}
                    price={result.price}
                    total={result.total}
                   />
              ))
            }
            </div>
          </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Search

export const getServerSideProps = async () => {

  const searchResults = await fetch('https://links.papareact.com/isz').
  then(res => res.json())


  return {
    props: {
        searchResults,
    },
  }
}
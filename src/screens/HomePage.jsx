import React from 'react'
import HomeSwiper from '../components/HomeSwiper'
import HomeSobreMi from '../components/HomeSobreMi'
import HomeBeneficios from '../components/HomeBeneficios'
import HomeProdsContainer from '../components/HomeProdsContainer'
import HomeContacto from '../components/HomeContacto'
import HomeOpiniones from '../components/HomeOpiniones'

const HomePage = () => {
  return (
    <>
        <HomeSwiper/>
        <HomeSobreMi/>
        <HomeProdsContainer/>
        <HomeBeneficios/>
        <HomeOpiniones/>
        <HomeContacto/>
    </>
  )
}

export default HomePage
// import styles from './page.module.css'
import ProductsContainer from '@/components/ProductsContainer'
import HomeCarousel from '@/components/HomeCarousel'
import { GetHomeCarouselPics } from "@/components/GetHomeCarouselPics.query";

function Home() {
  return (
    <main>
      <HomeCarousel 
        homeCarouselPics={homeCarouselPics}
      />
      <ProductsContainer />
    </main>
  )
}

const homeCarouselPics = await GetHomeCarouselPics();

export default Home

import {NextSeo} from 'next-seo';
import Hero from "@/components/home-page/hero/Hero";
import dynamic from 'next/dynamic'
const CitySection = dynamic(() => import('@/components/home-page/cities/CitySection'), {
    loading: () => <p>Loading...</p>,
})
const Categories = dynamic(() => import('@/components/home-page/categories/Categories'), {
    loading: () => <p>Loading...</p>,
})
const PopularFoods = dynamic(() => import('@/components/home-page/popular-foods/PopularFoods'), {
    loading: () => <p>Loading...</p>,
})
const PopularRestaurant = dynamic(() => import('@/components/home-page/popular-restaurant/PopularRestaurant'), {
    loading: () => <p>Loading...</p>,
})
const HomePageBlog = dynamic(() => import('@/components/home-page/blog-section/HomePageBlog'), {
    loading: () => <p>Loading...</p>,
})
const Newsletter = dynamic(() => import('@/components/home-page/newsletter/Newsletter'), {
    loading: () => <p>Loading...</p>,
})
export default function Home() {
    return (
        <>
            <NextSeo
                title="NoshQuad - Discover the Best Foods and Restaurants Nearby"
                description="Join the NoshQuad community today and quickly find the best food options nearby.
                     Our user-generated reviews and ratings ensure you always have the top-rated restaurants
                     and foods at your fingertips."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://noshquad.com/images/noshquad.png',
                    title: "NoshQuad - Discover the Best Foods and Restaurants Nearby",
                    description: `Join the NoshQuad community today and quickly find the best food options nearby.
                    Our user - generated reviews and ratings ensure you always have the top-rated restaurants
                    and foods at your fingertips.`,
                    images: [
                        {
                            url: 'https://noshquad.com/images/noshquad.png',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        },
                    ],
                    siteName: 'NoshQuad',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
                <Hero />
                <Categories />
                <PopularFoods />
                <CitySection />
                <PopularRestaurant />
                <HomePageBlog />
                <Newsletter />
        </>
    )
}

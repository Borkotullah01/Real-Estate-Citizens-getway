import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';
import { RxDoubleArrowDown } from 'react-icons/rx';


const Slider = () => {
    const slides = [
        {
            image: "https://i.ibb.co/stBtf13/military-Academy-Daka.png",
            title: "Military Academy, Dhaka",
            description: "Discover the rigorous training grounds of Bangladesh's Military Academy in Dhaka. This institution not only prepares future leaders but is also renowned for its disciplined and scenic environment amidst lush greenery.",
            buttonText: "Learn More",
        },
        {
            image: "https://i.ibb.co/PG9kJ9h/dhaka-Library.jpg",
            title: "National Library, Dhaka",
            description: "Step into a world of knowledge at Dhaka's National Library, featuring an extensive collection of books, historical records, and modern digital archives, serving as a quiet haven for students and researchers alike.",
            buttonText: "Visit Library",
        },
        {
            image: "https://i.ibb.co/HVJj8jX/House-Daka.jpg",
            title: "Historic House, Dhaka",
            description: "A window into Dhaka's rich heritage, this historic house embodies classical architecture and cultural significance, standing as a silent witness to the city's vibrant past and present.",
            buttonText: "Learn More",
        },
        {
            image: "https://i.ibb.co/3TKpDr7/victoria-Kolkata.jpg",
            title: "Victoria Memorial, Kolkata",
            description: "A majestic tribute to Queen Victoria, this marble structure in Kolkata is not only a historical monument but also an architectural masterpiece showcasing the fusion of Mughal and British designs.",
            buttonText: "Explore Now",
        },
        {
            image: "https://i.ibb.co/ZfrdYY0/glass-House-Gulshan.jpg",
            title: "Glass House, Gulshan",
            description: "Marvel at this architectural wonder in Gulshan, Dhaka, known for its cutting-edge glass design. The Glass House reflects the modern aspirations of the city while offering stunning views of its surroundings.",
            buttonText: "See More",
        },
        {
            image: "https://i.ibb.co/ZgXNWHw/kathgola-Murshidabad.webp",
            title: "Kathgola Palace, Murshidabad",
            description: "Step back into the grandeur of the 18th century at Kathgola Palace in Murshidabad, a splendid mansion that showcases the opulent lifestyle of Bengal's elite in the colonial era.",
            buttonText: "Explore Palace",
        },
        {
            image: "https://i.ibb.co/jhb5Dbs/greenvalley-Natore.jpg",
            title: "Green Valley, Natore",
            description: "Immerse yourself in the tranquil beauty of Natore's Green Valley, where rolling green landscapes and serene lakes offer a peaceful escape from the hustle and bustle of urban life.",
            buttonText: "Discover More",
        },
        {
            image: "https://i.ibb.co/DVPKgj8/gulshan-Dhaka.jpg",
            title: "Gulshan, Dhaka",
            description: "Experience the vibrancy of Gulshan, a lively neighborhood in Dhaka known for its bustling markets, upscale restaurants, and lively nightlife.",
            buttonText: "See Gulshan",
        },
        {
            image: "https://i.ibb.co/VDMkXmz/ahashan-Monjil-Dhaka.jpg",
            title: "Ahsan Manzil, Dhaka",
            description: "Also known as the Pink Palace, Ahsan Manzil is a stunning reminder of Dhaka's aristocratic past, with grand architecture and rich history on the banks of the Buriganga River.",
            buttonText: "Visit Now",
        },
        {
            image: "https://i.ibb.co/9hnbvfv/cox-sbazar-Station.jpg",
            title: "Cox's Bazar Station",
            description: "As the gateway to the world's longest beach, Cox's Bazar station is an essential stop for travelers looking to soak up the sun, sand, and scenic views.",
            buttonText: "Discover Cox's Bazar",
        },
        {
            image: "https://i.ibb.co/Cs8jwk9/parliament-Dhaka.webp",
            title: "National Parliament, Dhaka",
            description: "Designed by the legendary architect Louis Kahn, Bangladesh's National Parliament Building is an architectural marvel and a symbol of the country's democratic spirit.",
            buttonText: "See Parliament",
        },
        {
            image: "https://i.ibb.co/VNnhQSv/bashundhara-Dhaka.jpg",
            title: "Bashundhara City, Dhaka",
            description: "One of South Asia's largest shopping malls, Bashundhara City offers an exceptional shopping experience with hundreds of stores, a multiplex cinema, and numerous dining options.",
            buttonText: "Visit Mall",
        },
        {
            image: "https://i.ibb.co/kGS9MhS/Poroshova-Kushtia.jpg",
            title: "Poroshova, Kushtia",
            description: "A peaceful locale in Kushtia, Poroshova is known for its tranquil village life and cultural heritage, offering a unique glimpse into Bangladesh's rural heartland.",
            buttonText: "Explore Kushtia",
        },
        {
            image: "https://i.ibb.co/N9M2n2D/kuthibari-Kushtia.jpg",
            title: "Kuthibari, Kushtia",
            description: "Once home to Rabindranath Tagore, Kuthibari is a symbol of Bengal's literary heritage, surrounded by beautiful gardens and memories of the Nobel laureate.",
            buttonText: "Learn More",
        },
        {
            image: "https://i.ibb.co/my46bdv/Fantasy-Dhaka.webp",
            title: "Fantasy Kingdom, Dhaka",
            description: "Get ready for an adventure at Fantasy Kingdom, Dhaka's premier amusement park featuring thrilling rides, water parks, and family-friendly attractions.",
            buttonText: "Get Tickets",
        },
        {
            image: "https://i.ibb.co/CnvPkJR/fantasy-Kingdom-Dhaka.jpg",
            title: "Fantasy Kingdom",
            description: "Another side of Fantasy Kingdom with endless fun and exciting experiences for all ages, perfect for a family day out or group gatherings.",
            buttonText: "Buy Tickets",
        },
        {
            image: "https://i.ibb.co/xXzjHjZ/wander-Land-Foridpur.jpg",
            title: "Wonder Land, Faridpur",
            description: "Known for its unique attractions and serene ambiance, Wonder Land in Faridpur is a hidden gem, ideal for a relaxing day out in nature.",
            buttonText: "Visit Now",
        },
    ];
       
    

    return (
        <Swiper
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-easing="ease"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="slide">
                    <img src={slide.image} alt={slide.title} className="slider-image" />
                    <div className="slide-overlay">
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-description">{slide.description}</p>
                        <a href={slide.buttonLink} className="slide-button text-2xl"><RxDoubleArrowDown /></a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
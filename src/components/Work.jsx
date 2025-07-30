// Work.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const workItems = [
  {
    title: 'Motion Graphics Reel',
    image: '/assets/project1.jpg',
    description: 'Curated animation works for digital campaigns and branding.',
  },
  {
    title: 'Storyboard Project',
    image: '/assets/project2.jpg',
    description: 'Storyboard work for an animated short film with pacing and layout.',
  },
  {
    title: 'UI/UX Case Study',
    image: '/assets/project3.jpg',
    description: 'Interactive design for a mobile-first web platform.',
  },
];

function Work() {
  return (
    <section id="work" className="work-section">
      <h2 className="section-title"><span className="section-title-highlight">PREVIOUS</span> CLIENTS</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="work-carousel"
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {workItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="work-card">
              <img src={item.image} alt={item.title} className="work-thumbnail" />
              <div className="work-details">
                <h3 className="work-title">{item.title}</h3>
                <p className="work-description">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Work;

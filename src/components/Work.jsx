import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // Import icons

import dfaLogo from '../assets/dfa_logo.png';
import bdoLogo from '../assets/bdo_logo.png';
import bpiLogo from '../assets/bpi_logo.png';
import metrobankLogo from '../assets/metrobank_logo.png';
import maxicareLogo from '../assets/maxicare_logo.png';
import firstgenLogo from '../assets/firstgen_logo.png';
import radentaLogo from '../assets/radenta_logo.png';
import upLogo from '../assets/up_logo.png';
import ateneoLogo from '../assets/ateneo_logo.png';
import dojLogo from '../assets/doj_logo.svg';
import dictLogo from '../assets/dict_logo.png';
import pafLogo from '../assets/paf_logo.png';

import dfaStoryboard1 from '../assets/dfa_stb1.png';
import dfaStoryboard2 from '../assets/dfa_stb2.png';
import dfaStoryboard3 from '../assets/dfa_stb3.png';
import dfaIllustration1 from '../assets/dfa_i1.png';
import dfaIllustration2 from '../assets/dfa_i2.png';

import bdoVideo1 from '../assets/bdo_vid.mp4';
import bdoPic1 from '../assets/bdo_a1.png';
import bdoPic2 from '../assets/bdo_a2.png';
import bdoPic3 from '../assets/bdo_b1.png';
import bdoPic4 from '../assets/bdo_b2.png';

const workItems = [
  {
    title: 'Department of Foreign Affairs',
    logo: dfaLogo,
    media: [dfaStoryboard1, dfaStoryboard2, dfaStoryboard3, dfaIllustration1, dfaIllustration2],
    description: 'Storyboard, Illustration, and Graphic Design work for Philippine Department of Foreign Affairs',
  },  
  {
    title: 'Banco De Oro Philippines',
    logo: bdoLogo,
    media: [bdoVideo1,bdoPic1,bdoPic2,bdoPic3,bdoPic4],
    description: 'Storyboard work for the Philippine Department of Foreign Affairs...',
  },
];

function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);
  const [currentMediaList, setCurrentMediaList] = useState([]);

  const openModal = (mediaList, index) => {
    setCurrentMediaList(mediaList);
    setCurrentMediaIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMediaIndex(null);
    setCurrentMediaList([]);
  };

  const showNextMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % currentMediaList.length);
  };

  const showPreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      (prevIndex - 1 + currentMediaList.length) % currentMediaList.length
    );
  };

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">
        <span className="section-title-line" />
        <span className="section-title-highlight">PREVIOUS</span>
        <span> CLIENTS</span>
        <span className="section-title-line" />
      </h2>

      <h3 className="logo-subtitle">Trusted by companies and government entities</h3>
      <div className="work-logos-wrapper">
        <div className="work-logos">
          <div className="work-logo-box">
            <img src={dfaLogo} alt="DFA" />
          </div>
          <div className="work-logo-box">
            <img src={bdoLogo} alt="BDO" />
          </div>
          <div className="work-logo-box">
            <img src={bpiLogo} alt="BPI" />
          </div>
          <div className="work-logo-box">
            <img src={metrobankLogo} alt="Metrobank" />
          </div>
          <div className="work-logo-box">
            <img src={maxicareLogo} alt="Maxicare" />
          </div>
          <div className="work-logo-box">
            <img src={firstgenLogo} alt="First Gen" />
          </div>
          <div className="work-logo-box">
            <img src={radentaLogo} alt="Radenta" />
          </div>          
          <div className="work-logo-box">
            <img src={upLogo} alt="UP" />
          </div>
          <div className="work-logo-box">
            <img src={ateneoLogo} alt="Ateneo" />
          </div>
          <div className="work-logo-box">
            <img src={dojLogo} alt="DOJ" />
          </div>
          <div className="work-logo-box">
            <img src={dictLogo} alt="DICT" />
          </div>
          <div className="work-logo-box">
            <img src={pafLogo} alt="PAF" />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 1.2 },
          1024: { slidesPerView: 1.5 },
        }}
        className="work-carousel"
      >
        {workItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="work-slide">
              {/* Left: Media Carousel */}
              <div className="work-media">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  spaceBetween={10}
                  className="work-inner-carousel"
                >
                  {item.media.map((mediaSrc, i) =>
                    mediaSrc.endsWith('.mp4') ? (
                      <SwiperSlide key={i}>
                        <div onClick={() => openModal(item.media, i)}>
                          <video className="work-showcase" controls>
                            <source src={mediaSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </SwiperSlide>
                    ) : (
                      <SwiperSlide key={i}>
                        <div onClick={() => openModal(item.media, i)}>
                          <img
                            src={mediaSrc}
                            alt={`${item.title} ${i + 1}`}
                            className="work-showcase"
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
          
              {/* Right: Info */}
              <div className="work-info">
                <div className="work-info-center">
                  <img src={item.logo} alt={`${item.title} logo`} className="work-logo" />
                  <h3 className="work-title">{item.title}</h3>
                </div>
                <div className="work-info-description">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>                
        ))}
      </Swiper>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            {currentMediaList[currentMediaIndex]?.endsWith('.mp4') ? (
              <video className="modal-media" controls autoPlay>
                <source
                  src={currentMediaList[currentMediaIndex]}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={currentMediaList[currentMediaIndex]}
                alt="Modal Content"
                className="modal-media"
              />
            )}
            <button className="modal-prev" onClick={showPreviousMedia}>
              <FaArrowLeft />
            </button>
            <button className="modal-next" onClick={showNextMedia}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;

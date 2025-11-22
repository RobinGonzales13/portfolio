import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

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
import freeLogo from '../assets/freelance_logo.png';

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

import bpiPic1 from '../assets/bpi_1.png';
import bpiPic2 from '../assets/bpi_2.png';
import bpiPic3 from '../assets/bpi_3.png';

import metro1 from '../assets/metro_1.png';
import metro2 from '../assets/metro_2.png';
import metro3 from '../assets/metro_3.png';
import metro4 from '../assets/metro_4.png';
import metro5 from '../assets/metro_5.png';
import metro6 from '../assets/metro_6.png';

import maxi1 from '../assets/maxi_1.mp4';
import maxi2 from '../assets/maxi_2.png';
import maxi3 from '../assets/maxi_3.png';
import maxi4 from '../assets/maxi_4.png';
import maxi5 from '../assets/maxi_5.png';
import maxi6 from '../assets/maxi_6.png';
import maxi7 from '../assets/maxi_7.png';
import maxi8 from '../assets/maxi_8.png';

import fg1 from '../assets/fg1.png';
import fg2 from '../assets/fg2.png';
import fg3 from '../assets/fg3.png';

import rad1 from '../assets/radenta1.png';
import rad2 from '../assets/radenta2.png';
import rad3 from '../assets/radenta3.png';
import rad4 from '../assets/radenta4.png';
import rad5 from '../assets/radenta5.png';
import rad6 from '../assets/radenta6.png';

import up1 from '../assets/up1.mp4';
import up2 from '../assets/up2.png';
import up3 from '../assets/up3.png';
import up4 from '../assets/up4.png';
import up5 from '../assets/up5.png';
import up6 from '../assets/up6.png';

import ate1 from '../assets/ate1.png';
import ate2 from '../assets/ate2.png';

import doj1 from '../assets/doj1.png';
import doj2 from '../assets/doj2.png';
import doj3 from '../assets/doj3.png';
import doj4 from '../assets/doj4.png';
import doj5 from '../assets/doj5.png';
import doj6 from '../assets/doj6.png';

import mayb1 from '../assets/maybelline_1.mp4';
import mayb2 from '../assets/maybelline_2.jpg';

//Add here

const workItems = [
  {
    title: 'Multimedia & Motion Graphic Design',
    logo: freeLogo,
    media: [mayb1,mayb2],
    description: 'Motion Graphics work for assorted clients',
  },
  {
    title: 'Banco De Oro Philippines',
    logo: bdoLogo,
    media: [bdoVideo1,bdoPic1,bdoPic2,bdoPic3,bdoPic4],
    description: 'Storyboard work for BDO',
  },
  {
    title: 'Maxicare',
    logo: maxicareLogo,
    media: [maxi1, maxi2, maxi3, maxi4, maxi5, maxi6, maxi7, maxi8],
    description: 'Storyboard work for the Maxicare',
  },
  {
    title: 'Metrobank',
    logo: metrobankLogo,
    media: [metro1, metro2, metro3, metro4, metro5, metro6],
    description: 'Storyboard work for the Metrobank',
  },
  {
    title: 'University of the Philippines',
    logo: upLogo,
    media: [up1, up2, up3, up4, up5, up6],
    description: 'Storyboard work for the University of the Philippines',
  },
  {
    title: 'Department of Foreign Affairs',
    logo: dfaLogo,
    media: [dfaStoryboard1, dfaStoryboard2, dfaStoryboard3, dfaIllustration1, dfaIllustration2],
    description: 'Storyboard, Illustration, and Graphic Design work for Philippine Department of Foreign Affairs',
  },
  {
    title: 'Department of Justice',
    logo: dojLogo,
    media: [doj1, doj2, doj3, doj4, doj5, doj6],
    description: 'Storyboard work for the Deparment of Justic Philippines',
  },
  {
    title: 'First Gen Corporation',
    logo: firstgenLogo,
    media: [fg1, fg2, fg3],
    description: 'Storyboard work for the First Gen Corporation',
  },
  {
    title: 'Radenta Technologies Inc.',
    logo: radentaLogo,
    media: [rad1, rad2, rad3, rad4, rad5, rad6],
    description: 'Storyboard work for the Radenta Technologies Inc.',
  },
  {
    title: 'Ateneo de Manila University',
    logo: ateneoLogo,
    media: [ate1, ate2],
    description: 'Storyboard work for the Ateneo de Manila University',
  },
  {
    title: 'Bank of the Philippine Islands',
    logo: bpiLogo,
    media: [bpiPic1, bpiPic2, bpiPic3],
    description: 'Storyboard work for the Bank of the Philippine Islands',
  },
];

function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(null);
  const [currentMediaList, setCurrentMediaList] = useState([]);
  const [currentPage, setCurrentPage] = useState({}); // Track the current page for each company

  const itemsPerPage = 5; // Limit to 5 items per page

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

  const handleNextPage = (companyIndex) => {
    setCurrentPage((prev) => ({
      ...prev,
      [companyIndex]: (prev[companyIndex] || 0) + 1,
    }));
  };

  const handlePreviousPage = (companyIndex) => {
    setCurrentPage((prev) => ({
      ...prev,
      [companyIndex]: Math.max((prev[companyIndex] || 0) - 1, 0),
    }));
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

      {/* Logo Row */}
      <div className="work-logos-wrapper">
        <div className="work-logos">
          {workItems.map((item, index) => (
            <div key={index} className="work-logo-box">
              <img src={item.logo} alt={`${item.title} logo`} />
            </div>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {workItems.map((item, companyIndex) => {
          const currentPageIndex = currentPage[companyIndex] || 0;
          const startIndex = currentPageIndex * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const paginatedMedia = item.media.slice(startIndex, endIndex);

          return (
            <div key={companyIndex} className="work-company">
              {/* Company Header */}
              <div className="work-company-header">
                <img src={item.logo} alt={`${item.title} logo`} className="work-company-logo" />
                <h3 className="work-company-title">{item.title}</h3>
              </div>

              {/* Media Grid */}
              <div className="work-media-grid">
                {paginatedMedia.map((mediaSrc, i) =>
                  mediaSrc.endsWith('.mp4') ? (
                    <div key={i} className="work-media-item" onClick={() => openModal(item.media, startIndex + i)}>
                      <video className="work-media-video" muted autoPlay loop>
                        <source src={mediaSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div key={i} className="work-media-item" onClick={() => openModal(item.media, startIndex + i)}>
                      <img src={mediaSrc} alt={`${item.title} ${startIndex + i + 1}`} className="work-media-image" />
                    </div>
                  )
                )}
              </div>

              {/* Pagination Controls */}
              {item.media.length > itemsPerPage && (
                <div className="pagination-controls">
                  <button
                    className="pagination-button"
                    onClick={() => handlePreviousPage(companyIndex)}
                    disabled={currentPageIndex === 0}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="pagination-button"
                    onClick={() => handleNextPage(companyIndex)}
                    disabled={endIndex >= item.media.length}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            {currentMediaList[currentMediaIndex]?.endsWith('.mp4') ? (
              <video className="modal-media" controls autoPlay muted loop>
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

      {/* Contact Me Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">
          <span className="section-title-line" />
          <span>CONTACT</span>
          <span className="section-title-highlight"> ME</span>
          <span className="section-title-line" />
        </h2>

        <div className="contact-content">
          <p className="contact-text">Feel free to reach out to me via email:</p>
          <div className="contact-email-wrapper">
            <span className="contact-email">robingonzales.rg69@gmail.com</span>
            <button
              className="copy-button"
              onClick={() => navigator.clipboard.writeText("robingonzales.rg69@gmail.com")}
            >
              Copy
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Work;

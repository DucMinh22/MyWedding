import React from 'react'
import gallery1 from '../assets/images/anh-cuoi1.jpg'
import gallery2 from '../assets/images/anh-cuoi2.jpg'
import gallery3 from '../assets/images/anh-cuoi3.jpg'
import gallery4 from '../assets/images/anh-cuoi4.jpg'
import gallery5 from '../assets/images/anh-cuoi5.jpg'
import gallery6 from '../assets/images/anh-cuoi6.jpg'
import gallery7 from '../assets/images/anh-cuoi7.jpg'
import gallery8 from '../assets/images/anh-cuoi8.jpg'
import gallery9 from '../assets/images/anh-cuoi9.jpg'
import gallery10 from '../assets/images/anh-cuoi10.jpg'
import gallery11 from '../assets/images/anh-cuoi11.jpg'
import gallery12 from '../assets/images/anh-cuoi12.jpg'
import gallery13 from '../assets/images/anh-cuoi13.jpg'
import gallery14 from '../assets/images/anh-cuoi14.jpg'
import gallery15 from '../assets/images/anh-cuoi15.jpg'
import gallery16 from '../assets/images/anh-cuoi16.jpg'
import gallery17 from '../assets/images/anh-cuoi17.jpg'
import gallery18 from '../assets/images/anh-cuoi18.jpg'
import gallery19 from '../assets/images/anh-cuoi19.jpg'

function Gallery () {
  const album= [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19]
  return (
    <div id='gallery' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Gallery</span>
            <h2 className='oliven-title'>Khoảnh khắc của chúng mình</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
          {album.map((img, index) => (
              <div className='col-md-4 gallery-item ceremony' key={index}>
              <a href='/' className='img-zoom'>
                <div className='gallery-box'>
                  <div className='gallery-img'>
                    {' '}
                    <img
                      src={img}
                      className='img-fluid mx-auto d-block'
                      alt=''
                    />{' '}
                  </div>
                  <div className='gallery-detail'>
                    <h4 className='mb-0'>Wedding Ceremony</h4>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery

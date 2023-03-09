import React from 'react'
import gallery1 from '../assets/images/anh-cuoi1.jpg'
import gallery3 from '../assets/images/anh-cuoi3.jpg'
import gallery4 from '../assets/images/anh-cuoi4.jpg'
import gallery6 from '../assets/images/anh-cuoi6.jpg'
import gallery10 from '../assets/images/anh-cuoi10.jpg'
import gallery15 from '../assets/images/anh-cuoi15.jpg'
import gallery16 from '../assets/images/anh-cuoi16.jpg'
import gallery20 from '../assets/images/anh-cuoi20.jpeg'
import gallery21 from '../assets/images/anh-cuoi21.JPG'
import gallery22 from '../assets/images/anh-cuoi22.JPG'

function Gallery () {
  const album= [gallery1, gallery3, gallery4, gallery6, gallery10, gallery15, gallery16, gallery20, gallery21, gallery22 ]
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

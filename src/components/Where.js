import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Tiệc cưới (Nhà Gái)</h5>
              <p>
                <i className='ti-location-pin'></i> Số nhà 270 - Lý Thường Kiệt - Thị Cầu - TP.Bắc Ninh
              </p>
              <p>
                <i className='ti-time'></i> <span>12:00am – 13:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Tiệc cưới (Nhà Trai)</h5>
              <p>
                <i className='ti-location-pin'></i> Đối diện cổng trường lái xe Hùng Vương - Khu An Ninh Hạ - TX.Phú thọ - Phú Thọ
              </p>
              <p>
                <i className='ti-time'></i> <span>14:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>LỄ THÀNH HÔN</h5>
              <p>
                <i className='ti-direction-alt'></i> Tại Nhà Trai - Khu An Ninh Hạ - TX.Phú thọ - Phú Thọ
              </p>
              <p>
                <i className='ti-direction'></i> The William Vale (7 min)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where

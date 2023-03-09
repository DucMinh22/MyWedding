import React from 'react'
import where1 from '../assets/images/anh-cuoi7.jpg'
import where2 from '../assets/images/anh-cuoi4.jpg'
import where3 from '../assets/images/le-thanh-hon.JPG'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            {/* <span className='oliven-title-meta'>Questions</span> */}
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
              <p  style={{textAlign: 'center'}}>
                <i className='ti-time'></i> <h3>Thời gian: 16h00'</h3>
                <h3>THỨ BẢY 01.04.2023</h3>
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
              <p  style={{textAlign: 'center'}}>
                <i className='ti-time'></i> <h3>Thời gian: 11h00'</h3>
                <h3>THỨ BẢY 02.04.2023</h3>
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
              <p  style={{textAlign: 'center'}}>
                <i className='ti-time'></i> <h3>Thời gian: 11h00'</h3>
                <h3>THỨ BẢY 02.04.2023</h3>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where

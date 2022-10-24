import React from 'react'
import NavNavigate from '../../Components/NavNavigate'
import "./Guide.css"
import HotList from '../../Components/HotList'

const Guide = () => {
  return (
    <div  className='MainGuide'>
      <div className='NavNavigate'><NavNavigate title={"Hướng dẫn mua hàng"} link={"/guide"}/></div>
      <div className='contener'> 
        <div className='left'>
        <h1>Hướng dẫn mua hàng</h1>
          <p>Về cơ bản, việc đặt hàng trên Trang Web bao gồm các bước sau:</p>
          <p>Bước 1: Truy câp vào Trang Web tại địa chỉ ...</p>
          <p>Bước 2 : Xem lựa chỏn sản phẩm đưa vào giỏ hàng .</p>
          <p>Bước 3 : Tiến hành đặt hàng và chọn hình thức thanh toán.</p>
          <p>Bước 4 : Cung cấp đầy đủ thông tin địa chỉ nhận hàng .</p>
          <p>Bước 5 : Nếu trọn thanh toán bằng hình thức banking vui lòng xác nhận Email của shop.</p>

          <h2>- Giá cả và từ chối đơn hàng</h2>
          <p>- Chúng tôi luôn nõ lųyc đé cung câp cho Khách Hàng hinh ånh thât của Sån Phâm/Hàng Hóa và chì cung câp Sån
              Phám/Hàng Hóa chinh häng cho tât cà các Khách Hàng vói chát luong và giá cà hop lý nhât.
              Tai thoi diém hoàn tát việc đặt hàng, Quý Khách së duoc thông báo trên màn hinh máy tinh vê tât cà chi phí mà Khách
              Hàng phäi thanh toán (bao gôm giá bán sån phám, thuể VAT, phí đóng gói và giao hàng vàl hoặc các phí khác, néu có).
          </p>

          <br /><br />

          <p>
            Tai Trang Web, phân giá màu xám là muc giá bán của Sån Phám/Hång Hóa do nhà cung cap/ nhà phân phôi khuyên
            nghi. Phân giá có màu đo là giá bán của Sån Phám/Hàng Hóa trên Trang Web.
          </p>
          <br /><br />

          <p>
            Chúng toi luôn có gång đé dàm bào tinh chinh xác của việc hiến thị giá Sån Phâm/Hàng Hóa trên Trang Web. Tuy
            nhiên, trong một sô truòng hop có sai sót trong việc hiên thị giá trên web, tùy theo tùrng truòng hop chúng tôi së liên hệ
            lai vói Khách Hàng đé xác nhận lại giá tri Đon Hàng nhu là một phân của thù tục châp nhận Đon Hàng nhăm mục dich
            chãc chán rång Khách Hàng ván muón mua Sån Phám/Hàng Hóa đă chọn vói múc giá duoc diều chinh dúng.
          </p>

          <br /><br />

          <p>
            Chúng tôi cüng có quyên từ chôi hoặc hůy bò bât ký đon hàng nào dù don hàng đó đä hay chua duoc xác nhận hoãc
            dã duoc thanh toán vi lý do Bât Khà Kháng, Sån Phâm/Hàng Hóa mà Khách Hàng dã chon hêt hàng ngoài su kiêm
            soát cua chúng tôi, lői nhâp sai thông tin liên hệ Hotline : 0962673018
          </p>
        </div>
        <div className='right'>
          <HotList />
        </div>
      </div>
    </div>
  )
}

export default Guide
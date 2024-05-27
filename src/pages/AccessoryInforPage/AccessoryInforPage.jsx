import React from "react";
import Header from "../../layouts/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../layouts/Footer/Footer";
import './AccessoryInforPage.css'
import anhqc1 from "/assets/images/AccessoryInfor/anhqc1.jpg";
import bracelet from "/assets/images/AccessoryInfor/bracelet.jpg";
import earring from "/assets/images/AccessoryInfor/earring.jpg";
import necklace from "/assets/images/AccessoryInfor/necklace.jpg";
const AccessoryInforImage = () => (
    <div className="AccessoryInforImage">

    </div>
);


export default function AccessoryInfor() {
    return (
        <div>
            <Header />
            <Container className="accessory-infor-container">
                <AccessoryInforImage pic5={anhqc1} pic6={bracelet} pic7={earring} pic8={necklace} />

                <div>
                    <div className="accessory-infor">
                        <h1>KIẾN THỨC TRANG SỨC</h1>
                        <p>
                            Trang sức là loại sản phẩm đặc biệt, nó có giá trị không chỉ ở mức độ quý hiếm mà còn góp phần tôn thêm vẻ đẹp của bạn. Tuy nhiên, không phải loại trang sức nào cũng phù hợp với bạn. Trang sức cao cấp 5Diamond sẽ chia sẻ với bạn cách lựa chọn trang sức khiến bạn trở nên hấp dẫn và tỏa sáng nhất.
                        </p>
                    </div>


                    <div className="accessory-infor">
                        <div>
                            <img src={anhqc1} alt="nhan" className="accessory-infor-img" />
                        </div>
                        <h2>Nhẫn:</h2>
                        <p>
                            Khi chọn nhẫn, quan trọng nhất là phải xem xét chiều dài và kích cỡ của ngón tay. Cân nhắc mẫu nhẫn phù hợp với hình dáng ngón tay để có sự thoải mái và cân đối.
                        </p>
                        <p><strong>Về kiểu dáng:</strong></p>
                        <p>
                            Bạn cần xem xét trước hình dáng và kiểu thiết kế của chiếc nhẫn sao cho thoải mái nhất khi đeo hàng ngày. Kiểu nhẫn tròn trơn cổ điển được coi là một lựa chọn tối ưu. Tuy nhiên, nếu kiểu đó đối với bạn hơi đơn giản, bạn có thể chọn kiểu gắn hạt đá hay khắc các họa tiết trên nhẫn.
                        </p>
                        <p><strong>Về chất liệu:</strong></p>
                        <p>
                            Vàng thường được chọn cho nhẫn cưới truyền thống với ý nghĩa biểu trưng của tình yêu và sự ấm áp. Ngày nay, giới trẻ thích bạch kim vì độ cứng gần như nguyên chất, mặc dù giá cao hơn vàng.
                        </p>
                        <p><strong>Về các loại đá quý gắn trên sản phẩm:</strong></p>
                        <p>
                            Khi chọn đá quý cho nhẫn cưới, hãy nhớ rằng nó sẽ ở bên bạn suốt cuộc đời. Tại Wedding Land, chúng tôi chỉ sử dụng các đá có độ cứng cao như kim cương, hồng ngọc và lam ngọc, đảm bảo độ bền và chịu mài mòn theo thời gian.
                        </p>
                    </div>


                    <div className="accessory-infor">
                        <div>
                            <img src={necklace} alt="necklace" className="accessory-infor-img" />
                        </div>
                        <h2>Vòng cổ:</h2>
                        <p>
                            Chọn vòng cổ vừa hoặc ôm sát cho cổ gầy, vòng vừa phải hoặc dài cho cổ ngắn. Bạn gái mập nên chọn vòng thanh mảnh và màu sắc trầm. Thân hình cân đối và cổ cao có thể chọn mọi kiểu trang sức. Sợi dây chuyền vừa dài và dầy kết hợp với mặt dây buông hờ trên cổ tạo điểm nhấn.
                        </p>
                    </div>

                    <div className="accessory-infor">
                        <div>
                            <img src={bracelet} alt="bracelet" className="accessory-infor-img" />
                        </div>
                        <h2>Lắc tay:</h2>

                        <p>
                            Khi chọn lắc tay, quan trọng là xem xét bản mặt và đường kính của nó để tránh tình trạng rơi tuột hoặc mất cân đối. Lắc tay không nên quá rộng để tránh việc bị rơi khi hoạt động. Nếu cổ tay nhỏ, nên chọn lắc tay nhỏ hơn để duy trì sự cân đối. Thử vào tay trái để giảm thiểu va đập và trầy xước, và tránh chọn kiểu có ổ chấu cao để tránh vướng khi làm việc.
                        </p>

                    </div>

                    <div className="accessory-infor">
                        <div>
                            <img src={earring} alt="earring" className="accessory-infor-img" />
                        </div>
                        <h2>Bông tai:</h2>
                        <p><strong>Đối với khuôn mặt tròn:</strong></p>
                        <p>
                            Chọn hoa tai dài và có đường cong góc cạnh để làm thon dài khuôn mặt, tránh hoa tai nhỏ và ngắn để tránh làm mặt tròn và ngắn hơn.
                        </p>
                        <p><strong>Đối với khuôn mặt trái xoan:</strong></p>
                        <p>
                            Khuôn mặt này phù hợp với hầu hết các kiểu hoa tai, từ mềm mại như hình bầu dục đến lạ mắt như hình xoắn ốc. Ngọc trai, kim cương, và đá quý đều thích hợp, đặc biệt là với kiểu tóc ngắn. Tránh hoa tai quá dài và nhỏ để tránh làm khuôn mặt trở nên quá dài.
                        </p>
                        <p><strong>Đối với khuôn mặt vuông:</strong></p>
                        <p>
                            Một đôi hoa tai hình tròn hoặc có góc cạnh sẽ là lựa chọn tốt nhất bởi các kiểu hoa tai này sẽ giúp khuôn mặt mềm mại hơn.
                        </p>
                        <p><strong>Đối với khuôn mặt dài và gầy:</strong></p>
                        <p>
                            Nên đeo kiểu hoa tai hình đèn chùm có kiểu dáng đơn giản. Kiểu hoa tai ba góc cạnh sẽ làm khuôn mặt bạn đầy đặn hơn. Để làm khuôn mặt to ra bạn nên đeo hoa tai hình tròn, hình tam giác hoặc hình vuông. Tránh đôi hoa tai hình bẹt hoặc dài lủng lẳng.
                        </p>
                        <p><strong>Đối với khuôn mặt hình kim cương:</strong></p>
                        <p>
                            Nên đeo hoa tai có kiểu ngắn và to bản. Một đôi hoa tai kết hợp giữa các đường cong uốn lượn và các đường thẳng cũng rất phù hợp. Bên cạnh đó, bạn cũng nên đeo đôi hoa tai nhỏ nhắn. Tuyệt đối tránh một đôi hoa tai dài và mỏng manh.
                        </p>
                        <p><strong>Đối với khuôn mặt hình tam giác:</strong></p>
                        <p>
                            Đôi hoa tai hình ô van to, hay có hình tròn nhỏ sẽ giúp làm mềm mại các góc cạnh ở khuôn mặt bạn. Tránh những đôi hoa tai có kiểu thẳng từ trên xuống dưới.
                        </p>
                    </div>

                    <h6>
                        Trang sức cao cấp 5Diamond hy vọng với những chia sẻ kinh nghiệm như trên bạn sẽ tự tin lựa chọn những sản phẩm trang sức phù hợp với bạn nhất. Ngoài ra, khi lựa chọn trang sức bạn cũng nên chú ý về hoàn cảnh: Khi đi chơi với bạn bè, người thân bạn nên chọn những kiểu không quá cầu kỳ, rườm rà mà đơn giản, trẻ trung và màu sắc. Khi dự tiệc sang trọng bạn nên chọn trang sức có độ sáng, lấp lánh.
                    </h6>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

import { Container } from "react-bootstrap";
import "./WarrantyPolicyPage.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyBreadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { routes } from "../../routes";

export default function WarrantyPolicyPage() {
  return (
    <div>
      <Header />
      <Container className="warranty-infor-container">
        <MyBreadcrumb
          title1="KIẾN THỨC"
          link1={routes.blog}
          isChoice1={true}
          title2="CHÍNH SÁCH BẢO HÀNH"
          link2={routes.warrantyPolicy}
          title3="THÔNG TIN KHUYẾN MÃI"
          link3={routes.sale}
        ></MyBreadcrumb>
        <div>
          <TableContainer component={Paper} className="table-container">
            <Table aria-label="warranty policy table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} className="table-head-cell">
                    <h1>CHÍNH SÁCH BẢO HÀNH</h1>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    className="vertical-line"
                    style={{ textAlign: "center" }}
                  >
                    CHỦNG LOẠI
                  </TableCell>
                  <TableCell
                    className="vertical-line"
                    style={{ textAlign: "center" }}
                  >
                    CHI TIẾT
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>LƯU Ý</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="vertical-line">1. Nhẫn cưới</TableCell>
                  <TableCell className="vertical-line">
                    <ul className="list">
                      <li>
                        Đảm bảo về chất lượng tuổi vàng ghi trên Hóa đơn bán
                        hàng kiêm Giấy đảm bảo.
                      </li>
                      <li>
                        Miễn phí siêu âm, đánh bóng, xi tron đối sản phẩm.
                      </li>
                      <li>Miễn phí khắc tên, hoa tiết trên sản phẩm.</li>
                      <li>
                        Miễn phí điều chỉnh size nhẫn. Khách hàng trả phí trong
                        trường hợp sản phẩm bảo trì thêm vàng, tiền công gia
                        công. Tiền gia công tính theo giá tại thời điểm thanh
                        toán.
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list">
                      <li>
                        Không áp dụng bảo hành cho các sản phẩm bị đứt gãy; bị
                        biến dạng hoặc hư hỏng nặng.
                      </li>
                      <li>
                        Không thực hiện dịch vụ sửa chữa, xi mạ đối với sản phẩm
                        bạc.
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="vertical-line">
                    2. Trang sức khác (Trang sức Kim cương, Trang sức Ổ, Trang
                    sức trơn hạng, Trang sức Đá màu & Ngọc trai, Trang sức trẻ
                    em, Trang sức mạ Vàng mỹ Hàn Quốc)
                  </TableCell>
                  <TableCell className="vertical-line">
                    <ul className="list">
                      <li>
                        Đảm bảo về chất lượng tuổi vàng ghi trên Hóa đơn bán
                        hàng kiêm Giấy đảm bảo.
                      </li>
                      <li>
                        Tận trang, đánh bóng làm mới sản phẩm miễn phí, miễn phí
                        làm mới xi mạ lại. Áp dụng đổi trả sản phẩm khi có lỗi
                        nhà sản xuất theo giá Công ty tại thời điểm đổi trả sản
                        phẩm.
                      </li>
                      <li>
                        Miễn phí điều chỉnh và sửa size, khắc chữ, đá vào viên.
                      </li>
                      <li>
                        Trường hợp khách hàng chỉ mua ổ (không viên) và đem viên
                        hoặc ổ từ ngoài vào, miễn phí lắp đá, vào viên cho
                        khách.
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list">
                      <li>
                        Chính sách đổi trả không áp dụng cho chương trình giảm
                        giá cuối mùa, hàng bán rẻ hoặc sản phẩm thanh lý.
                      </li>
                      <li>
                        Các mặt hàng trang sức làm theo yêu cầu hoặc tùy chỉnh
                        theo kích thước hoặc thiết kế cụ thể cũng không được đổi
                        trả, trừ khi có lỗi kỹ thuật.
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography
                      variant="subtitle1"
                      className="typography-subtitle"
                    >
                      II. Trang sức vàng 24k
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} className="combined-cell">
                    <ul className="list">
                      <li>
                        Đảm bảo về chất lượng tuổi vàng: Tất cả các sản phẩm của
                        Công ty bán ra được đảm bảo về chất lượng tuổi vàng ghi
                        trên Hóa đơn bán hàng kiêm Giấy đảm bảo.
                      </li>
                      <li>
                        Tất trang làm sáng sản phẩm bằng máy miễn phí lần đầu.
                      </li>
                      <li>
                        Bảo hành miễn phí, sửa chữa sản phẩm bị lỗi kỹ thuật sản
                        xuất.
                      </li>
                      <li>
                        Lưu ý cách bảo quản trang sức vàng 24k: Nên bảo quản các
                        sản phẩm trang sức trong ngăn hộp riêng biệt, tránh va
                        chạm làm nhau gây trầy xước.
                        <br />
                        Tránh để trang sức tiếp xúc với các hóa chất có tính
                        chất tẩy mạnh, có thể dẫn đến ngà màu.
                        <br />
                        Để trang sức luôn sáng đẹp, dùng khăn cotton để lau nhẹ
                        bề mặt trang sức. Tuyệt đối không sử dụng những vật bằng
                        kim loại cứng hoặc có sắc nhọn.
                      </li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list">
                      <li>
                        Không bảo hành phần đã gắn trên sản phẩm (nếu có).
                      </li>
                      <li>
                        Sản phẩm có chất làm đáy bằng chất liệu khác bên trong
                        Công ty không bảo hành.
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={3}>
                    <Typography
                      variant="subtitle1"
                      className="typography-subtitle"
                    >
                      ĐIỀU KIỆN KHÁC
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>
                    <ul className="list">
                      <h5>1. Điều kiện áp dụng theo quy chế:</h5>
                      <li>
                        Chỉ áp dụng mua lại và đổi hàng với các lý do trên trong
                        hợp sản phẩm còn nguyên vẹn, khách hàng cung cấp được
                        thông tin hóa đơn của sản phẩm, có đầy đủ kiểm định kèm
                        theo (trường hợp một số sản phẩm kim cương viên và sản
                        phẩm chứng thư kiểm định kỹ thuật số).
                      </li>
                      <li>
                        {" "}
                        FIVE DIAMOND có quyền từ chối mua lại hoặc mua lại theo
                        giá thỏa thuận đối với các trường hợp sau:
                      </li>
                      <ul>
                        <li>
                          Sản phẩm không còn nguyên vẹn (sản phẩm bị nứt, gãy,
                          hư hỏng,…); đá chủ hoặc kim cương viên bị trầy xước,
                          nứt, mẻ,…
                        </li>
                        <li>
                          Sản phẩm mất kiểm định hoặc kiểm định bị rách, hỏng.
                        </li>
                        <li>
                          Sản phẩm bị mất hóa đơn/khách hàng cung cấp được thông
                          tin hóa đơn của sản phẩm/ FIVE DIAMOND không tìm được
                          thông tin bán ra của sản phẩm/khách hàng không xác
                          minh được sản phẩm do FIVE DIAMOND bán ra (trường hợp
                          sản phẩm không có dấu FIVE DIAMOND/không phải sản phẩm
                          của FIVE DIAMOND).
                        </li>
                      </ul>
                      <li>
                        Đối với trường hợp đổi hàng, giá trị sản phẩm đổi phải
                        có giá trị cao hơn với sản phẩm cũ.
                      </li>
                      <li>
                        Chính sách thu đỗi không giới hạn về số lượng, khách
                        hàng có thể đổi 1 sản phẩm lấy nhiều sản phẩm hoặc ngược
                        lại, nhưng phải đảm bảo điều kiện về tổng giá trị các
                        sản phẩm đổi cao hơn sản phẩm cũ.
                      </li>
                      <li>
                        Có thể đổi trang sức vàng tây sang kim cương viên và
                        ngược lại, nhưng phải đảm bảo giá trị sản phẩm đổi cao
                        hơn sản phẩm cũ.
                      </li>
                      <li>
                        Quy chế trên chỉ áp dụng khi đỗi trang sức vàng tây và
                        kim cương viên, không áp dụng đỗi chéo sang các nhóm sản
                        phẩm khác như: vàng miếng, vàng nhẵn, trang sức vàng ta,
                        quà tặng Kim Bảo Phúc, Đồng hồ
                      </li>
                      <h5>
                        2. Chính sách đổi không mắt phi trong vòng 48h kể từ khi
                        mua hàng:
                      </h5>
                      <li>
                        Không áp dụng đối với hàng thiết kế theo nhu cầu riêng,
                        sản phẩm nhẫn có size đặt lại ngoài khung chuẩn (Nữ nhỏ
                        hơn 6 và lớn hơn 16, nam nhỏ hơn 14 và lớn hơn 25),
                        trang sức Platinum các loại, các sản phẩm đã chỉnh sửa
                        mẫu mã hoặc size so với ban đầu.
                      </li>
                      <li>
                        Quý khách vui lòng giữ sản phẩm nguyên vẹn, chưa qua sử
                        dụng, bao bì, giấy tờ chứng từ liên quan đinh kèm còn
                        đầy đủ, thông tin hóa đơn điện tử đầy đủ.
                      </li>
                      <li>
                        Trang sức vàng tây và kim cương viên đỗi trong 48 giờ
                        phải còn nguyên vẹn, không phân biệt cùng hay khác nhóm
                        hàng, tuy nhiên không được đổi sang vàng miếng - vàng
                        nhẫn, đồng hồ, quà tặng Kim Bảo Phúc, trang sức vàng ta.
                      </li>
                      <li>
                        Đối với khách hàng mua trang sức ỗ và đã vào viên, khách
                        hàng sẽ chi trả thêm chi phí tháo viên và sửa ổ châu
                        (tùy theo từng trường hợp cụ thể)
                      </li>
                      <h5>3. Một số điều khoản khác:</h5>
                      <li>
                        Quy chế này bắt đầu áp dụng đối với mặt hàng trang sức
                        vàng tây & Kim cương viên mua từ thời điểm từ ngày
                        24/08/2023 trở đi.
                      </li>
                      <li>
                        Đối với hàng trang sức vàng tây & kim cương viên mua từ
                        trước thời điểm ngày 24/08/2023 sẽ được áp dụng theo quy
                        chế ban hành tại thời điểm mua hàng.
                      </li>
                      <li>
                        FIVE DIAMOND chỉ thực hiện kiểm tra, cung cấp bản sao
                        hóa đơn thu mua lại hàng hóa cho khách hàng chính chủ.
                      </li>
                      <li>
                        Trường hợp không phải chính chủ phải có ủy quyển hoặc
                        xác nhận của chính chủ hoặc người bán cam kết sản phẩm
                        bán lại cho FIVE DIAMOND hợp pháp và chịu trách nhiệm
                        trong trường hợp có phát sinh tranh chấp. FIVE DIAMOND
                        không có nghĩa vụ liên quan khi phát sinh tranh chấp.
                      </li>
                      <li>
                        Quý khách vui lòng cung cấp giấy tờ tùy thân có ảnh khi
                        yêu cầu FIVE DIAMOND hỗ trợ tìm kiếm và cung cấp bản sao
                        hóa đơn.
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

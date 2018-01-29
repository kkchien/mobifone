import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class TestDataService implements InMemoryDbService {

  createDb() {

    let faqs = [
      {
        id: 1,
        title: 'HÌNH PHẠT ĐỐI VỚI SỰ MẤT MÁT HOẶC HƯ HỎNG CỦA THIẾT BỊ WIFI HOẶC BẤT KỲ PHỤ KIỆN NÀO CỦA NÓ LÀ GÌ ?',
        // tslint:disable-next-line:max-line-length
        content: 'Nếu thiết bị Mobifone hoặc bất kỳ phụ kiện nào của nó bị mất, chúng tôi sẽ coi nó như bạn đã mua sản phẩm. Bạn sẽ phải trả chi phí (hoặc giá bán) bằng đô la Mỹ hoặc bằng Đồng Việt Nam tương đương với giá trị bằng đô la Mỹ của mặt hàng bị mất hoặc bị hư hỏng. Bảng giá các hạng mục như sau: Số tiền Đền bù (VNĐ) Pocket WiFi: 1.380.000 VNĐ Hộp đựng: 230.000 VNĐ Cáp sạc: 115.000 VNĐ Cục sạc: 115.000 VNĐ SIM: 460.000 VNĐ Tuy nhiên, nếu bạn chọn thanh toán phí bảo vệ phần cứng là 46.000 VNĐ / ngày vào thời điểm bạn đặt hàng dịch vụ, bạn sẽ được giảm 78% phí phạt đối với hàng bị mất / hư hỏng.'
      },
      {
        id: 2,
        title: 'LÀM THẾ NÀO TÔI CÓ THỂ TRẢ LẠI THIẾT BỊ VÀ ĐƯỢC HOÀN PHÍ TIỀN CỌC CỦA TÔI ?',
        // tslint:disable-next-line:max-line-length
        content: 'Bạn có thể trả lại thiết bị Mobifone tại quầy bán lẻ Sóng Việt và nhân viên bán hàng sau khi xử lý sẽ hoàn lại tiền cọc của bạn, bạn sẽ nhận được khoản hoàn lại tiền cọc là 100 đô la Mỹ. Bạn sẽ được hoàn tiền bằng phương thức thanh toán mà bạn đã thực hiện khi mua dịch vụ. Điều đó có nghĩa là bạn cần phải đưa ra thẻ tín dụng của mình đã sử dụng để thanh toán để xác minh lấy tiền đặt cọc của bạn. * Địa điểm: Cửa hàng số 3, Ga đến, Sân bay Quốc tế Tân Sơn Nhất Một cách khác mà bạn có thể trả lại thiết bị của mình là gửi thiết bị tại quầy tiếp tân của khách sạn. Phong bì có sẵn tại khách sạn của bạn. Khách sạn của bạn sẽ giao thiết bị qua bưu kiện cho chúng tôi. Khi chúng tôi nhận được thiết bị và xử lý hoàn tất, bạn sẽ được hoàn lại tiền vào thẻ tín dụng.'
      },
      {
        id: 3,
        title: 'THIẾT BỊ WI-FI 4G CỦA BẠN CÓ TƯƠNG THÍCH VỚI IPOD HOẶC SAMSUNG S2 CỦA TÔI KHÔNG ?',
        // tslint:disable-next-line:max-line-length
        content: 'Điện thoại 4G không bắt buộc phải kết nối với túi Wi-Fi của chúng tôi. Tất cả bạn cần là một thiết bị có tính năng Wi-Fi. Kết nối 4G chỉ có nghĩa là dữ liệu sẽ được truyền ở tốc độ nhanh hơn, cho phép bạn lướt web nhanh hơn nhiều. Yêu cầu duy nhất là thiết bị của bạn có thể kết nối với Wi-Fi.'
      },
      {
        id: 4,
        title: 'PHẠM VI HOẠT ĐỘNG CỦA MẠNG ?',
        content: 'Miễn là bạn giữ thiết bị Wi-Fi bỏ túi trong phạm vi 5 mét, bạn sẽ không gặp sự cố khi kết nối'
      },
      {
        id: 5,
        title: 'TỐC ĐỘ KẾT NỐI NHANH NHƯ THẾ NÀO ?',
        content: 'Thiết bị bỏ túi Mobifone của chúng tôi sử dụng công nghệ 4G cho phép bạn đạt được tốc độ tải xuống tới 70Mbps và tốc độ tải lên đến 30Mbps. Thông thường, kết nối Wi-Fi sẽ chỉ cung cấp cho bạn tốc độ lên đến 25Mbps, điều đó làm cho tốc độ Wi-Fi của chúng tôi khá nhanh! Xin lưu ý: Tốc độ tải xuống và tải lên sẽ khác nhau tùy thuộc vào vị trí và số người chia sẻ kết nối.'
      },
      {
        id: 6,
        title: 'THỜI GIAN THUÊ TỐI THIỂU LÀ BAO LÂU ?',
        content: 'Thời gian thuê tối thiểu là 2 ngày.'
      },
      {
        id: 7,
        title: 'THỜI LƯỢNG PIN LÀ BAO LÂU ?',
        content: 'Pin được sạc đầy sẽ kéo dài khoảng 8 giờ trong khi đang sử dụng (20 ở chế độ chờ). Thiết bị có thể được sạc qua ổ cắm USB hoặc ổ cắm trên tường (bao gồm cả hai dây cáp).'
      },
      {
        id: 8,
        title: 'TÔI CÓ THỂ THỰC HIỆN CUỘC GỌI VỚI WIFI BỎ TÚI KHÔNG ?',
        content: 'Các wifi bỏ túi không cho phép cuộc gọi thoại thông thường qua mạng di động, tuy nhiên nó cho phép các cuộc gọi VoIP như Skype, Viber, Google, Voice v...v...'
      },
      {
        id: 9,
        title: 'TÔI CÓ THỂ GỬI TIN NHẮN VĂN BẢN / TIN NHẮN ĐA PHƯƠNG TIỆN VỚI WIFI BỎ TÚI KHÔNG ?',
        content: 'Các wifi bỏ túi không cho phép thường xuyên SMS / MMS qua mạng di động, tuy nhiên nó cho phép nhắn tin qua Whatsapp, Skype, Viber, GoogleChat, Line, v..v...'
      },
      {
        id: 10,
        title: 'DUNG LƯỢNG DỮ LIỆU KHI DUYỆT WEB LÀ BAO NHIÊU ?',
        content: 'Một trang web chuẩn có thể tải về từ 200-500KB dữ liệu. Tuy nhiên, các trang web có nhiều nội dung đa phương tiện (hình ảnh hoặc video) như Facebook có thể sử dụng nhiều dữ liệu hơn.'
      },
      {
        id: 11,
        title: 'EMAIL SỬ DỤNG DUNG LƯỢNG BAO NHIÊU ?',
        content: 'Một nguyên tắc chung là 50MB đủ cho 250 email. Tuy nhiên, bất kỳ tệp đính kèm nào cũng có thể ảnh hưởng đến số này. Một email văn bản đơn giản sẽ chỉ là một vài byte.'
      },
      {
        id: 12,
        title: 'ỨNG DỤNG SKYPE SỬ DỤNG BAO NHIÊU DỮ LIỆU ?',
        content: 'Một cuộc gọi thoại đơn giản qua Skype sẽ sử dụng khoảng 4KB / giây, trong khi cuộc gọi video là 650KB / phút. Tuy nhiên, điều này sẽ thay đổi theo phạm vi phủ sóng, như Skype sẽ tự động tăng hoặc giảm chất lượng cuộc gọi và video theo tốc độ internet của bạn. Là một tài liệu tham khảo, một cuộc gọi âm thanh 15 phút có thể sử dụng khoảng 5MB, trong khi một cuộc gọi điện video 15 phút có thể sử dụng khoảng 10MB.'
      },
      {
        id: 13,
        title: 'CHÚNG TÔI CÓ THỂ YÊU CẦU TRÊN ĐIỆN THOẠI KHÔNG ?',
        content: 'Chúng tôi khuyên khách hàng yêu cầu bằng cách điền vào đơn đặt hàng. Nếu bạn có yêu cầu thêm, vui lòng liên hệ với chúng tôi khi thuận tiện.'
      },
      {
        id: 14,
        title: 'TÔI GẶP KHÓ KHĂN KHI SỬ DỤNG THIẾT BỊ, Mobifone CÓ THỂ HỖ TRỢ TÔI KHÔNG ?',
        content: 'Vui lòng gọi cho chúng tôi hoặc gửi một email nhanh nếu bạn gặp rắc rối. Chúng tôi rất hân hạnh được giúp đỡ bạn.'
      },
      {
        id: 15,
        title: 'DO KẾ HOẠCH DU LỊCH CỦA TÔI THAY ĐỔI, TÔI MUỐN SỬ DỤNG THIẾT BỊ THÊM MỘT VÀI NGÀY NỮA. TÔI NÊN LÀM GÌ ?',
        content: 'Bạn có thể gửi thông báo bằng văn bản cho chúng tôi để kéo dài thời gian thuê. Tuy nhiên, nếu bạn không có thời gian để làm như vậy, bạn có thể gọi cho chúng tôi để cho chúng tôi biết bạn muốn thêm ngày thuê.'
      },
      {
        id: 16,
        title: 'CÓ LỆ PHÍ KHI HỦY BỎ DỊCH VỤ KHÔNG ?',
        content: 'Nếu việc huỷ bỏ được thực hiện trước khi hàng được vận chuyển, sẽ không có phí hủy. Tuy nhiên, bạn sẽ phải trả US$ 6 sau khi hàng được giao.'
      },
      {
        id: 17,
        title: 'SSID LÀ GÌ ?',
        content: 'SSID (Service Set Identifier) là tên công khai của một mạng không dây.'
      },
      {
        id: 18,
        title: 'LÀM THẾ NÀO ĐỂ TÔI KẾT NỐI THIẾT BỊ CỦA TÔI VỚI Mobifone ?',
        content: 'Việc kết nối với Mobifone của chúng tôi rất nhanh chóng và đơn giản. Chỉ cần làm theo các bước dưới đây và bạn sẽ online bất cứ lúc nào: - Bật thiết bị Mobifone bằng cách giữ nút nguồn cho đến khi màn hình hiển thị sáng. - Đảm bảo rằng chức năng kết nối Wi-Fi được kích hoạt. Tìm kiếm mạng Wi-Fi có sẵn. Sau đó, bạn chọn mạng SSID của chúng tôi là Mobifone. - Mật khẩu sẽ được hiển thị trên màn hình chính ở 2 định dạng, văn bản và mã QR. - Nhập mật khẩu của Mobifone vào ô mật khẩu. - Hoặc nếu máy của bạn có trình đọc mã QR, bạn có thể quét mã QR được hiển thị trên màn hình của thiết bị Mobifone để nhận mật khẩu. Sau đó bạn sao chép mật khẩu và dán vào ô mật khẩu trong máy của bạn. Bạn có thể lặp lại những bước này cho tối đa 4 thiết bị khác.'
      },
      {
        id: 19,
        title: 'Mobifone HOẠT ĐỘNG VỚI NHỮNG THIẾT BỊ NÀO ?',
        content: 'Mobifone hoạt động với bất kỳ thiết bị hỗ trợ Wi-Fi nào, chẳng hạn như máy tính xách tay (Windows và Mac), điện thoại thông minh (ví dụ: iPhone, Android, Blackberry) hoặc máy tính bảng (ví dụ: iPad, Samsung Galaxy, Kindle). Bạn có thể kết nối tối đa 6 thiết bị cùng một lúc với một túi wifi.'
      },
      {
        id: 20,
        title: 'Mobifone LÀ GÌ ?',
        content: 'Mobifone là một bộ định tuyến Pocket Wifi được thiết kế đặc biệt để cung cấp cho bạn kết nối Internet nhanh và đáng tin cậy mà không phải trả lệ phí chuyển vùng cao. ** Đảm bảo tắt các dữ liệu chuyển vùng của bạn để nó không can thiệp vào tín hiệu của Mobifone.'
      },
      {
        id: 21,
        title: 'BỘ PHÁT WIFI BỎ TÚI LÀ GÌ ?',
        content: 'Internet ngày nay là một bạn đồng hành cần thiết và mọi tiện ích có thể được kích hoạt khi có Wi-Fi. Tuy nhiên, khi bạn đi du lịch trong một nhóm và cần kết nối Wi-Fi khi di chuyển, tốt nhất là nến có được một bộ phát Wi-Fi và tạo một điểm phát sóng để kết nối nhiều thiết bị cùng một lúc. Vậy bộ phát wifi bỏ túi là gì: là một bộ định tuyến Wi-Fi có kích thước nhỏ và dễ dàng cầm trên tay hoặc bỏ túi với khả năng "WiFi hotspot". Bạn có thể kết nối thiết bị này với một nguồn Internet và làm cho nó trở thành điểm phát sóng WiFi, cho phép nhiều thiết bị kết nối internet. Hầu hết các thiết bị WiFi phổ biến có kích thước bằng với điện thoại, điều này làm cho bạn dễ dàng mang theo mọi lúc mọi nơi.'
      }
    ];

    return { faqs };
  }

}

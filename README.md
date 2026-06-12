#EventHub - WebW Đăng ký Sự kiện Khoa Công nghệ Thông tin
1. Thông tin sinh viên
-Họ Tên: Trần Nguyễn Duy
-MSSV: 24210501009
-Lớp: 242101TH001
2. Mô tả dự án
Website giới thiệu danh sách các sự kiện, cuộc thi học thuật và khóa học công nghệ dành cho sinh viên Khoa CNTT. Hệ thống cho phép người dùng xem danh sách, tìm kiếm, lọc theo danh mục/cấp độ, xem chi tiết thông tin qua cửa sổ modal, điền form đăng ký tham gia và quản lý danh sách đã đăng ký. 
3. Công nghệ sử dụng
* HTML5: Xây dựng cấu trúc trang web sử dụng các semantic tags tiêu chuẩn (header, nav, main, section, footer).
* CSS3:Thiết kế giao diện tùy biến nâng cao, tạo khoảng cách hợp lý, xây dựng màu sắc chủ đạo đồng nhất và các hiệu ứng di chuột (hover effects) cho card, button và menu.
* Bootstrap 5 (Core):Sử dụng hệ thống lưới (Bootstrap Grid) để xử lý responsive và ứng dụng các thành phần (components) gồm: Navbar, Card, Modal, Form, Table, Badge, Alert.
* JavaScript thuần (Vanilla JS):Xử lý tương tác DOM, render dữ liệu tự động từ mảng, thực hiện logic tìm kiếm, lọc dữ liệu thời gian thực và kiểm tra lỗi biểu mẫu (validation).
* LocalStorage:Lưu trữ dữ liệu đăng ký của sinh viên lâu dài ngay tại trình duyệt, không bị mất khi làm mới (reload) trang.
* GitHub Pages:Nền tảng dùng để public website chạy trực tuyến trên internet.
4. Chức năng chính
* (`index.html`):Giới thiệu tổng quan hệ thống, có navbar responsive, hero banner nổi bật, khu vực lý do nên tham gia và chân trang đầy đủ thông tin liên hệ.
* Hiển thị danh sách (`courses.html`):Render tự động tối thiểu 8 sự kiện/khóa học học thuật từ mảng dữ liệu JavaScript lên các thẻ Card giao diện trực quan.
* Tìm kiếm & Lọc dữ liệu:Thanh tìm kiếm theo tên sự kiện kết hợp 2 bộ lọc dropdown theo Danh mục và Cấp độ hoạt động theo thời gian thực, có nút Reset khôi phục danh sách gốc.
* Xem chi tiết bằng Modal:Bấm nút "Xem chi tiết" sẽ kích hoạt Bootstrap Modal hiển thị toàn bộ thông tin chi tiết (ảnh, mô tả chuyên sâu, ngày tổ chức) của phần tử đó.
* Biểu mẫu đăng ký có Validation (`register.html`):Form đăng ký tự động nhận tên sự kiện khi chuyển trang. Hệ thống kiểm tra lỗi dữ liệu đầu vào bằng JavaScript và hiển thị thông báo lỗi chữ đỏ ngay dưới từng ô input (Họ tên >= 3 ký tự, đúng định dạng Email, Số điện thoại chỉ chứa số từ 9-11 ký tự, bắt buộc chọn lớp và sự kiện). Không dùng alert() chung.
* Quản lý danh sách đăng ký (`registrations.html`):Hiển thị danh sách sinh viên đăng ký thành công dưới dạng bảng (Table), dữ liệu giữ nguyên khi F5 trang. Tích hợp chức năng xóa một bản ghi bất kỳ (có thông báo xác nhận hủy) và chức năng xóa toàn bộ danh sách.
* Thiết kế Responsive:Website hiển thị và co giãn layout hoàn hảo trên cả 3 môi trường thiết bị: Desktop, Tablet và Mobile.
5. Link demo: GitHub Pages: https://ngduy009.github.io/web-midterm-24210501009-trannguyenduy/
6. Ảnh giao diện
    ![alt](/assets/image/Ảnh-giao-diện.png)

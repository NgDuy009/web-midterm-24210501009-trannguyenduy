// Danh sách dữ liệu mẫu gồm 8 sự kiện/khóa học Khoa CNTT
var courses = [
    {
        id: 1,
        title: "Hội thảo Định hướng Ngành CNTT 2026",
        category: "Hội thảo",
        level: "Tất cả",
        image: "https://cdn.phototourl.com/free/2026-06-12-640a676c-e7e2-4d5b-b054-0f7affe85996.jpg",
        date: "2026-07-10",
        description: "Giúp sinh viên nắm bắt xu hướng công nghệ mới như AI, Cloud và Network.",
        detail: "Nội dung chi tiết gồm các bài tham luận từ chuyên gia doanh nghiệp, định hướng lộ trình học tập và cơ hội thực tập sớm cho sinh viên năm thứ 1 và năm thứ 2."
    },
    {
        id: 2,
        title: "Khóa học Lập trình C++ Cơ bản",
        category: "Khóa học",
        level: "Beginner",
        image: "https://cdn.phototourl.com/free/2026-06-12-770aa4d6-f2d2-498c-ac86-212a2cd16444.jpg",
        date: "2026-07-15",
        description: "Trang bị tư duy lập trình cấu trúc và giải thuật nền tảng.",
        detail: "Khóa học kéo dài trong vòng 4 tuần, tập trung sâu vào cú pháp ngôn ngữ C++, các cấu trúc điều khiển, mảng, con trỏ và cách tối ưu bài làm trên hệ thống chấm dịch tự động."
    },
    {
        id: 3,
        title: "Workshop Chinh phục Cisco Packet Tracer",
        category: "Workshop",
        level: "Intermediate",
        image: "https://cdn.phototourl.com/free/2026-06-12-14b82845-51d6-458a-91a3-7d78e1295e4c.jpg",
        date: "2026-07-20",
        description: "Thực hành thiết kế và cấu hình hệ thống mạng căn bản.",
        detail: "Sinh viên được hướng dẫn trực tiếp cách chia IP subnet, cấu hình định tuyến tĩnh, định tuyến động và giả lập mô hình kết nối của một văn phòng làm việc thực tế."
    },
    {
        id: 4,
        title: "Cuộc thi Lập trình Thuật toán Robinson",
        category: "Cuộc thi",
        level: "Advanced",
        image: "https://cdn.phototourl.com/free/2026-06-12-f73cbe02-1d91-40e8-8f98-5b99b66e0bb9.png",
        date: "2026-07-25",
        description: "Sân chơi logic dành cho các bạn đam mê Toán rời rạc.",
        detail: "Áp dụng các thuật toán chứng minh logic như Robinson, Vương Hạo để giải các bài toán tối ưu hóa phức tạp. Có quà tặng và giải thưởng lớn dành cho các đội thi đạt thứ hạng cao từ khoa."
    },
    {
        id: 5,
        title: "Khóa học Xây dựng Mô hình AI Đơn giản",
        category: "Khóa học",
        level: "Advanced",
        image: "https://cdn.phototourl.com/member/2026-06-12-eb9e996e-3f67-4312-98ec-4577be1c8f06.png",
        date: "2026-08-01",
        description: "Học cách thu thập dữ liệu và huấn luyện mô hình ID3.",
        detail: "Thực hành viết các kịch bản crawl dữ liệu bình luận từ mạng xã hội, xử lý chuẩn hóa tập dữ liệu thô và đưa vào các mô hình cây quyết định căn bản để phân loại thông tin tự động."
    },
    {
        id: 6,
        title: "Giao lưu Cựu sinh viên CNTT thành đạt",
        category: "Hội thảo",
        level: "Tất cả",
        image: "https://cdn.phototourl.com/member/2026-06-12-ad0d391c-7bc4-4668-bcb9-b9c6abe4cb5b.jpg",
        date: "2026-08-05",
        description: "Chia sẻ kinh nghiệm phỏng vấn, làm việc tại các doanh nghiệp lớn.",
        detail: "Lắng nghe những câu chuyện thực tế từ các anh chị đi trước, giải đáp thắc mắc về áp lực ngành nghề và cách tự học công nghệ mới hiệu quả nhằm đáp ứng yêu cầu tuyển dụng hiện nay."
    },
    {
        id: 7,
        title: "Workshop Thiết kế Web với Bootstrap 5",
        category: "Workshop",
        level: "Beginner",
        image: "https://cdn.phototourl.com/member/2026-06-12-27bb8cc3-1492-405d-b3ed-50f70c44829a.jpg",
        date: "2026-08-12",
        description: "Làm chủ Grid System và xây dựng giao diện Responsive nhanh chóng.",
        detail: "Thực hành cắt giao diện trực tiếp từ bản vẽ sang HTML/CSS bằng cách sử dụng linh hoạt các class tiện ích, thuộc tính căn lề và thư viện thành phần cấu trúc có sẵn của Bootstrap 5."
    },
    {
        id: 8,
        title: "Khóa học JavaScript DOM căn bản",
        category: "Khóa học",
        level: "Intermediate",
        image: "https://cdn.phototourl.com/member/2026-06-12-0674f39e-80f7-4482-93b3-1e4425b28b9b.jpg",
        date: "2026-08-20",
        description: "Xử lý sự kiện, kiểm tra lỗi form và thao tác LocalStorage.",
        detail: "Học sâu về cách tương tác các phần tử HTML, lắng nghe hành vi người dùng, bắt lỗi trường dữ liệu và lưu trữ mảng đối tượng phía giao diện người dùng mà không cần tải lại toàn bộ trang web."
    }
];
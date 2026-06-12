// Chờ toàn bộ cấu trúc cây DOM được tải xong xuôi
document.addEventListener("DOMContentLoaded", function() {


    var courseListContainer = document.getElementById("course-list");
    
    if (courseListContainer) {
        function displayCourses(dataList) {
            courseListContainer.innerHTML = ""; 
            
            if (dataList.length === 0) {
                courseListContainer.innerHTML = '<div class="col-12 text-center text-muted py-5"><h5>Không tìm thấy chương trình nào phù hợp với bộ lọc hiện tại.</h5></div>';
                return;
            }

            for (var i = 0; i < dataList.length; i++) {
                var item = dataList[i];
                
                var cardHtml = 
                    '<div class="col-xl-3 col-lg-4 col-md-6 mb-4">' +
                        '<div class="card h-100 course-card shadow-sm">' +
                            '<img src="' + item.image + '" class="card-img-top" style="height: 180px; object-fit: cover;" alt="Image">' +
                            '<div class="card-body">' +
                                '<div class="mb-2">' +
                                    '<span class="badge bg-primary me-1">' + item.category + '</span>' +
                                    '<span class="badge bg-secondary">' + item.level + '</span>' +
                                '</div>' +
                                '<h5 class="card-title course-title text-primary">' + item.title + '</h5>' +
                                '<p class="card-text text-muted small">' + item.description + '</p>' +
                                '<p class="card-text small text-dark fw-bold mb-0"><i class="bi bi-calendar3"></i> Ngày: ' + item.date + '</p>' +
                            '</div>' +
                            '<div class="card-footer bg-transparent border-top-0 d-flex gap-2 pb-3">' +
                                '<button class="btn btn-outline-primary btn-sm w-50" onclick="openDetailModal(' + item.id + ')">Chi tiết</button>' +
                                '<button class="btn btn-primary btn-sm w-50" onclick="redirectToRegister(\'' + item.title + '\')">Đăng ký</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                
                courseListContainer.innerHTML += cardHtml;
            }
        }

        displayCourses(courses);

        var searchInput = document.getElementById("search-name");
        var categorySelect = document.getElementById("filter-category");
        var levelSelect = document.getElementById("filter-level");
        var resetBtn = document.getElementById("btn-reset");

        function filterData() {
            var keyword = searchInput.value.toLowerCase().trim();
            var selectedCate = categorySelect.value;
            var selectedLevel = levelSelect.value;
            
            var filteredResults = [];

            for (var i = 0; i < courses.length; i++) {
                var currentItem = courses[i];
                
                var matchesSearch = currentItem.title.toLowerCase().indexOf(keyword) !== -1;
                var matchesCate = (selectedCate === "") || (currentItem.category === selectedCate);
                var matchesLevel = (selectedLevel === "") || (currentItem.level === selectedLevel);

                if (matchesSearch && matchesCate && matchesLevel) {
                    filteredResults.push(currentItem);
                }
            }

            displayCourses(filteredResults);
        }

        searchInput.addEventListener("input", filterData);
        categorySelect.addEventListener("change", filterData);
        levelSelect.addEventListener("change", filterData);

        if (resetBtn) {
            resetBtn.addEventListener("click", function() {
                searchInput.value = "";
                categorySelect.value = "";
                levelSelect.value = "";
                displayCourses(courses);
            });
        }
    }


    var registerForm = document.getElementById("form-register");
    
    if (registerForm) {
        var urlParams = new URLSearchParams(window.location.search);
        var courseParam = urlParams.get("courseName");
        if (courseParam) {
            document.getElementById("input-course").value = courseParam;
        }

        registerForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            var txtName = document.getElementById("input-name").value.trim();
            var txtEmail = document.getElementById("input-email").value.trim();
            var txtPhone = document.getElementById("input-phone").value.trim();
            var txtClass = document.getElementById("input-class").value.trim();
            var selectCourse = document.getElementById("input-course").value;
            var txtNote = document.getElementById("input-note").value.trim();

            var isFormValid = true;

            var errorElements = document.querySelectorAll(".error-message");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].innerText = "";
            }

            if (txtName === "") {
                document.getElementById("err-name").innerText = "Họ và tên không được bỏ trống.";
                isFormValid = false;
            } else if (txtName.length < 3) {
                document.getElementById("err-name").innerText = "Họ và tên phải có tối thiểu 3 ký tự.";
                isFormValid = false;
            }

            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (txtEmail === "") {
                document.getElementById("err-email").innerText = "Địa chỉ email không được bỏ trống.";
                isFormValid = false;
            } else if (!emailPattern.test(txtEmail)) {
                document.getElementById("err-email").innerText = "Địa chỉ email không đúng định dạng hợp lệ (Ví dụ: sv@gmail.com).";
                isFormValid = false;
            }

            var phonePattern = /^[0-9]{9,11}$/;
            if (txtPhone === "") {
                document.getElementById("err-phone").innerText = "Số điện thoại không được bỏ trống.";
                isFormValid = false;
            } else if (!phonePattern.test(txtPhone)) {
                document.getElementById("err-phone").innerText = "Số điện thoại chỉ chứa chữ số, độ dài từ 9 đến 11 ký tự.";
                isFormValid = false;
            }

            if (txtClass === "") {
                document.getElementById("err-class").innerText = "Vui lòng nhập thông tin lớp sinh hoạt của bạn.";
                isFormValid = false;
            }

            if (selectCourse === "") {
                document.getElementById("err-course").innerText = "Vui lòng chọn một sự kiện hoặc khóa học trong danh sách.";
                isFormValid = false;
            }

            if (isFormValid) {
                var registrationObject = {
                    id: new Date().getTime(), 
                    fullName: txtName,
                    emailAddress: txtEmail,
                    phoneNumber: txtPhone,
                    studentClass: txtClass,
                    chosenCourse: selectCourse,
                    userNote: txtNote,
                    dateRegistered: new Date().toLocaleDateString("vi-VN")
                };

                var existingList = localStorage.getItem("studentRegistrations");
                var listArray = [];
                
                if (existingList !== null) {
                    listArray = JSON.parse(existingList);
                }

                listArray.push(registrationObject);
                localStorage.setItem("studentRegistrations", JSON.stringify(listArray));

                alert("Chúc mừng bạn đã đăng ký tham dự chương trình thành công!");
                registerForm.reset();
                window.location.href = "registrations.html"; 
            }
        });
    }


    var tableBody = document.getElementById("table-body");
    
    if (tableBody) {
        function displayRegistrationTable() {
            tableBody.innerHTML = "";
            var existingList = localStorage.getItem("studentRegistrations");
            var listArray = [];
            
            if (existingList !== null) {
                listArray = JSON.parse(existingList);
            }

            if (listArray.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">Hệ thống chưa ghi nhận lượt dữ liệu đăng ký nào.</td></tr>';
                return;
            }

            for (var i = 0; i < listArray.length; i++) {
                var currentReg = listArray[i];
                var rowHtml = 
                    '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td><strong>' + currentReg.fullName + '</strong></td>' +
                        '<td>' + currentReg.studentClass + '</td>' +
                        '<td>' + currentReg.chosenCourse + '</td>' +
                        '<td>' + currentReg.phoneNumber + '</td>' +
                        '<td>' + currentReg.dateRegistered + '</td>' +
                        '<td>' +
                            '<button class="btn btn-danger btn-sm" onclick="deleteSingleRegistration(' + currentReg.id + ')">' +
                                '<i class="bi bi-trash"></i> Xóa' +
                            '</button>' +
                        '</td>' +
                    '</tr>';
                tableBody.innerHTML += rowHtml;
            }
        }

        displayRegistrationTable();

        window.deleteSingleRegistration = function(targetId) {
            if (confirm("Hành động không thể hoàn tác. Bạn chắc chắn muốn xóa lượt đăng ký này?")) {
                var existingList = localStorage.getItem("studentRegistrations");
                var listArray = JSON.parse(existingList);
                var newFilteredArray = [];

                for (var i = 0; i < listArray.length; i++) {
                    if (listArray[i].id !== targetId) {
                        newFilteredArray.push(listArray[i]);
                    }
                }

                localStorage.setItem("studentRegistrations", JSON.stringify(newFilteredArray));
                displayRegistrationTable();
            }
        };

        var deleteAllBtn = document.getElementById("btn-clear-all");
        if (deleteAllBtn) {
            deleteAllBtn.addEventListener("click", function() {
                if (confirm("Cảnh báo nguy hiểm: Bạn có chắc chắn muốn xóa TOÀN BỘ dữ liệu danh sách đăng ký không?")) {
                    localStorage.removeItem("studentRegistrations");
                    displayRegistrationTable();
                }
            });
        }
    }
});


window.openDetailModal = function(courseId) {
    var foundCourse = null;
    
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].id === courseId) {
            foundCourse = courses[i];
            break;
        }
    }

    if (foundCourse !== null) {
        document.getElementById("modal-course-title").innerText = foundCourse.title;
        document.getElementById("modal-course-img").src = foundCourse.image;
        document.getElementById("modal-course-category").innerText = foundCourse.category;
        document.getElementById("modal-course-level").innerText = foundCourse.level;
        document.getElementById("modal-course-date").innerText = foundCourse.date;
        document.getElementById("modal-course-detail").innerText = foundCourse.detail;
        
        var actionBtn = document.getElementById("modal-action-btn");
        actionBtn.setAttribute("onclick", "redirectToRegister('" + foundCourse.title + "')");

        var elementModal = document.getElementById("courseDetailModal");
        var bootstrapModalInstance = new bootstrap.Modal(elementModal);
        bootstrapModalInstance.show();
    }
};

window.redirectToRegister = function(courseTitle) {
    window.location.href = "register.html?courseName=" + encodeURIComponent(courseTitle);
};
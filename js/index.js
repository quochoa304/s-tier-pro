let lastScrollY = 0; // Biến để lưu vị trí cuộn cuối
const nav = document.querySelector('.nav');

window.onscroll = function() {
    const scrollY = window.scrollY;
    
    // Kiểm tra xem người dùng có cuộn xuống hay lên
    if (scrollY > 150 && scrollY > lastScrollY) {
        // Nếu cuộn xuống và đã vượt quá 200px
        nav.classList.add('fixed-nav'); // Thêm lớp fixed-nav
    } else if (scrollY < lastScrollY) {
        // Nếu cuộn lên
        nav.classList.remove('fixed-nav'); // Xóa lớp fixed-nav
    }
    
    // Cập nhật vị trí cuộn cuối
    lastScrollY = scrollY;
};
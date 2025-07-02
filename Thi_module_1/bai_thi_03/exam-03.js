function laNamNhuan(nam) {
    if (nam % 4 === 0 && nam % 100 !== 0) {
        return true;
    }
    if (nam % 400 === 0) {
        return true;
    }
    return false;
}

function tinhSoNgay(chuoi) {
    // Kiểm tra định dạng MM/yyyy
    if (chuoi.length !== 7 || chuoi.charAt(2) !== "/") {
        console.log(" Sai định dạng. Phải nhập MM/yyyy (ví dụ: 02/2024)");
        return;
    }

    var thang = parseInt(chuoi.substring(0, 2));
    var nam = parseInt(chuoi.substring(3, 7));

    if (isNaN(thang) || isNaN(nam) || thang < 1 || thang > 12) {
        console.log(" Tháng hoặc năm không hợp lệ.");
        return;
    }

    var ngay = 0;

    if (thang === 1 || thang === 3 || thang === 5 || thang === 7 ||
        thang === 8 || thang === 10 || thang === 12) {
        ngay = 31;
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        ngay = 30;
    } else if (thang === 2) {
        if (laNamNhuan(nam)) {
            ngay = 29;
        } else {
            ngay = 28;
        }
    }

    console.log(" Tháng " + thang + "/" + nam + " có " + ngay + " ngày.");
}

// Chạy chương trình
var nhap = prompt("Nhập tháng và năm (định dạng MM/yyyy):");
tinhSoNgay(nhap);

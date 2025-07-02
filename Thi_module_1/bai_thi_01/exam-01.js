//Hàm nhập vào mảng
function nhapMang() {
    let maxlength = 50;
    let arr = [];
    let n;

    do {
        n = parseInt(prompt("Nhập số lượng phần tử (tối đa 50):"));
    } while (isNaN(n) || n <= 0 || n > maxlength);

    for (let i = 0; i < n; i++) {
        let num;
        do {
            num = parseInt(prompt(`Nhập phần tử thứ ${i + 1} (số nguyên):`));
        } while (isNaN(num));
        arr.push(num);
    }
    return arr;
}

// hàm hiển thị
function hienThiMang(arr) {
    console.log("Mảng vừa nhập:", arr.join(", "));
}


function trungBinhChiaHetCho3(arr) {
    let tong = 0;
    let dem = 0;

    for (let num of arr) {
        if (num % 3 === 0) {
            tong += num;
            dem++;
        }
    }

    if (dem === 0) return null; // Không có số chia hết cho 3
    return tong / dem;
}


function main() {
    let mangSoNguyen = nhapMang();
    hienThiMang(mangSoNguyen);

    let tbCong = trungBinhChiaHetCho3(mangSoNguyen);
    if (tbCong === null) {
        console.log("Không có số nào trong mảng chia hết cho 3.");
    } else {
        console.log("Trung bình cộng các số chia hết cho 3 là:", tbCong);
    }
}

main();

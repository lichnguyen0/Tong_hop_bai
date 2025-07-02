// Hàm kiểm tra số
function isPerfectNumber(n) {
    if (n <= 0) return false; // Không phải số nguyên dương

    let sum = 0;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

let num = parseInt(prompt("Nhập một số nguyên dương:"));

if (isNaN(num) || num <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let ketQua = isPerfectNumber(num);
    console.log(`Số ${num} là số hoàn hảo? => ${ketQua}`);
}

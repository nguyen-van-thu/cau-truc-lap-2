
function checkNT(number) {
    let count = 0;
    let numberSNT = 0;
    for (let i = 2; i < 1000; i++) {
        if (numberSNT < number) {
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count += 1;
                }
            }
            if (count == 2) {
                document.write(i + "<br>");
                numberSNT += 1;
            }
            count = 0;
        } else {
            break;
        }
    }
}
let number = parseInt(prompt("Nhập n số nguyên tố đầu tiên: "));
checkNT(number);





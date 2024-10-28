
function printStar() {
    let num = prompt("정수를 입력하세요");

    if (isFinite(num)) {
        for (let i = 0; i < parseInt(num); i++) {
            for (let j = 0; j <= i; j++) {
                document.write("*");
            }
            document.write("<br>");
        }
    }
    else{
        document.write("입력 오류 입니다.");
    }
}
document.getElementById("submit").addEventListener("click",() =>{
    let hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    let hex_code1 = "";
    let hex_code2 = "";
    let random_number = 0;

    for(let i = 0;i<6;i++){
        random_number = Math.floor(Math.random()*hex_numbers.length);
        hex_code1 = hex_code1 + hex_numbers[random_number]
        random_number = Math.floor(Math.random()*hex_numbers.length);
        hex_code2 = hex_code2 + hex_numbers[random_number]
    }
    document.body.style.background = `linear-gradient(to right, #${hex_code1}, #${hex_code2})`;
    document.getElementById("hexcode1").textContent = hex_code1;
    document.getElementById("hexcode2").textContent = hex_code2;
}
);
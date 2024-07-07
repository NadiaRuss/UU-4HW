export function celsiusToFahrenheit(){
    let celsius = +prompt("Ведите температуру в градусах Цельсия");
    let farengeight = celsius * 1.8 + 32;
    alert(`температура по Фаренгейту равна: ${farengeight}F`)
}
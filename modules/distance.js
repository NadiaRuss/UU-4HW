export function calculateFallDistance(){
    let t = +prompt("Введите время в секундах");
    let g = 9.8;
    let d = Math.trunc((1/2) * g * t**2);
    alert(`Расстояние равно ${d} метров`)
}
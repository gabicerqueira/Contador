// var data = new Date('Jul 22, 2006 00:00:00').getMonth()+1; //getTime, getDate, getMinutes, getSeconds, getFullYear, getMonth, getDay
// console.log(data);

// var relogio = setInterval(function(){
//     let horas = new Date().getHours();
//     let minutos = new Date().getMinutes();
//     let segundos = new Date().getSeconds();
//     console.log(`${horas}:${minutos}:${segundos}`)
// })

var relogio = setInterval(function () {
    let dias = new Date().getDate();
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();
    console.log(`${dias} dias - ${horas}:${minutos}:${segundos}`)
})
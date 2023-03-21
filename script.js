let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

function relogio = setInterval(function time() {
  let dateToday = newDate()
  let hora = dateToday.getHours()
  let minu = date.dateToday.getMinutes()
  let seg = date.dateToday.getSecunds() 
  
  if (hora < 10) hora = '0' + hora
  if (minu < 10) minu = '0' + minu
  if (seg < 10) segund = '0' + seg
  
  horas.textContent = hora
  minutos.textContent = minu
  segundos.textContent = seg
  
})
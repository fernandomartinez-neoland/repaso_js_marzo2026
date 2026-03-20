const precio = document.getElementById("precio")
const iva = document.getElementById("iva")
const total = document.getElementById("total")
const calcular = document.getElementById("calcular")

calcular.addEventListener("click", () => { 
    iva.textContent=Number(precio.value)*0.21;
    total.textContent=Number(precio.value)*0.21+parseInt(precio.value)

})
const precio = document.getElementById("precio")
const iva = document.getElementById("iva")
const total = document.getElementById("total")
const calcular = document.getElementById("calcular")

calcular.addEventListener("click", () => { 
    const iva_calculado=Number(precio.value)*0.21;
    iva.textContent=iva_calculado;
    total.textContent=iva_calculado+parseInt(precio.value)

})
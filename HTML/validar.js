function operaciones(){
    let cap = document.getElementaryById("cap").value;
    let resultado = cap * 0.2
    
    let resultadoStr = resultado.toString();
    alert(resultadoStr)
}

function ejercicio2(){
    let salBaseStr = document.getElementById("salarioB").value
    let salBaseNumb = Number(salBaseStr);

    let comisiones = salBaseNumb * 0.30
    let salTotal = comisiones+salBaseNumb
    let salTotalStr = salTotal.toString();
    let comisionesStr = comisiones.toString()
    alert("El salario total es de " + salTotalStr + "$" + " El extra por concepto de comisiones es de " + comisionesStr + "$")
}

function ejercicio3(){
    let compraSinD = document.getElementById("compraSinD").value
    let compraT = compraSinD - (compraSinD*0.15)

    let compraTStr = compraT.toString()

    alert("Va a pagar " + compraTStr + "$")
}

function ejercicio4(){
    let primero = Number(document.getElementById("primero").value)
    let segundo = Number(document.getElementById("segundo").value)
    let tercero = Number(document.getElementById("tercero").value)

    let examenF = Number(document.getElementById("examenF").value)
    let trabajoF = Number(document.getElementById("trabajoF").value)

    let primerCal = ((primero+segundo+tercero)/3)*0.55
    let segundaCal = examenF*0.3
    let terceraCal = trabajoF*0.15

    let calT = primerCal+segundaCal+terceraCal

    let calTStr = calT.toString();

    alert ("La calificación es de " + calTStr)
}

function ejercicio5(){
    let hombres = Number(document.getElementById("hombres").value)
    let mujeres = Number(document.getElementById("mujeres").value)

    let totalG = hombres + mujeres

    let pHombres = ((hombres * 1)/totalG)*100
    let pMujeres = ((mujeres * 1)/totalG)*100

    let pHombresStr = pHombres.toString();
    let pMujeresStr = pMujeres.toString();

    alert ("El porcentaje de mujeres es del " + pMujeresStr + "%" + " y el de hombres es del " + pHombresStr + "%")
}

function ejercicio7(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultado = 0
    if (num1 == num2){
        resultado = num1*num2

    } else if (num1 > num2){
        resultado = num1 - num2

    } else {
        resultado = num1 + num2
    }

    let resultadoStr7 = resultado.toString();
    alert("El resultado es " + resultadoStr7)
}

function ejercicio8(){
    let num81 = Number(document.getElementById("num81").value)
    let num82 = Number(document.getElementById("num82").value)
    let num83 = Number(document.getElementById("num83").value)

    let resultado8 = 0

    if (num81 > num82){
        if (num81 > num83){
            resultado8 = num81
        } else{
            resultado8 = num83
        }
    } else{
        if (num82 > num83){
            resultado8 = num82
        } else {
            resultado8 = num83
        }
    }

    let resultado8Str = resultado8.toString();

    alert("El número mayor es " + resultado8Str)
}

function ejercicio9(){
    let hrsTrab = Number(document.getElementById("hrsTrab").value)
    let pagoHrs = Number(document.getElementById("pagoHrs").value)

    let pagoT8 = 0
    let hrsExt = 0
    let pagoExt = 0

    if (hrsTrab <= 40){
        pagoT8 = hrsTrab * pagoHrs
    } else if (hrsTrab > 40 && hrsTrab <= 48){
        hrsExt = hrsTrab - 40
        pagoExt = hrsExt * (pagoHrs * 2)
        pagoT8 = (40 * pagoHrs) + pagoExt
    } else{
        hrsExt = hrsTrab - 48
        pagoExt = (hrsExt * (pagoHrs * 3)) + (pagoHrs*8*2)
        pagoT8 = (40 * pagoHrs) + pagoExt
    }

    let pago9TStr = pagoT8.toString();
    alert("El dinero a pagar al trabajador es de " + pago9TStr + "$")
}

/*1. Haga un programa que reciba como entrada la edad actual de Elena, y debe
imprimir la edad de Lucía dentro de siete años, siendo que la edad de Lucía
es la tercera parte de la de Elena*/
//ejercicio uno
function recogerDatos(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let name2 = "lucia";
    let age2 = (age / 3) + 7;
    let matriz = [(name ,name2) ,(age ,age2)]
    document.write("name:" ,name,"_" , "age:" ,age + "<br>" +"second name:" ,name2,"_" , "second age:" ,age2 + "<br>" + "refresh to continue");
    document.write(getElementById("back"));
}

/*2. Cree un programa que calcule la posible edad de una persona en un año
específico. El usuario debe ingresar el año en que se encuentra y el año con
el que desea hacer el cálculo, este segundo parámetro no puede ser menor
al año actual del usuario. Ejemplo: Si el usuario está en el año 2022 no puede
ingresar un valor menor a dicho año para hacer el cálculo de la edad.*/
//ejercicio dos
function recogerDatos2() {
    let age = document.getElementById("age2").value;
    let birthage = document.getElementById("birth-age").value;
    let actualage = age - birthage;
    if (age > birthage) {
        document.write("your actual age is :" + actualage)
    }
    else {
        location.reload();
    }
}

/*3. Haga un programa que reciba como entrada el año de matrimonio del abuelo
de Alberto. Encontrar la edad de la abuela de Alberto a hoy, si es 7 años
menor que el abuelo de Alberto, y en el año del matrimonio, el abuelo tenía
25 años.Debe imprimir la edad de la abuela de Alberto.*/
//abuelo 25 años
//abuela 7 años menor que abuelo
//edad actual abuela : 25 - 7 + años de casados
function recogerDatos3() {
    let marriage = document.getElementById("age3").value;
    let wifeActualAge = (25 - 7) + Number(marriage);
    document.write("him wife is " + wifeActualAge + " years old");
}

/*4. Cree un programa que le permita al usuario convertir grados Fahrenheit a
Celsius o viceversa. El programa debe recibir el tipo de conversión que se
desea realizar, siendo la letra “F” para Fahrenheit y “C” para Celsiu, y el valor
a convertir. El programa no recibirá el valor a convertir hasta que se haya
ingresado correctamente el tipo de conversión que se desea realizar. Debe
imprimir mostrando el resultado de la conversión: N°C/F = N°C/F. Si el tipo de
conversión no es válido debe imprimir: “Tipo de conversión no reconocido”
Fórmula Celsius a Fahrenheit
(n°C × 9/5) + 32
Fórmula Fahrenheit a Celsius
((n°F - 32) × 5) / 9*/
function recogerDatos41() {
    let n1 = document.getElementById("n1").value;
    let convert = (n1 * 9/5) + 32;
    document.write(convert);
}
function recogerDatos42() {
    let n1 = document.getElementById("n1").value;
    let convert = ((n1 - 32) * 5) / 9;
    document.write(convert);
}

/*5. Haga un programa que reciba el nombre de un producto, el precio de este y
cantidad a comprar, si la persona compra 3 se le aplicará un descuento de
10%, si lleva 5 o más un descuento de 20%. Debe imprimir una tabla con el

nombre del producto, cantidad, subtotal, descuento a aplicar y el precio final a
pagar.*/
 


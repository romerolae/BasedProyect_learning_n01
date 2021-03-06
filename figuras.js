// Codigo del cuadrado 
console.group("cuadrados")

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm` )

function  perimetroCuadrado (lado){
    return lado* 4;
}


//console.log(`El perimetro del cuadrado  mide: ${perimetroCuadrado} cm` )


function areaCuadrado (lado){
   
   return  lado*lado;
}


//console.log(`El area del cuadrado mide: ${areaCuadrado} cm^2`)

console.groupEnd()
// Codigo del triangulo

console.group("Triangulos")

// const ladoTriangulo1 =6;
// const ladoTriangulo2 =6;
// const baseTriangulo =4;
// const alturaTriangulo =5.5;

function areaTriangulo(base, altura){
 return (base*altura)/2;
}


function perimetroTriangulo(lado1, lado2, base){
   return  lado1 + lado2 + base;
}
// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);
// console.log(`La altura del triangulo mide: ${alturaTriangulo} cm` )
// console.log(`El perimetro del triangulo  mide: ${perimetroTriangulo} cm` )
// console.log(`El area del triangulo mide: ${areaTriangulo} cm^2` )
console.groupEnd


// Codigo del circulo
console.group("Circulo")

function diametroCirculo(radio){
    return radio*2;
}


const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd()


// Codigo del Romboide
console.group("Romboide")
// const alturaRomboide = 5;
// const baseRomboide = 7;
// const areaRomboide = baseRomboide*alturaRomboide;
// const perimetroRomboide = 2*baseRomboide + 2*alturaRomboide;

function areaRomboide(base, altura){
    return base*altura;
}

function perimetroRomboide(base, altura){
    return 2*base + 2*altura;
}

// console.log(`La altura del Romboide mide: ${alturaRomboide} cm` )
// console.log(`El base del Romboide mide: ${baseRomboide} cm` )
// console.log(`La area del Romboide mide: ${areaRomboide} cm^2` )
// console.log(`El perimetro del Romboide  mide: ${perimetroRomboide} cm` )

console.groupEnd()

// Aqui interactuaramos con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1= document.getElementById("inputBaseTriangulo")
    const value1 = parseInt(input1.value);

    const input2 = document.getElementById("inputLado1Triangulo")
    const value2 = parseInt(input2.value);
    
    const input3 = document.getElementById("inputLado2Triangulo")
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value3, value2, value1 );
    alert (perimetro);
}


function calcularAreaTriangulo(){
    const input1= document.getElementById("inputBaseTriangulo")
    const value1 = parseInt(input1.value);

    const input2 = document.getElementById("inputAlturaTriangulo")
    const value2 = parseInt(input2.value);
    
    const area = areaTriangulo(value1,value2 );
    alert (area);

}





// const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo")
//     const alturaTriangulo = inputAlturaTriangulo.alturaTriangulo;

// const inputBaseTriangulo = document.getElementById("inputBaseTriangulo")
//     const baseTriangulo = inputBaseTriangulo.baseTriangulo;
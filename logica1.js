let numero1 = prompt("Ingrese el primer numero {n1}: ");
let numero2 = prompt("Ingrese el segundo numero {n2}: ");
let numero3 = prompt("Ingrese el tercer numero {n3}: ");

let n1 = Number(numero1);
let n2 = Number(numero2);
let n3 = Number(numero3);
let menor = 0, medio = 0, mayor = 0;

if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3))
{
    if (n1 > n2 && n1 > n3) {
        mayor = n1;
        if (n2 > n3) {
            medio = n2;
            menor = n3;
        }
        else {
            medio = n3;
            menor = n2;
        }
    }
    else if (n2 > n1 && n2 > n3) {
        mayor = n2;
        if (n1 > n3) {
            medio = n1;
            menor = n3;
        }
        else {
            medio = n3;
            menor = n1;
        }
    }
    else if (n3 > n1 && n3 > n2) {
        mayor = n3;
        if (n1 > n2) {
            medio = n1;
            menor = n2;
        }
        else {
            medio = n2;
            menor = n1;
        }
    }
    else if (n1 == n2) {
        if (n1 > n3) {
            mayor = n1;
            medio = n2;
            menor = n3;
            console.log(`{n1} y {n2} son iguales`);
            alert(`{n1} y {n2} son iguales`);
        }
        else {
            mayor = n3;
            medio = n2;
            menor = n1;
            console.log(`{n1} y {n2} son iguales`);
            alert(`{n1} y {n2} son iguales`);
        }

    }
    else if (n1 == n3) {
        if (n1 > n2) {
            mayor = n1;
            medio = n3;
            menor = n2;
            console.log(`{n1} y {n3} son iguales`);
            alert(`{n1} y {n3} son iguales`);
        }
        else {
            mayor = n2;
            medio = n3;
            menor = n1;
            console.log(`{n1} y {n3} son iguales`);
            alert(`{n1} y {n3} son iguales`);
        }

    }
    else if (n2 == n3) {
        if (n2 > n1) {
            mayor = n2;
            medio = n3;
            menor = n1;
            console.log(`{n2} y {n3} son iguales`);
            alert(`{n2} y {n3} son iguales`);
        }
        else {
            mayor = n1;
            medio = n3;
            menor = n2;
            console.log(`{n2} y {n3} son iguales`);
            alert(`{n2} y {n3} son iguales`);
        }

    }

    console.log(`El mayor es ${mayor} el medio es ${medio} y el menor es ${menor}`);
    console.log(`El menor es ${menor} el medio es ${medio} y el mayor es ${mayor}`);

    alert(`El mayor es ${mayor} el medio es ${medio} y el menor es ${menor}`);
    alert(`El menor es ${menor} el medio es ${medio} y el mayor es ${mayor}`);
}
else{
    console.log("No ingresaste un numero, simbolo invalido");
    
    alert("No ingresaste un numero, simbolo invalido");
}



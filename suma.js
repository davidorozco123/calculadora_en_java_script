
console.log('suma,resta,multiplicacion,divicion,exponente');
console.log('seleccione una operacion')
var foo = promt();
switch (foo) {

  case 'suma': // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
  c=a+b;
  console.log(c)
  // NOTA: el "break" olvidado debería estar aquí
  break;

  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
  c=a-b;
  console.log(c)
  break; // Al encontrar un "break", no será ejecutado el 'case 2:'

  case 2:
  c=a-b;
  console.log(c)
  break;

  case 3:
  c=a*b;
  console.log(c)
  break;

  case 4:
  c=a**b
  console.log(c)
  break;

  case 4:
  c=a**b
  console.log(c)
  break;

  default:
    console.log('default');
}

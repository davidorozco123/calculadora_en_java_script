
var a,b,c;
var foo = '1';
switch (foo) {

  case 'suma': // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
  a=1250000
  b=750000
  c=a+b;
  console.log(c)
  // NOTA: el "break" olvidado debería estar aquí
  break;

  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
  a=2000000
  b=600000
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

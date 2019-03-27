
var a,b,c;
var foo = 'exponente';
switch (foo) {

  case 'suma': // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
  a=2000000
  b=600000
  c=a+b;
  console.log(c)
  console.log('esta es la suma')
  // NOTA: el "break" olvidado debería estar aquí
  break;

  case 'resta':// No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
  a=2000000
  b=600000
  c=a-b;
  console.log(c)
  console.log('esta es la resta')
  break; // Al encontrar un "break", no será ejecutado el 'case 2:'

  case 'multiplicacion':
  a=2000000
  b=600000
  c=a*b;
  console.log(c)
  console.log('esta es la divicion')
  break;

  case 'exponente':
  a=2000000
  b=10
  c=a**b;
  console.log(c)
  console.log('este es el exponente')
  break;

  case 'divicion':
  a=2000000
  b=600000
  c=a/b
  console.log(c)
  console.log('esta es la divicion')
  break;

  default:
    console.log('default');
}

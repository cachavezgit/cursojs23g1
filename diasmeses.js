let mes = "juniox";

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log(`El mes ${mes} tiene 31 dias...`);
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log(`El mes ${mes} tiene 30 dias...`);
        break;
    case "febrero":
        console.log(`El mes ${mes} tiene 28 dias...`);
        break;
    default:
        console.log(`Introduzca un mes valido...`);
}
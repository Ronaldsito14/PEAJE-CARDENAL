let vehiculos = [
    { matricula: "TAGXT1", tipo: 1 },
    { matricula: "XAZOR2", tipo: 2 },
    { matricula: "NELMW3", tipo: 3 },
    { matricula: "IUVHQ4", tipo: 1 },
    { matricula: "SICJK5", tipo: 2 }
  ];
  
  let tarifasPeaje = [10, 20, 50];
  let tarifas = [];
  
  let contadorTipo = [0, 0, 0];
  let totalRecolectado = 0;
  
  for (let i = 0; i < vehiculos.length; i++) {
    let vehiculo = vehiculos[i];
    let tarifaPeaje = tarifasPeaje[vehiculo.tipo - 1];
    let tarifa = { 
      matricula: vehiculo.matricula,
      tipo: vehiculo.tipo,
      tarifaPeaje: tarifaPeaje 
    };
    tarifas.push(tarifa);
    
    contadorTipo[vehiculo.tipo - 1]++;
    totalRecolectado += tarifaPeaje;
  }
  
  let totalMontoCiudad = totalRecolectado * 0.4;
  
  console.log("Tarifas del peaje:");
  for (let i = 0; i < tarifas.length; i++) {
    let tarifa = tarifas[i];
    console.log("Matrícula: " + tarifa.matricula + ", Tipo: " + tarifa.tipo + ",Tarifa del peaje: " + tarifa.tarifaPeaje);
  }
  
  console.log("Porcentaje de cada tipo de vehículo:");
  for (let i = 0; i < contadorTipo.length; i++) {
    let porcentaje = contadorTipo[i] / vehiculos.length * 100;
    console.log("Tipo " + (i + 1) + ": " + porcentaje + "%");
  }
  
  console.log("Monto total para la ciudad: $" + totalMontoCiudad);
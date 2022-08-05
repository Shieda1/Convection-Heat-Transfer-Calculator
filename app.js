// https://calculator.swiftutors.com/convection-heat-transfer-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const convectionHeatTransferRadio = document.getElementById('convectionHeatTransferRadio');
const heatTransferCoefficientRadio = document.getElementById('heatTransferCoefficientRadio');
const crossSectionalAreaRadio = document.getElementById('crossSectionalAreaRadio');
const higherTemperatureRadio = document.getElementById('higherTemperatureRadio');
const colderTemperatureRadio = document.getElementById('colderTemperatureRadio');

let convectionHeatTransfer;
let heatTransferCoefficient = v1;
let crossSectionalArea = v2;
let higherTemperature = v3;
let colderTemperature = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

convectionHeatTransferRadio.addEventListener('click', function() {
  variable1.textContent = '(Hc) Heat Transfer Coefficient (W/m²K)';
  variable2.textContent = '(A) Cross Sectional Area (m²)';
  variable3.textContent = '(THot) Higher Temperature (°C)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  heatTransferCoefficient = v1;
  crossSectionalArea = v2;
  higherTemperature = v3;
  colderTemperature = v4;
  result.textContent = '';
});

heatTransferCoefficientRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Convection Heat Transfer (W)';
  variable2.textContent = '(A) Cross Sectional Area (m²)';
  variable3.textContent = '(THot) Higher Temperature (°C)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  convectionHeatTransfer = v1;
  crossSectionalArea = v2;
  higherTemperature = v3;
  colderTemperature = v4;
  result.textContent = '';
});

crossSectionalAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Convection Heat Transfer (W)';
  variable2.textContent = '(Hc) Heat Transfer Coefficient (W/m²K)';
  variable3.textContent = '(THot) Higher Temperature (°C)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  convectionHeatTransfer = v1;
  heatTransferCoefficient = v2;
  higherTemperature = v3;
  colderTemperature = v4;
  result.textContent = '';
});

higherTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Convection Heat Transfer (W)';
  variable2.textContent = '(Hc) Heat Transfer Coefficient (W/m²K)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  variable4.textContent = '(TCold) Colder Temperature (°C)';
  convectionHeatTransfer = v1;
  heatTransferCoefficient = v2;
  crossSectionalArea = v3;
  colderTemperature = v4;
  result.textContent = '';
});

colderTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Convection Heat Transfer (W)';
  variable2.textContent = '(Hc) Heat Transfer Coefficient (W/m²K)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  variable4.textContent = '(THot) Higher Temperature (°C)';
  convectionHeatTransfer = v1;
  heatTransferCoefficient = v2;
  crossSectionalArea = v3;
  higherTemperature = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(convectionHeatTransferRadio.checked)
    result.textContent = `Convection Heat Transfer = ${computeConvectionHeatTransfer().toFixed(2)} W`;

  else if(heatTransferCoefficientRadio.checked)
    result.textContent = `Heat Transfer Coefficient = ${computeHeatTransferCoefficient().toFixed(2)} W/m²K`;

  else if(crossSectionalAreaRadio.checked)
    result.textContent = `Cross Sectional Area = ${computeCrossSectionalArea().toFixed(2)} m²`;

  else if(higherTemperatureRadio.checked)
    result.textContent = `Higher Temperature = ${computeHigherTemperature().toFixed(2)} °C`;

  else if(colderTemperatureRadio.checked)
    result.textContent = `Colder Temperature = ${computeColderTemperature().toFixed(2)} °C`;
})

// calculation

function computeConvectionHeatTransfer() {
  return Number(heatTransferCoefficient.value) * Number(crossSectionalArea.value) * (Number(higherTemperature.value) - Number(colderTemperature.value));
}

function computeHeatTransferCoefficient() {
  return Number(convectionHeatTransfer.value) / (Number(crossSectionalArea.value) * (Number(higherTemperature.value) - Number(colderTemperature.value)));
}

function computeCrossSectionalArea() {
  return Number(convectionHeatTransfer.value) / (Number(heatTransferCoefficient.value) * (Number(higherTemperature.value) - Number(colderTemperature.value)));
}

function computeHigherTemperature() {
  return (Number(convectionHeatTransfer.value) + (Number(crossSectionalArea.value) * Number(colderTemperature.value))) / (Number(heatTransferCoefficient.value) * Number(crossSectionalArea.value))
}

function computeColderTemperature() {
  return (Number(heatTransferCoefficient.value) * Number(crossSectionalArea.value) * Number(higherTemperature.value) - Number(convectionHeatTransfer.value)) / Number(crossSectionalArea.value);
}
const data = [
  {
    state:"Abia State",
    report: 2
  },
  {
    state:"Imo State",
    report: 3
  },
  {
    state:"Anambra State",
    report: 1
  },
  {
    state:"Enugu State",
    report: 10
  },
  {
    state:"Ebonyi State",
    report: 7
  },
]
const abia = document.querySelector('.abia');
const abiaReport = document.querySelector('.abia_report');

const imo = document.querySelector('.imo');
const imoReport = document.querySelector('.imo_report');

const anambra = document.querySelector('.anambra');
const anambraReport = document.querySelector('.anambra_report');

const enugu = document.querySelector('.enugu');
const enuguReport = document.querySelector('.enugu_report');

const ebonyi = document.querySelector('.ebonyi');
const ebonyiReport = document.querySelector('.ebonyi_report');
//change element contents
abia.textContent = data[0].state;
abiaReport.textContent =data[0].report;

imo.textContent = data[1].state;
imoReport.textContent =data[1].report;

anambra.textContent = data[2].state;
anambraReport.textContent =data[2].report;

enugu.textContent = data[3].state;
enuguReport.textContent =data[3].report;

ebonyi.textContent = data[4].state;
ebonyiReport.textContent =data[4].report;
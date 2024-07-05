import * as echarts from '../node_modules/echarts/dist/echarts.esm.min.mjs';

const API_URL = "http://localhost:3000/";
const ENDPOINT = "sections";

async function getSections(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  title: {
    text: 'Radar estrategico'
  },
  legend: {
    data: ['Valor Esperado', 'Valor Obtenido']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Propósito y Alineación', max: 100 },
      { name: 'Procesos y Eficiencia', max: 100 },
      { name: 'Productos y Servicios', max: 100 },
      { name: 'Clientes', max: 100 },
      { name: 'Competencia', max: 100 },
      { name: 'Datos y Análisis', max: 100 },
      { name: 'Innovación', max: 100 },
      { name: 'Recursos Humanos', max: 100 },
      { name: 'Regulación y Cumplimiento', max: 100 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [80, 70, 90, 80, 70, 60, 70, 80, 100],
          name: 'Valor Esperado'
        },
        {
          value: [30, 50, 40, 20, 15, 80, 90, 100, 60],
          name: 'Valor Obtenido'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
let table1Data=[];
const table1Body= document.getElementById("table1Body");
async function loadCSVData() {
  try {
    const response = await fetch('Table_Input.csv');
    const csvText = await response.text();

    const rows = csvText.split('\n').map(row => row.trim()).filter(row => row.length > 0);
    
    table1Data = rows.slice(1).map(row => {
      const [index, value] = row.split(',');
      return { 
        index: index.trim(), 
        value: parseInt(value) 
      };
    });

    renderTable1();
    calculateAndDisplayTable2();

  } catch (error) {
    console.error('Error loading or parsing CSV:', error);
  }
}

function renderTable1(){
    table1Body.innerHTML = ''; 
    table1Data.forEach(row=>{
        const tr = document.createElement('tr');
        tr.innerHTML=`
            <th>${row.index}</th>
            <th>${row.value}</th>
        `;
        table1Body.appendChild(tr);
    });
}
function getValue(indexKey) {
    const target = table1Data.find(item => item.index === indexKey);
    return target ? target.value : 0;
}

function calculateAndDisplayTable2(){
    const alpha = getValue('A5')+getValue('A20');
    const beta =getValue('A15')/getValue('A7');
    const charlie =getValue('A13')*getValue('A12');
    const alphaCell = document.getElementById('val-alpha');
    const betaCell = document.getElementById('val-beta');
    const charlieCell = document.getElementById('val-charlie');
    alphaCell.textContent = alpha;
    betaCell.textContent = beta;
    charlieCell.textContent = charlie;
}
loadCSVData();
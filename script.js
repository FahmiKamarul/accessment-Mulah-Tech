const table1Data = [
    { index: 'A1', value: 41 }, { index: 'A2', value: 18 }, { index: 'A3', value: 21 },
    { index: 'A4', value: 63 }, { index: 'A5', value: 2 },  { index: 'A6', value: 53 },
    { index: 'A7', value: 5 },  { index: 'A8', value: 57 }, { index: 'A9', value: 60 },
    { index: 'A10', value: 93 }, { index: 'A11', value: 28 }, { index: 'A12', value: 3 },
    { index: 'A13', value: 90 }, { index: 'A14', value: 39 }, { index: 'A15', value: 80 },
    { index: 'A16', value: 88 }, { index: 'A17', value: 49 }, { index: 'A18', value: 60 },
    { index: 'A19', value: 26 }, { index: 'A20', value: 28 }
];


const table1Body = document.getElementById("table1Body");
table1Data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="">${row.index}</td>
    <td class="">${row.value}</td>
    `;
    table1Body.appendChild(tr);
});

function getValue(indexKey) {
    const target = table1Data.find(item => item.index === indexKey);
    return target ? target.value : 0;
};
const alpha = getValue('A5')+getValue('A20');
const beta =getValue('A15')/getValue('A7');
const charlie =getValue('A13')*getValue('A12');
const alphaCell = document.getElementById('val-alpha');
const betaCell = document.getElementById('val-beta');
const charlieCell = document.getElementById('val-charlie');
alphaCell.textContent = alpha;
betaCell.textContent = beta;
charlieCell.textContent = charlie;
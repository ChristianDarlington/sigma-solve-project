const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./Samplefilesigmasolve.xlsx.numbers').then((rows) => {
 console.log(rows);
 console.table(rows);
})

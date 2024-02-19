//reading the xlsx file and converting into the json and printing on console
var fs = require('fs');
XLSX = require('xlsx');
function xlsxToJson(file){
  var workbook = XLSX.readFile(file);
var sheet_name_list = workbook.SheetNames;
let data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
console.log(data)

}
xlsxToJson('./marks.xlsx')

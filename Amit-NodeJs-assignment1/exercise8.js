//function to read json and convert it into xlxs file

var fs=require('fs')
var XLSX=require('xlsx')
data = [{
    firstName: 'amit',
    lastName: 'kumar',
    age:80
   }, {
    firstName: 'Sumit',
    lastName: 'kumar',
    age:89
   }, {
    firstName: 'aditya',
    lastName: 'raj',
    age:50
   }]
   function jsonToXlxs(data){
   const ws = XLSX.utils.json_to_sheet(data)
   const wb = XLSX.utils.book_new()
   XLSX.utils.book_append_sheet(wb, ws, 'Responses')
   XLSX.writeFile(wb, 'jsonToxlsx.xlsx')}
   //function calling
   jsonToXlxs(data)
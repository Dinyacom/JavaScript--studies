'use strict'
const files = [
	'text.docx',
	'index.html',
	'document.pdf',
	'script.js',
	'style.css',
	'summary.pdf',
	'Harry_Potter.pdf',
	'report.pdf'];


const PdfFail = files.filter((func) => (func.slice(-3) === 'pdf'));
console.log(`Отсортированный массив c расширением pdf:`);
console.log(PdfFail)


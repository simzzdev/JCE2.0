//JSON goes here:
var jsonStr = `{ "documentationList": {
	"dateGenerated": "5-3-2019",
	"type": "test",
	"notes": "sample data",
	"documents": [
		{ "id": "0001", "title": "First test doc" },
		{ "id": "0002", "title": "Second test doc" },
		{ "id": "0003", "title": "Third test doc" },
		{ "id": "0004", "title": "Fourth test doc" },
		{ "id": "0005", "title": "Fifth test doc" } ]
} }`; var docsData = JSON.parse(jsonStr);
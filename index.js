fetch(`https://picsum.photos/v2/list?page=17&limit=25`).then((response) => {
  return response.json();
}).then((responseJson) => {
  for (let i = 0; i < responseJson.length; i++) {
    console.log(responseJson[i]);
    injectInfo(responseJson[i]);
  } 
});

function injectInfo(responseJson) {
  var table = document.getElementById('myTable');
  for(var r = 1; r < 2; r++){
    var row = table.insertRow(r);
  }
    for (var c = 0; c < 15; c++) {
    var cell = row.insertCell(c);
    cell.id = `cellid_${responseJson.id}_${c}`;
  }

  var picsum = document.createElement('img');
  var src = document.querySelector(`#cellid_${responseJson.id}_1`);
  picsum.src = responseJson.download_url;
  src.appendChild(picsum);

}
function Matrix() {
  let c = document.getElementById("col");
  let r = document.getElementById("row");
  let s = document.getElementById("sum");
  let matrixInput = document.getElementById("matrixInput");
  s.innerHTML =
    "<br> No. of Row : " + r.value + "<br>" + "No. of Col : " + c.value;

  let rowN = r.value;
  let colN = c.value;
  matrixInput.innerHTML = ` <form>
    <br>
    <label for="matrix">Enter ${
      rowN * colN
    } commma seperated matrix values: </label>
    <input type="text" id="matrix" value="" />
    <input
        type="button"
        onclick="Transpose(matrix.value)"
        value="Transpose of matrix"
      />
  </form>  `;
}

function Transpose(str) {
  let c = document.getElementById("col");
  let r = document.getElementById("row");
  let rowN = r.value;
  let colN = c.value;

  separatedArray = str.split(", ");
  let arr = new Array(rowN);
  for (var x = 0; x < rowN; x++) {
    arr[x] = new Array(colN);
  }
  let itr = 0;
  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      let n = separatedArray[0][itr] * 1;
      arr[i][j] = n;
      itr += 2;
    }
  }

  console.log(arr);

  document.querySelector(".output").innerHTML += "Entered Matrix is " + "<br>";
  printArry(arr, rowN, colN);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }
  document.querySelector(".output").innerHTML +=
    "Transpose of Matrix " + "<br>";
  printArry(arr, rowN, colN);
}

function printArry(arr, rowN, colN) {
  for (let i = 0; i < rowN; i++) {
    for (let j = 0; j < colN; j++) {
      document.querySelector(".output").innerHTML += " " + arr[i][j];
    }
    document.querySelector(".output").innerHTML += " " + "<br>";
  }
}

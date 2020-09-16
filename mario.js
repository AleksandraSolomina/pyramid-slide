

const DEFAULT_PYRAMID_HEIGHT = 5;
const DEFAULT_PYRAMID_SYMBOL = "#";

const symbolEl = document.getElementById("brick_type");
const heightEl = document.getElementById("myrange");
const numEl = document.getElementById("numb");


function pyramidRow(row, height, sym = DEFAULT_PYRAMID_SYMBOL) {
    const para = document.createElement("p");
    para.appendChild(document.createTextNode("\xa0".repeat(height - row) + sym.repeat(row + 1)));
    return para;
}

function printPyramid(height, symbol) {
    document.getElementById("thePyramid").innerHTML = "";
    const pyramidContainer = document.createElement("div");
    
    for (let i = 1; i <= height; ++i)
    pyramidContainer.appendChild(pyramidRow(i, height, symbol));
    document.getElementById("thePyramid").appendChild(pyramidContainer);
}
heightEl.setAttribute("value", DEFAULT_PYRAMID_HEIGHT);
numEl.textContent = heightEl.value;
        
        heightEl.addEventListener("change", e => {
            
            printPyramid(heightEl.value, symbolEl.value);
            numEl.textContent = heightEl.value;
          });      

          symbolEl.addEventListener("change", e => {
            
            printPyramid(heightEl.value, symbolEl.value);
          });      


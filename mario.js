
printPyramid(5);


// function printPyramid(height) {
//     var elem;
    
  
//     for (var i = 0; i < height; i++) {
//         if(height-i-2>=0){
//             res = " ".repeat(height-i-2) + "#".repeat(i + 2);
//             // elem = document.createElement("p");
//             // elem.innerHTML = res;
//             // document.getElementById("pyramid").appendChild(elem);
//     }
//         else{
//             res = "#".repeat(i + 2);
//             // elem = document.createElement("p");
//             // elem.innerHTML = res;
//             // document.getElementById("pyramid").appendChild(elem);

//         }

        function printPyramid(height) {
            for (let i = 2; i < height + 2; ++i) {
                res = (`${' '.repeat(height + 1 - i)}${'&#9746'.repeat(i)}`);
            
                elem = document.createElement("p");
                elem.innerHTML = res;
                document.getElementById("pyramid").appendChild(elem); 
            }
        }
        document.getElementById("construction").remove(); 
    


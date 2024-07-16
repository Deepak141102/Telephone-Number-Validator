function verfying() {
  let val = document.getElementById("no-ref").value;
  let infor = document.getElementById("info");

  console.log(val.length);
if(val===""){
    infor.innerText+="Enter something, bro\n";
}
  else if (val.length === 10) {
    infor.innerText += "this is valid\n";
  } else if (isNaN(val)) {
    infor.innerText += `Entered data type is not acceptable\n`;
  } else if(val.length !== 10) {
    infor.innerText += `${val} is invalid\n`;
  }
 
}

function clearall() {
  document.getElementById("info").innerText = "";
  document.getElementById('no-ref').value=""
}
// function verfying(){
// let a ='lokesh'
// let infor=document.getElementById('info');

// if(a.length===6){
//     infor.innerText='this is true'
// }else{
//     infor.innerText='this not is true'

// }

// }

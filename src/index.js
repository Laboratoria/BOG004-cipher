import cipher from './cipher.js';

console.log(cipher);

document.getElementById("instrucciones").addEventListener("click", ()=>{
    window.alert("Holi");
  });

  document.getElementById("button").addEventListener("click", ()=>{
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("rango").value;
    offset = parseInt(offset);
    let newWord = encode(offset, string);
    document.getElementById("texto").innerHTML = newWord;
  });

  document.getElementById("buton").addEventListener("click", ()=>{
    let string = document.getElementById("input-original").value;
    let offset = document.getElementById("rango").value;
    offset = parseInt(offset);
    let newWord = decode(offset, string);
    document.getElementById("texto").innerHTML = newWord;
  });
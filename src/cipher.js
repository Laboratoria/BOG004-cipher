const cipher = {

  encode : function(offset, string){
    let arrayFrase = [];
    let newWord;
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let formula = ((numberAscii - 65 + offset)% 26) + 65;
      let newWord = String.fromCharCode(formula);
      arrayFrase.push(newWord);
      newWord = arrayFrase.join("");
    }
    return newWord;
  }

  decode : function(offset, string){
    let arrayFrase = [];
    let newWord;
    for(let i = 0; i < string.length; i++){
      let numberAscii = string.charCodeAt(i);
      let formula = ((numberAscii - 65 - offset)% 26) + 65;
      if (formula < 65) {
        formula = formula + 26;
      }
      let newWord = String.fromCharCode(formula);
      arrayFrase.push(newWord);
      newWord = arrayFrase.join("");
    }
    return newWord;
  }

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

};


export default cipher;

const cipher = {

  //primera prueba
  //enconde : function () {
    //let string = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //let offset = 33;
    //let resultado = (offset + string) % 26;
    //console.log(string[resultado]);
  //}

  enconde : function (){
    let string = "Poyo";
    let offset = 4;
    let nuevaPalabra;
    for(let i = 0; i < string.length; i++) {
      let numberAscii = string.charCodeAt(i);
      let problem = ((numberAscii - 65 + offset)% 26) + 65;
      nuevaPalabra =  String.fromCharCode(problem);
    }
    
    return nuevaPalabra;

  }

  
};


export default cipher;

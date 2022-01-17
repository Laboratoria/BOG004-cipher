const cipher = {
  enconde : function () {
    let string = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let offset = 33;
    let resultado = (offset + string) % 26;
    console.log(string[resultado]);
  }

  
};

export default cipher;

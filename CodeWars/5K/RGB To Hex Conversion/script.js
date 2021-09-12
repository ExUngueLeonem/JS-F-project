
function rgb(r, g, b){
    let result = '';
    for (let arg of [...arguments]) {

        let hex = Number(arg).toString(16);

        if (String(hex).length < 2) {
            hex = '0' + hex;
        }

        result += hex;
    }

    result = result.toUpperCase();
    return result;
  }

  console.log(rgb(150, 130, 180));  

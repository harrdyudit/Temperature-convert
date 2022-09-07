const calculateTemp = () => {
  const temp = document.getElementById("temp").value;
  const diff = document.getElementById("temp_diff");
  const valueTemp = diff.options[diff.selectedIndex].value;
  let results;
  // convert temperatures
  const celtoFah = (val) => {
    let fah = ((val / 5) * 9 + 32).toFixed(1);
    return fah;
  };
  const fahtoCel = (val) => {
    let cel = (((val - 32) * 5) / 9).toFixed(1);
    return cel;
  };
  const keltoFah = (val) => {
    let cel = (val - 273.15).toFixed(1);
    return cel;
  };
  console.log(valueTemp);

  //   if value == given temperature" " so call a function and assign it to a results variable we call 3 fucntion and we did call these function  on top
  if (valueTemp == "cel") {
    results = celtoFah(temp);
    document.getElementById("result").innerHTML = ` ${results}° Celsius `;
  } else if (valueTemp == "kel") {
    results = keltoFah(temp);
    document.getElementById("result").innerHTML = `${results}° kelvin`;
  } else {
    results = fahtoCel(temp);
    document.getElementById("result").innerHTML = `${results}° Fahrenheit`;
  }
};

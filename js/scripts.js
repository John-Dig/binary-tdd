let input = 11
function numConv(input){
  let inputS = input.toString();
  let inputA = [];
  for(let i = 0; i < inputS.length; i++) {
    inputA[i] = inputS.charAt(i)
  }
  let inputAR = inputA.reverse();
  let outputA = [0];
  for(let i = 0; i < inputAR.length; i++) {
    console.log("input Array Reversed " +inputAR[i]);
    outputA[i] = inputAR[i] * (2 **(inputAR.length-i));
  }
  console.log(outputA);
  let outputSum = outputA.reduce((a,b) => a + b, 0);
  console.log(outputSum);
};

numConv(input);

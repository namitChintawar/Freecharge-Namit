// let setColour = function(color){
//     return {value:color}
// };
let setColour = color => ({value:color});
let bgColor=setColour("blue");
console.log(bgColor.value);
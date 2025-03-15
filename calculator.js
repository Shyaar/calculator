const nums = [
    "AC","+/-","%","/",
    7,8,9,"*",
    4,5,6,"-",
    1,2,3,"+",
    "",".",0,"="
];
const rS = ["/","*","-","+","="]  
const tS = ["AC","+/_","%"]  

for(i =0; i<nums.length; i++){
    let val = nums[i];
    let numBtns = document.createElement('button')
    numBtns.className = "bg-black p-6 rounded-full text-white w-[70px] h-[70px]"
    numBtns.innerText = val
    document.getElementById('keys').appendChild(numBtns)

}




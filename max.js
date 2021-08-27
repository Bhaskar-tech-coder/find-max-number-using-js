function getArrayMax(array) {
    return Math.max.apply(null, array);
}
var num = [11, 54, 32, 92, 99, 68, 43];
var maxNum = getArrayMax(num);
document.getElementById("num").innerHTML=num;
document.getElementById("max").innerHTML=maxNum;
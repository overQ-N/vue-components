const arr = [1,2,[3,[4,5,[6,8]]]]
const deepFlat = (arr)=>[].concat(...arr.map(v=>Array.isArray(v)?deepFlat(v):v))
console.log(deepFlat(arr))
const arr2 = [1,2,3,4,5,6,7]
console.log(arr2.slice(0,2))
// console.log(!!0)
var a = un
console.log()

if(a===null||a===undefined||a===''){
  console.log(1)
}
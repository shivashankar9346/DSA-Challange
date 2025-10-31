const result=[];
function generateSubsets(str,index,subset){
    if(index === str.length){
        result.push(subset);
        return;
    }
    generateSubsets(str,index+1,subset)
    generateSubsets(str,index+1,subset+str[index])
}
generateSubsets("abc",0,'')
console.log(result);

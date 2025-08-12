let txt = "forxxorfxdofr"
let  pat = "for"

function anagrams(txt,pat){
    let counter =0;

    let patsorted= pat.split('').sort().join('');
    for(let i=0;i<=txt.length-pat.length;i++){
        let window = txt.substring(i,i+pat.length);
        if(window.split('').sort().join('')===patsorted){
            counter++
        }
    }
    return counter;
    
}
console.log(anagrams(txt,pat));

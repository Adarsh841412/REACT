function getLottery(n){

    let arr=[];

    for(let i=0; i<n; i++){

        let a=Math.floor(Math.random()*10);
        arr.push(a);
    }
    return arr;
}


function sum(arr){

let res=0;
arr.forEach((el)=>{
    res=res+el;
})

return res;
}

export{getLottery,sum};
function mincost(arr){
 let cost = 0
 let n = arr.length
 for(let i =0;i<n-1;i++){
        arr = arr.sort((a,b)=>a-b)
        let min1 = arr.shift()
        let min2 = arr.shift()
        arr.push(min1+min2)
        cost += min1+min2
        console.log(arr)
    }
    return cost
}

module.exports=mincost;

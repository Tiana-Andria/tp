function differenceMaxMin(tab)
{
    let min = tab.sort((a,b)=> a-b)[0];
    let max = tab.sort((a,b)=> a-b).reverse()[0];

    return max-min;
}

console.log(differenceMaxMin([3,7,2,9,45,11]));
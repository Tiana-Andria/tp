function greatNumber (tab){
    let max = tab[0];
    let i = 1;

    for (i; i<tab.length; i++)
    {
        if (tab[i] > max){
            max = tab[i];
        }
    }

    return max;
}

console.log(greatNumber([23, 13, 67, 90, 45]))
function onlyPair(tab){
    let tabPair = [];
    let i =0;

    while (i<tab.length){
        if (tab[i]%2 ==0){
            tabPair.push(tab[i]);
        }
        i++;
    }

    return tabPair;
}

console.log(onlyPair([23, 13, 24, 63, 20, 8,67, 90, 45]))
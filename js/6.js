function trieDecroissant(tab){
    let tab1 = tab.sort((a,b)=> a-b);
    let newTab = tab1.reverse();
    return newTab
}

let tab = [3,7,2,9,0,45, 11]

console.log(trieDecroissant(tab));



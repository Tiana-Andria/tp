function sommeElementTab(tab){
    let i = 0;
    let somme = 0;

    while(i<tab.length){
        somme = somme+ tab[i];
        i++;
    }

    return somme;


}

console.log(sommeElementTab([5,7,3]));
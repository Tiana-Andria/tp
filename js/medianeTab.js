function medianeTab(tab){
    let long = tab.length;
    let x = tab.length-1;
    let mediane = parseInt(long/2)

    if (long %2 == 0){
        return tab[mediane-1];
    }
    else
    {
        return tab[mediane];
    }

}

console.log(medianeTab([23, 13, 67, 7]));
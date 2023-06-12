function factoriel(nbre){
    let somme = 1;
    let  x = nbre-1;
    if (nbre == 0 || nbre == 1)
    {
        return 1;
    }
    else
    {
        for(let i = 1 ; i<=nbre; i++)
        {
            somme = somme*i;
        }
    }
    return somme;
}

console.log(factoriel(4));
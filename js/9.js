function isnombreParfait(nb){
    let somme = 0;
    let x = [];

    for (let i =0; i<nb; i++)
    {
        if (nb %i === 0)
        {
            x.push(i);
        }

    }

    for (let j = 0; j<x.length; j++)
    {
        somme = somme + x[j];
    }

    if (somme === nb)
    {
        return true;
    }

    return false;
}

console.log(isnombreParfait(28));
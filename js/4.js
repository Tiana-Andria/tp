function sommeChiffreInNumber(nb){
    let x = String(nb);
    let y = x.split('');

    let somme = 0;

    for (let i =0; i<y.length; i++)
    {
        somme = somme + parseInt(x[i]);
    }

    return somme;
}


console.log(sommeChiffreInNumber(234))
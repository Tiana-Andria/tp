function nombreMotInChaine(chaine)
{
    let somme = 0;
    let x = chaine.split('')

    for (let i = 0; i<x.length; i++){
        if (x[i] !== " ")
        {
            somme++;
        }
    }
    return somme;
}

console.log(nombreMotInChaine("bonjour le monde"));
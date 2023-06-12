function nombreVoyelle(phrase){
    let nombre = 0;
    const voyelle = ["a", "e", "i", "o", "u", "y"] ;
    let p = phrase.split('');

    for(let i = 0; i<p.length; i++){
        
        for(let j = 0; j<voyelle.length; j++)
        {
            if (p[i] == voyelle[j])
            {
                nombre++;
            }
        }

    }
    return(nombre);

}


console.log(nombreVoyelle("Salut tous le monde, il fait beau aujourd'hui !!!"));
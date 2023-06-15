function inverserChaine(chaine)
{
    chaine = chaine.split(" ").reverse();

    let c = "";
    
    for (let i =0; i<chaine.length; i++)
    {
        c = c + " " +chaine[i];
    }

    return c;
}


console.log(inverserChaine("Hello World"));


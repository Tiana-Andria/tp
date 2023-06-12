function chaineLongue(tab)
{
    let mot = tab.split(" ");

    let max = mot[0];

    for (let i =0; i<mot.length; i++){
        for (let j = 1; j<tab[j].split('').length; j++)
        {
            if (max<tab[j].split().length)
            {
                max = tab[j]
            }
        }
    }
    return max;
}

console.log(chaineLongue(["Hello", "le", "amis", "Holaaa"]));
function isNumberPresent(chaine){
    let isNumber = false;
    let ch = chaine.split('');


    for (let i = 0; i<ch.length; i++)
    {
        if (isNaN(ch[i]))
        {
            return false;
        }
    }

    return true
}

console.log(isNumberPresent("987654"));
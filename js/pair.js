function parite (nbre){
    if (nbre % 2 == 0)
    {
        alert("Le nombre est paire");
    }
    else{
        alert("le nombre est impaire");
    }
}

let x = parseInt(prompt("Entrez un nombre"));

parite(x);
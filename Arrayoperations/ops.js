const heroes=[
    {name:'Batman',
    realname:'Brucewayne',
    power:'Mind & technology',
    base:'Gotham city',
    teams:['Justice league','Team Batman'],
    info:{archenemy:'Bane',trainer:`Ra'sAlGhul`}
    },
    {name:'Superman',
    realname:'Clark kent/Kal-el',
    power:'Super Strength',
    base:'Metropolis',
    teams:['Justice league','Team superman'],
    info:{archenemy:'Lex luthor',trainer:'none'}
    }
    ]; //Array of objects
const heroNames=heroes.map(hero=>{
    return hero.name;
}); //returning specific elements of array
console.log(heroNames);
const selectedHero=heroes.filter(hero=>{
    return hero.name=='Batman';
}); //returning selected element
let {base,realname}=selectedHero;
console.log(base);
console.log(realname);
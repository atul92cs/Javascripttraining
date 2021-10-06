const hero={
    name:'Batman',
    realname:'Bruce Wayne',
    power:'Mind & Technology',
    base:'Gotham City',
    teams:['Justice league','Batman team'],
    info:{
        archenemy:'Bane',
        trainer:`Ra's al ghul`
    }
};
console.log(hero);
console.log(hero.teams);//old method
const {name,realname,power,info:{archenemy,trainer}}=hero;
console.log(name,realname,archenemy,trainer,power);

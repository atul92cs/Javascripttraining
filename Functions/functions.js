//Functions before Es6
const cars=['Audi','Buggati','Koinserrg','Bmw','Mercedes'];
function readCars()
{
    cars.map(car=>{
        console.log(car);
    });
}
//Functions after Es6
readCars();

filterCars=()=>{
    let selectedCar=cars.filter(car=>{
        return car=='Buggati';
    });
    console.log(selectedCar);
}
filterCars();
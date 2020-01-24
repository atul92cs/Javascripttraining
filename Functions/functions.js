//Functions before Es6
const cars=['Audi','Buggati','Koinserrg','Bmw','Mercedes'];
function readCars()
{
  for(i=0;i<cars.length;i++)
  {
      console.log(cars[i]);69
  }
}

readCars();
//Functions after Es6
filterCars=()=>{
    let selectedCar=cars.filter(car=>{
        return car=='Buggati';
    });
    console.log(selectedCar);
}
filterCars();
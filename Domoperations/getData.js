let companies=[
    {
        name:'BMW',
        origin:'Germany'
    },
    {
        name:'Audi',
        origin:'Germany'
    },
    {
        name:'Toyota',
        origin:'Japan'
    },
    {
       name:'Hyundai',
       origin:'South Korea'
    }];
getCompanies=()=>{
    companies.map(company=>{
        let companieslist=document.querySelector('#companies-list');
        let listdata=document.createElement('li');
        let listel=document.createTextNode(company.name);
        listdata.appendChild(listel);
        companieslist.appendChild(listdata);
    });
}
getCompanies();
loadCountries=()=>{
    companies.forEach(company=>{
        let countrylist=document.querySelector('#country-list');
        let country=document.createTextNode(company.origin);
        let countryli=document.createElement('li');
        countryli.appendChild(country);
        countrylist.appendChild(countryli);
    });
}
loadCountries();
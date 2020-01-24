let profiles=[];
getInput=(e)=>{
    e.preventDefault();
    let name=document.getElementById('name');
     console.log(name.value);
}
createId=e=>{
    e.preventDefault();
     let name=document.getElementById('username').value;
     let email=document.getElementById('useremail').value;
     let profile={};
     profile.name=name;
     profile.email=email;
     profiles.push(profile);
     console.log(profiles);
      name.value=' ';
      email.value=' ';
     getProfiles();
}
document.getElementById('name-form').addEventListener('submit',getInput);
document.getElementById('profile-form').addEventListener('submit',createId);
getProfiles=()=>{
   if(profiles.length<=0)
   {
      const message=document.getElementById('message');
      message.innerText='No data available';
   }
   else
   {
      profiles.forEach(profile=>{
          let profileel=document.createElement('li');
          let profileName=document.createTextNode(profile.name);
          let profileEmail=document.createTextNode(profile.email);
          let profilelist=document.getElementById('profile-list');
          profileel.appendChild(profileName);
          profileel.appendChild(profileEmail);
          profilelist.appendChild(profileel);
      });
   }
}
getProfiles();
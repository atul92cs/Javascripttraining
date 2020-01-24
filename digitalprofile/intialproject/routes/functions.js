const express=require('express');
const router=express.Router();
let profiles=[];
let selectedProfile;
router.post('/create',(req,res)=>{
    const {name,highschool,seniorsecondary,highschool,college,branch}=req.body;
    let profile={};
    profile.name=name;
    profile.highschool=highschool;
    profile.seniorsecondary=seniorsecondary;
    profile.college=college;
    profile.branch=branch;
    profiles.push(profile);
    res.status(200).json({
        msg:'profile created'
    });
});
router.get('/:name',(req,res)=>{
    const {name}=req.params;
     selectedProfile=profiles.map(profile=>{
        return profiles.name=name;
    });
     return selectedProfile;
});
router.post('/skill/add',(req,res)=>{
    const {name}=req.body;
    selectedProfile[0].skills.push(name);
    res.status(200).json({
        msg:'skill added'
    });
});
module.exports=router;
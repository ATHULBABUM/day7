/*console.log("before");
var Promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({id:1,name:"meera"})
        },1000);
});
Promise1.
then(function(user){
    console.log(user);
    return "to second then"
} ).then(function(msg){
    console.log(msg);
    return "to third then"
   /* var Promise1=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({id:1,name:"meera"})
            },1000);
*/
/*}).catch(function(err){
console.log("error")
})
console.log("after");*/

//promise inside function.
/*function myf(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({id:id,name:"akhil"})
        },1000);
    });
}
myf(4).then(function (user){
    console.log(user);
})*/



//promise using async 
/*async function myf(id){
    promise1= new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({id:id,name:"akhil"})
        },1000);
    });
    prom=await promise1;
    return prom;
}
myf(4).then(function (user){
    console.log(user);
})*/


//async also use like
/*async function myf(id){
    return await new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({id:id,name:"akhil"})
        },1000);
    });
}
myf(3).then(function (user){
    console.log(user);
})*/
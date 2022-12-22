var saludar= new Promise((resolve, reject)=> {
   
    setTimeout(()=>{
        let saludo="hola muy buenas a todos";
        saludo=false; //dar error en mensaje
        if(saludo){
            resolve(saludo)
        }else{
            reject("no hay saludo disponible");
        }
    },2000)
});
saludar.then(resultado =>{
    alert(resultado)
})
.catch(err =>{
    alert(err);
})
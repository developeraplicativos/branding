var init;
var listSEctionHeight = [];
document.querySelectorAll('section.sp').forEach(section => {
    listSEctionHeight.push(section.offsetHeight);
});
if( listSEctionHeight.length > 1 ){ listSEctionHeight[0] += 37 }
function goScroll(point){ 
    window.scrollTo({
        behavior: 'smooth', 'top': point
    });
} 
window.addEventListener('scroll', function(event){
    window.clearTimeout(init); 
    init = setTimeout(() => {
        // pego o valor 
        let scrollnow = window.scrollY; 
        document.querySelectorAll('section.sp').forEach( section => {
            if( scrollnow > (section.offsetTop * 0.8) && scrollnow < (section.offsetTop) ){ 
                goScroll(section.offsetTop);
                return;  
            };
        });
        /*      
        var alturaTotal;
        listSEctionHeight.forEach( position => {
            if( scrollnow > alturaTotal ){ 
                alturaTotal += position;
                console.log(alturaTotal);
            }else if( scrollnow > alturaTotal*0,9  ){
                window.scrollTo({
                    behavior: 'smooth', 'top': alturaTotal
                }); 
            }
        }); 
        */
        // comparo se esta menos de 10% do secion atual
        // jogo suavemente para o proximo section
    }, 1000);
})
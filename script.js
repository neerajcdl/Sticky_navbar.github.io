
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("menu-bar");
    
    if(window.pageYOffset >= 238){
       navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});

  /* ye sticky krne ke liye window event ko target karna hoga  */

/*  sticky class hum apni css ke ander define krege 'position sticky' ke sath 'top 0' or 'width 100%'lga skte hai or bhi property define kar skte the apne hisab se */

/* sab se phle hum ne liya window us par addEventListener lgaya ye hum input lene ke liye use karte hai yha input ke roop me scroll hai jo ki window par lga hai, ab esi scroll ke sath anonymous funciton(jis function ka name na ho) bnayenge or eske ander scrolling ka code karenge.
 yha jisse sticky bnana hai uski id get karenge or usse ek variable me rakh lenge jo hai 'menu-bar' ab condition ka use krege matlab jab--- "etna scroll ho jaye to sticky class lga do or es se (238) kam rhe to sticky class hta do"  es cheez ko krne ke liye hum use krenge if-else condition.
eske ander humne likha window.pageYOffset >= (window-size) ye to if ke round breket ke ander or ab curly breket ke ander target/add krenge us sticky class ko jo ki hume 'navbar' variable par lgani hai esko lgane ke liye aata hai classList or add lga ke classname(sticky)........esi tarh else part me clsassList ka opposite hai 'remove' jo ki es class(sticky) ko remove karne ke kam aayega  */


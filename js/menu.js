const menuBtn = document.querySelector('.menu');
  
        const menuSVG = document.querySelector('.menu svg path');
        const menuItems = gsap.utils.toArray('ul li a');

        let menuOpen = false;

     

        gsap.set(menuItems, {
            yPercent: 100
        })

        const navTl = gsap.timeline({
            defaults: {
                ease: 'power4.inOut',
                duration: 1
            }
        });

      
        var timeline = new TimelineMax();
        timeline.to("#d_right", {x:'-70%',scaleY:1.2,y:45, ease: "power1.out",duration:2, delay: -1.5 });
        timeline.to("#d_left", {x:'150%',duration:1, ease: "power1.out", delay: -1.5,});
        timeline.to(".nav1",  {x: '-45%',ease: "power1.out", duration:2, delay: -1.5,stagger: {each:0.5 }});
  
      
   
      
      
      
      
      
        timeline.staggerFrom(".menu ul li", 0.4, {x: -700, opacity: 0}, 0.1);
        
        timeline.reverse();
       
        menuBtn.addEventListener('click', () => {
     
        if (!menuOpen) {
         timeline.play();
             menuOpen = true;
         } else {
           timeline.reverse();
             menuOpen = false;
         }
     })
     

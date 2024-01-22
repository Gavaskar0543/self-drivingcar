const mycanvas = document.getElementById('mycanvas');
/*Building road */
mycanvas.height = window.innerHeight;
mycanvas.width = 200;

const ctx = mycanvas.getContext('2d');
                   /*x,y,width,height */
const car = new Car(100,100,30,50);
//create car
car.draw(ctx);
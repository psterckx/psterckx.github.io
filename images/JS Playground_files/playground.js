canvas = document.getElementById('testCanvas');
context = canvas.getContext('2d');

var gravity = 1;
var ground_friction = .95;
var wall_friction = 0.8;

class Ball {
    constructor(x,y,dx,dy,radius,color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    update() {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * ground_friction;
            this.dx = this.dx * ground_friction;
        } else {
            this.dy += gravity;
        }

        if (this.x - this.radius + this.dx < 0) {
            this.dx = -this.dx * wall_friction;
        } else if (this.x + this.radius + this.dx >= canvas.width) {
            this.dx = -this.dx * wall_friction;
        }

        // this.dx *= .995;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };

    draw() {
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };
}

var ball1;
var ball2;
function init() {
    ball1 = new Ball(canvas.width/4,canvas.height-500,3,0,30,"orange");
    ball2 = new Ball(canvas.width/2,canvas.height-500,-3,0,30,"blue");
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width,canvas.height);
    ball1.update();
    ball2.update();

    // var dist = Math.pow((ball1.x - ball2.x),2) + Math.pow((ball1.y - ball2.y),2);
    // if (dist < ball1.radius || dist < ball2.radius) {
    //     ball1.dx = -ball1.dx;
    //     ball1.dy = -ball1.dy;
    //     ball2.dx = -ball2.dx;
    //     ball2.dy = -ball2.dy;
    // }
}

init();
animate();

// context.beginPath();
// context.arc(200,100,50,2*Math.PI,false);
// context.fill();
// context.stroke();

// ball = new Ball(200,100 , 30,"red");
// ball.draw();


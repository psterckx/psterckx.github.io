const coverContent = document.getElementById('cover-content');
const mobileMenu = document.getElementById('mobile-menu');
const coverContainer = document.getElementById('cover-container');
const body = document.getElementsByTagName('body')[0];
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuToggleButton = document.getElementById('mobile-menu-button');

// const html = document.getElementsByTagName('html');

let mobileMenuVisible = false;

function toggleMobileMenu() {
    // coverContent.classList.toggle('d-none');
    // mobileMenu.classList.toggle('d-none');
    coverContainer.classList.toggle('bg-dark');
    mobileMenuIcon.classList.toggle('fa-bars');
    mobileMenuIcon.classList.toggle('fa-times');

    mobileMenuToggleButton.classList.toggle('btn-dark');
    mobileMenuToggleButton.classList.toggle('btn-danger');

    if (mobileMenuVisible) { // hide menu
        mobileMenu.style.setProperty('visibility', 'hidden');
        mobileMenu.style.setProperty('opacity', '0');

        coverContent.style.setProperty('visibility', 'visible');
        coverContent.style.setProperty('opacity', '1');

        body.style.setProperty('overflow', 'visible');
    } else { // show menu
        mobileMenu.style.setProperty('visibility', 'visible');
        mobileMenu.style.setProperty('opacity', '1');

        coverContent.style.setProperty('visibility', 'hidden');
        coverContent.style.setProperty('opacity', '0');

        body.style.setProperty('overflow', 'hidden');
    }

    mobileMenuVisible = !mobileMenuVisible;
}


// fun 
// todo: use rad instead of deg!
// const arm1 = document.getElementById('arm1');
// const arm2 = document.getElementById('arm2')

let arm2x = null;
let arm2y = null;
let arm2theta = -0.78539816339;
function rotatel1(start, end, tick) {
    let d = start < end ? 1 : -1;
    // let tick = (duration / Math.abs(start - end)) / 500;
    // console.log(Math.max(tick, 4) * Math.abs(start - end) * 500)
    // tick = 6;
    let angle = start;
    const l = 400;
    // let xi = -l*Math.cos(start);
    // let yi = -l*Math.sin(start);

    const interval = setInterval(() => {
        arm1.style.transform = `rotate(${angle}rad)`;

        const x = -l * Math.cos(angle) + l;
        const y = -l * Math.sin(angle);
        arm2.style.transform = `translate(${x}px, ${y}px) rotate(${arm2theta}rad)`;

        angle += d / 500;
        if (d > 0) {
            if (angle > end) {
                clearInterval(interval);
                arm2x = x;
                arm2y = y;
            }
        } else {
            if (angle < end) {
                clearInterval(interval);
                arm2x = x;
                arm2y = y;
            }
        }
    }, tick);
}

function rotatel2(start, end, tick) {
    let d = start < end ? 1 : -1;
    let angle = start;

    const interval = setInterval(() => {
        arm2.style.transform = `translate(${arm2x}px, ${arm2y}px) rotate(${angle}rad)`;

        angle += d / 500;
        if (d > 0) {
            if (angle > end) {
                clearInterval(interval);
                arm2theta = end;
            }
        } else {
            if (angle < end) {
                clearInterval(interval);
                arm2theta = end;
            }
        }
    }, tick);
}

// setTimeout(() => {
//     rotatel1(-Math.PI/8, 0, 8)
// }, 500);

// setTimeout(() => {
//     rotatel2(-Math.PI/4, 0, 5)
// }, 2200);

// setTimeout(() => {
//     rotatel1(0, -Math.PI/8, 8)
// }, 500);

// setTimeout(() => {
//     rotatel2(0, -Math.PI/4, 8)
// }, 3000);

// setTimeout(() => {
//     rotatel1(-Math.PI/8, 0, 8)
// }, 7000);


// setTimeout(() => {
//     rotatel2(-Math.PI/4, 0, 8)
// }, 11000);


// canvas
function fix_dpi() {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}

//get DPI
// let dpi = window.devicePixelRatio;
//get canvas
// let canvas = document.getElementById('canvas');
//get context
// let c = canvas.getContext('2d');
// const cWidth = canvas.getBoundingClientRect().width
// const cHeight = canvas.getBoundingClientRect().height


// fix_dpi();


function init() {

    let rad = 0.01;
    let t = 0;

    let arm = {
        x: 600,
        y: 600,
        width: 300,
        height: 25,
        tLast: 0,
        tRecord: 0,
        centerX: function() {
            return this.x + this.width/2
        },
        centerY: function() {
            return this.y + this.height/2
        },
        center: function() {
            return {
                x: this.x + this.width/2,
                y: this.y + this.height/2
            }
        },
        base: function() {
            return {
                x: this.x,
                y: this.centerY()
            }
        },
        tip: function() {
            return {
                x: this.x + this.width,
                y: this.centerY()
            }
        }
    }

    function draw() {
        c.clearRect(0, 0, cWidth*2, cHeight*2);

        // c.translate(arm.base().x, arm.base().y);
        // c.rotate(t/100);
        // c.translate(-arm.base().x, -arm.base().y);

        // over 10 time, go from 0 rad to pi/2 rad

        const a = 1;
        const b = 2;
        const d = 3;
        console.log(t.toFixed(1))
        if (t < a) {
            // console.log('a');
            c.translate(arm.base().x, arm.base().y);
            c.rotate(t);
            c.translate(-arm.base().x, -arm.base().y);
        } else if (t < b) {
            // console.log('b');
            c.translate(arm.base().x, arm.base().y);
            c.rotate(a);
            c.translate(-arm.base().x, -arm.base().y);
        } else if (t < d) {
            // console.log('d');
            c.translate(arm.base().x, arm.base().y);
            c.rotate(-t-3.3);
            c.translate(-arm.base().x, -arm.base().y);
        } else {
            // console.log('done')
            c.translate(arm.base().x, arm.base().y);
            c.rotate(b);
            c.translate(-arm.base().x, -arm.base().y);
        }

        
        

        c.fillRect(arm.x, arm.y, arm.width, arm.height);
        c.setTransform(1, 0, 0, 1, 0, 0);
        t += .01;


        requestAnimationFrame(draw)
    }

    requestAnimationFrame(draw)

}

// init()
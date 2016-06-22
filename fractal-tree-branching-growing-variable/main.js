
function setup() {
    var canvas = createCanvas(960, 720);
    angle = PI / 4;
    count = 0;
    canvas.parent('sandbox');
    mult = 0.3;
    iteration = 0;
    num = 120;
}

function draw() {
    background(51);
    stroke(255);
    translate(960 / 2, height);
    branch(num);
    angle = angle + .02;
    ++count;
    if (count == 190) {
        mult = mult + 0.05;
        count = 0;
        ++iteration;
        num = num + 2;
        if (iteration == 10) {
            noLoop();
        }
    }
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(mult * len);
        pop();
        push();
        rotate(-angle);
        branch(len * mult)
        pop();
    } else {
    }
}


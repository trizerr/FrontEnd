function distance(x1,x2,y1,y2) {
    let  a, b;
    let distance;
    a = x2 - x1;
    b = y2 - y1;
    distance = Math.sqrt(a * a + b * b);
    return distance;
}
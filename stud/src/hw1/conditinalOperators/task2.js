function quarter(x,y) {
    if (x > 0 && y > 0) {
        return "1 quarter";
    } else if (x < 0 && y > 0) {
        return "2 quarter";
    } else if (x < 0 && y < 0) {
        return "3 quarter";
    } else if (x > 0 && y < 0) {
        return "4 quarter";
    } else{
        return "center";
    }
}
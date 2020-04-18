function grade(grade){
    if (grade > 0 && grade <= 19)
        return "F";
    if (grade >= 20 && grade <= 39)
        return "E";
    if (grade >= 40 && grade <= 59)
        return "D";
    if (grade >= 60 && grade <= 74)
        return "C";
    if (grade >= 75 && grade <= 89)
        return "B";
    if (grade >= 90 && grade <= 100)
        return "A";
    return "error";
}
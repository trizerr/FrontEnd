//block1
const regex1 = str => {
    return str.match(/a.b/g);
};
const regex2 = str => {
    return str.match(/a.{2}a/g);
};
const regex3 = str => {
    return str.match(/ab.a/g);
};

//block 2
const regex4 = str => {
    return str.match(/ab+a/g);
};
const regex5 = str => {
    return str.match(/ab*a/g);
};
const regex6 = str => {
    return str.match(/ab?a/g);
};
const regex7 = str => {
    return str.match(/ab*a/g);
};
const regex8 = str => {
    return str.match(/(ab)+/g);
};

//block 3
const regex9 = str => {
    return str.match(/(a\.a)/g);
};
const regex10 = str => {
    return str.match(/2\+3/g);
};
const regex11 = str => {
    return str.match(/2(\+)+3/g);
};
const regex12 = str => {
    return str.match(/2(\+)*3/g);
};
const regex13 = str => {
    return str.match(/\*q+\+/g);
};

//block 4

//bock 5
const regex15 = str => {
    return str.match(/ab{2,4}a/g);
};
const regex16 = str => {
    return str.match(/ab{0,3}a/g);
};
const regex17 = str => {
    return str.match(/ab{4,}a/g);
};

//block6
const regex18 = str => {
    return str.match(/a\da/g);
};
const regex19 = str => {
    return str.match(/a\d+a/g);
};
const regex20 = str => {
    return str.match(/a\d*a/g);
};
const regex21 = str => {
    return str.match(/a\Db/g);
};
const regex22 = str => {
    return str.match(/a\Wb/g);
};
const regex23 = str => {
    return str.replace(/\s/g,'!');
};

//block 7
const regex24 = str => {
    return str.match(/a[b,x,e]a/g);
};
const regex25 = str => {
    return str.match(/a[b,\.,\+,\*]a/g);
};
const regex26 = str => {
    return str.match(/a[3-7]a/g);
};
const regex27 = str => {
    return str.match(/a[a-g]a/g);
};
const regex28 = str => {
    return str.match(/a[a-f,j-z]a/g);
};
const regex29 = str => {
    return str.match(/a[a-f,A-Z]a/g);
};
const regex30 = str => {
    return str.match(/a[^e,x,\s]a/g);
};
const regex31 = str => {
    return str.match(/w[А-я]w/g);
};

//block 8
const regex32 = str => {
    return str.match(/a[^A-Z,\d,\s][a-z]*a/g);
};
const regex33 = str => {
    return str.match(/a[^\d,\s][a-z,A-Z]*a/g);
};
const regex34 = str => {
    return str.match(/a[a-z,\d]*a/g);
};
const regex35 = str => {
    return str.match(/[А-Я,а-я]+/g);
};

//block 9
const regex36 = str => {

    return str.replace(/^aaa/g,'!');
};
const regex37 = str => {

    return str.replace(/aaa$/g,'!');
};

//block 10
const regex38 = str => {
     return str.match(/a[xe]*a/g);
};
const regex39 = str => {
    return str.match(/aeea|ax+a/g);
};

//block 11
const regex40 = str => {

    return str.replace(/a\\a/g,'!');
};
const regex41 = str => {

    return str.replace(/a\\\\\\a/g,'!');
};

//block12
const regex42 = str => {

    return str.replace(/\/.[^\/]+\\/g,'!');
};

//block 13
const regex43 = str => {
    return str.replace(/(\w+)@(\w+)/g, '$2@$1' )
}
const regex44 = str => {
return str.replace(/(\d)/g, '$1$1' )
}

//block 14
const regex45 = str => {
    return  /(\w|\.|\-)+@[a-zA-Z]+\.[a-zA-Z]+/.test(str);
}
const regex46 = str => {
    return str.match(/(\w|\.|\-)+@[a-zA-Z]+\.[a-zA-Z]+/g);
}
const regex47 = str => {
    return /(\w|-)+\.\w+/.test(str);
}
const regex48 = str => {
    return /http:\/\/(\w|-)+\.\w+/.test(str);
}
const regex49 = str => {
    return /(http:\/\/(\w|-)+\.\w+)|(https:\/\/(\w|-)+\.\w+)/.test(str);
}
const regex50 = str => {
    return /(^http)|(^https)/.test(str);
}
const regex51 = str => {
    return /(txt$)|(html$)|(php$)/.test(str);
}
const regex52 = str => {
    return /(jpg$)|(jpeg$)/.test(str);
}
const regex53 = str => {
    return /^(\d){1,12}$/.test(str);
}
//block 15

const regex55 = str => {

    return str.replace(/(http:\/\/((\w|-)+\.\w+))/g, '<a href = "$1">$2</a>' )
}

const regex56 = str=> {
    return str.replace(/\s+/g, ' ' )
}
const regex57 = str=> {
    return str.replace(/\/\*.+\*\//g, '')
}
const regex58 = str=> {
    return str.replace(/<!--.+-->/g, '')
}

//block 16
const regex59 = str=> {
    return str.replace(/a+(?=b)/g, '!')
}
const regex60 = str=> {
    return str.replace(/a{3}(?!b)/g, '!')
}

//block 17

const regex61 = str=> {
    return str.replace(/\d+/g, d =>{
        return Math.pow(d,2)
    } );
}
const regex62 = str=> {
    return str.replace(/(?<=')\d+(?=')/g, d =>{
        return d*2
    } );
}
const regex63 = str=> {
    return str.replace(/(?<={)[^{].+[^}](?=})/g, d =>{
        return reverseString(d);
    } );
}
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
const regex64 = str=> {
    let number1 = parseInt(str.match(/(\d+) \+/g));
    let number2 = parseInt(str.match(/(?<=\+ )(\d+)/g));
    let result = number1+number2;
    return str.replace(/(?<==)/g,' '+result.toString())
}

const regex65 = str=> {
    return /(19|20)\d\d/.test(str);
}
const regex66 = str=> {
    return /\d\d:\d\d/.test(str);
}
const regex67 = str=> {
    return /(\d|\d\d)\.\d\d( am| pm)/.test(str);
}

module.exports = {
    regex1, regex2, regex3, regex4, regex5, regex6, regex7, regex8, regex9, regex10,
    regex11, regex12, regex13, regex15, regex16, regex17, regex18, regex19, regex20,
    regex21, regex22, regex23, regex24, regex25, regex26, regex27, regex28, regex29, regex30,
    regex31, regex32, regex33, regex34, regex35, regex36, regex37, regex38, regex39, regex40,
    regex41, regex42, regex43, regex44, regex45, regex46, regex47, regex48, regex49, regex50,
    regex51, regex52, regex53,  regex55, regex56, regex57, regex58, regex59, regex60,
    regex61, regex62, regex63, regex64, regex65, regex66, regex67
};


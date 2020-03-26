const {describe} = require('mocha');
const regex = require('../index');
describe('task1', function () {
    it('Найти строки ahb, acb, aeb', function () {
        assert.deepEqual(regex.regex1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb']);
    });
});

describe('task2', function () {
    it('Найти строки abba adca abea', function () {
        assert.deepEqual(regex.regex2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea']);
    });
});

describe('task3', function () {
    it('Найти строки abba и abea', function () {
        assert.deepEqual(regex.regex3('aba aca aea abba adca abea'), ['abba', 'abea']);
    });
});

describe('task4', function () {
    it('Найти строки aba, abba, abbba', function () {
        assert.deepEqual(regex.regex4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba']);
    });
});

describe('task5', function () {
    it('Найти строки aa, aba, abba, abbba', function () {
        assert.deepEqual(regex.regex5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
});

describe('task6', function () {
    it('Найти строки aa, aba', function () {
        assert.deepEqual(regex.regex6('aa aba abba abbba abca abea'), ['aa', 'aba']);
    });
});

describe('task7', function () {
    it('Найти строки aa, aba, abba, abbba', function () {
        assert.deepEqual(regex.regex7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
});

describe('task8', function () {
    it('Найти строки ab abab abab abababab abea', function () {
        assert.deepEqual(regex.regex8('ab abab abab abababab abea'), ['ab', 'abab', 'abab', 'abababab', 'ab']);
    });
});

describe('task9', function () {
    it('Найти строки a.a', function () {
        assert.deepEqual(regex.regex9('a.a aba aea'), ['a.a']);
    });
});

describe('task10', function () {
    it('Найти строки 2+3', function () {
        assert.deepEqual(regex.regex10('2+3 223 2223'), ['2+3']);
    });
});

describe('task11', function () {
    it('Найти строки 2+3, 2++3, 2+++3', function () {
        assert.deepEqual(regex.regex11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3']);
    });
});

describe('task12', function () {
    it('Найти строки 23, 2+3, 2++3, 2+++3', function () {
        assert.deepEqual(regex.regex12('23 2+3 2++3 2+++3 445 677'), ['23', '2+3', '2++3', '2+++3']);
    });
});

describe('task13', function () {
    it('Найти строки *q+, *qq+, *qqq+', function () {
        assert.deepEqual(regex.regex13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+']);
    });
});



describe('task15', function () {
    it('Найти строки abba, abbba, abbbba и только их', function () {
        assert.deepEqual(regex.regex15('aa aba abba abbba abbbba abbbbba'), ['abba', 'abbba', 'abbbba']);
    });
});

describe('task16', function () {
    it('Найти строки вида aba, в которых \'b\' встречается менее 3-х раз (включительно).', function () {
        assert.deepEqual(regex.regex16('aa aba abba abbba abbbba abbbbba'), ['aa','aba', 'abba', 'abbba']);
    });
});

describe('task17', function () {
    it('Найти строки вида aba, в которых \'b\' встречается более 4-х раз (включительно)', function () {
        assert.deepEqual(regex.regex17('aa aba abba abbba abbbba abbbbba'), ['abbbba', 'abbbbba']);
    });
});

describe('task18', function () {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними одна цифра', function () {
        assert.deepEqual(regex.regex18('a1a a2a a3a a4a a5a aba aca'), ['a1a', 'a2a', 'a3a', 'a4a', 'a5a']);
    });
});

describe('task19', function () {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними любое количество цифр', function () {
        assert.deepEqual(regex.regex19('a1a a22a a333a a4444a a55555a aba aca'), ['a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']);
    });
});

describe('task20', function () {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними любое количество цифр (в том числе и ноль)', function () {
        assert.deepEqual(regex.regex20('aa a1a a22a a333a a4444a a55555a aba aca'), ['aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']);
    });
});

describe('task21', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\' и \'b\', а между ними - не число', function () {
        assert.deepEqual(regex.regex21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb']);
    });
});

describe('task22', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\' и \'b\', а между ними - не буква и не цифра', function () {
        assert.deepEqual(regex.regex22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b']);
    });
});

describe('task23', function () {
    it('Заменить все пробелы на \'!\'', function () {
        assert.deepEqual(regex.regex23('ave a#a a2a a$a a4a a5a a-a aca'), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca');
    });
});

describe('task24', function () {
    it('Найти строки aba, aea, axa, не затронув остальных', function () {
        assert.deepEqual(regex.regex24('aba aea aca aza axa'), ['aba', 'aea', 'axa']);
    });
});

describe('task25', function () {
    it('Найти строки aba, a.a, a+a, a*a, не затронув остальных', function () {
        assert.deepEqual(regex.regex25('aba aea aca aza axa a.a a+a a*a'), ['aba', 'a.a', 'a+a', 'a*a']);
    });
});

describe('task26', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - цифра от 3-х до 7-ми', function () {
        assert.deepEqual(regex.regex26('a0a a2a a4a a6a a7a a.a a+a a*a'), ['a4a', 'a6a', 'a7a']);
    });
});

describe('task27', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до g.', function () {
        assert.deepEqual(regex.regex27('aba aea aca aza axa a.a a+a a*a'), ['aba', 'aea', 'aca']);
    });
});

describe('task28', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до f и от j до z', function () {
        assert.deepEqual(regex.regex28('aba aea aca aza axa a.a aha a*a'), ['aba', 'aea', 'aca', 'aza', 'axa']);
    });
});

describe('task29', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до f и от A до Z', function () {
        assert.deepEqual(regex.regex29('aba aea aCa aza aXa aOa aka ala'), ['aba', 'aea', 'aCa', 'aXa', 'aOa']);
    });
});

describe('task30', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - не \'e\' и не \'x\'', function () {
        assert.deepEqual(regex.regex30('aba aea aca aza axa a-a a#a'), ['aba', 'aca', 'aza', 'a-a', 'a#a']);
    });
});

describe('task31', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'w\', а между ними - буква кириллицы', function () {
        assert.deepEqual(regex.regex31('wйw wяw wqw'), ['wйw', 'wяw']);
    });
});

describe('task32', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие латинские буквы, не затронув остальных', function () {
        assert.deepEqual(regex.regex32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza']);
    });
});

describe('task33', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие и большие латинские буквы, не затронув остальных', function () {
        assert.deepEqual(regex.regex33('aAXa aeffa aGha aza ax23a a3sSa'), ['aAXa', 'aeffa', 'aGha', 'aza']);
    });
});

describe('task34', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие латинские буквы и цифры, не затронув остальных', function () {
        assert.deepEqual(regex.regex34('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza', 'ax23a']);
    });
});

describe('task35', function () {
    it('Найти все слова по шаблону: любая кириллическая буква любое количество раз', function () {
        assert.deepEqual(regex.regex35('ааа ббб ззз ййй ААА БББ ЗЗЗ ЙЙЙ'), ['ааа', 'ббб', 'ззз', 'ййй', 'ААА', 'БББ', 'ЗЗЗ', 'ЙЙЙ']);
    });
});

describe('task36', function () {
    it('Заменить первое \'aaa\' на \'!\'', function () {
        assert.deepEqual(regex.regex36('aaa aaa aaa'), '! aaa aaa');
    });
});

describe('task37', function () {
    it('Заменить первое \'aaa\' на \'!\'', function () {
        assert.deepEqual(regex.regex37('aaa aaa aaa'), 'aaa aaa !');
    });
});

describe('task38', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква \'x\' или буква \'e\' любое количество раз', function () {
        assert.deepEqual(regex.regex38('aeeea aeea aea axa axxa axxxa'), ['aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa']);
    });
});

describe('task39', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - или буква \'e\' два раза или буква \'x\' любое количество раз', function () {
        assert.deepEqual(regex.regex39('aeeea aeea aea axa axxa axxxa'), ['aeea', 'axa', 'axxa', 'axxxa']);
    });
});

describe('task40', function () {
    it('Заменить строку \'a\\a\' на \'!\'', function () {
        assert.deepEqual(regex.regex40('a\\a abc'), '! abc');
    });
});

describe('task41', function () {
    it('Заменить строку \'a\\\\\\a\' на \'!\'', function () {
        assert.deepEqual(regex.regex41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !');
});
});

describe('task42', function () {
    it('Заменить содержимое всех конструкций /...\\ на \'!\'', function () {
        assert.deepEqual(regex.regex42('bbb \/aaa\\ bbb \/ccc\\'), 'bbb ! bbb !');
    });
});

describe('task43', function () {
    it('Поменять местами то, что стоит до @ на то, что стоит после нее', function () {
        assert.deepEqual(regex.regex43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7');
    });
});

describe('task44', function () {
    it('Найти все цифры и удвоить их количество', function () {
        assert.deepEqual(regex.regex44('a1b2c3'), 'a11b22c33');
    });
});

describe('task45', function () {
    it('Определить, что переданная строка является емэйлом mymail@mail.ru', function () {
        assert.deepEqual(regex.regex45('mymail@mail.ru'), true);
    });
    it('Определить, что переданная строка является емэйлом my.mail@mail.ru', function () {
        assert.deepEqual(regex.regex45('my.mail@mail.ru'), true);
    });
    it('Определить, что переданная строка является емэйлом my-mail@mail.ru', function () {
        assert.deepEqual(regex.regex45('my-mail@mail.ru'), true);
    });
    it('Определить, что переданная строка является емэйлом mail@mail.com', function () {
        assert.deepEqual(regex.regex45('mail@mail.com'), true);
    });
    it('Определить, что переданная строка является емэйлом mail.com', function () {
        assert.deepEqual(regex.regex45('mail.com'), false);
    });
});

describe('task46', function () {
    it('Выделить из текста емейлы: "Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com"',
        function () {
            assert.deepEqual(regex.regex46('Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com'),
                ['mymail@mail.ru', 'my.mail@mail.ru', 'my-mail@mail.ru', 'my_mail@mail.ru', 'mail@mail.com']);
        });
});

describe('task47', function () {
    it('Определить, что переданная строка является доменом site.ru', function () {
        assert.deepEqual(regex.regex47('site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(regex.regex47('my-site.com'), true);
    });
    it('Определить, что переданная строка является доменом my-site', function () {
        assert.deepEqual(regex.regex47('my-site'), false);
    });
});

describe('task48', function () {
    it('Определить, что переданная строка является доменом http://site.ru', function () {
        assert.deepEqual(regex.regex48('http://site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(regex.regex48('my-site.com'), false);
    });
    it('Определить, что переданная строка является доменом http://site.com', function () {
        assert.deepEqual(regex.regex48('http://site.com'), true);
    });
});

describe('task49', function () {
    it('Определить, что переданная строка является доменом http://site.ru', function () {
        assert.deepEqual(regex.regex49('http://site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(regex.regex49('my-site.com'), false);
    });
    it('Определить, что переданная строка является доменом https://site.com', function () {
        assert.deepEqual(regex.regex49('https://site.com'), true);
    });
});

describe('task50', function () {
    it('Определить, что переданная строка является доменом http://site.ru', function () {
        assert.deepEqual(regex.regex50('http://site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(regex.regex50('my-site.com'), false);
    });
});

describe('task51', function () {
    it('Определить, что переданная строка заканчивается расширением txt, html или php: index.html', function () {
        assert.deepEqual(regex.regex51('index.html'), true);
    });
    it('Определить, что переданная строка заканчивается расширением txt, html или php: imagine', function () {
        assert.deepEqual(regex.regex51('imagine'), false);
    });
    it('Определить, что переданная строка заканчивается расширением txt, html или php: crud.php', function () {
        assert.deepEqual(regex.regex51('crud.php'), true);
    });
    it('Определить, что переданная строка заканчивается расширением txt, html или php: note.txt', function () {
        assert.deepEqual(regex.regex51('note.txt'), true);
    });
});

describe('task52', function () {
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg: index.html', function () {
        assert.deepEqual(regex.regex52('index.html'), false);
    });
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg: imagine.jpg', function () {
        assert.deepEqual(regex.regex52('imagine.jpg'), true);
    });
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg: crud.jpeg', function () {
        assert.deepEqual(regex.regex52('crud.jpeg'), true);
    });
});

describe('task53', function () {
    it('Узнать является ли строка числом, длиной до 12 цифр: 536748356409854457', function () {
        assert.deepEqual(regex.regex53('536748356409854457'), false);
    });
    it('Узнать является ли строка числом, длиной до 12 цифр: 536748', function () {
        assert.deepEqual(regex.regex53('536748'), true);
    });
});

describe('task55', function () {
    it('Заменить в строке домен вида http://site.ru на <a href="http://site.ru">site.ru</a>', function () {
        assert.deepEqual(regex.regex55('http://site.ru'), '<a href = "http://site.ru">site.ru</a>');
    });
});

describe('task56', function () {
    it('Заменить все повторяющиеся пробелы на один: ts  43   jdk    tey', function () {
        assert.deepEqual(regex.regex56('ts  43   jdk    tey'), 'ts 43 jdk tey');
    });
});

describe('task57', function () {
    it('Найти и удалить все комментарии CSS', function () {
        assert.deepEqual(regex.regex57('/*add styles*/'), '');
    });
});

describe('task58', function () {
    it('Найти и удалить все комментарии HTML', function () {
        assert.deepEqual(regex.regex58('<!--comment-->'), '');
    });
});

describe('task59', function () {
    it('Из \'aaab\' нужно сделать \'!b\'', function () {
        assert.deepEqual(regex.regex59('aaab aawa aaaw'), '!b aawa aaaw');
    });
});

describe('task60', function () {
    it('Из \'aaaw\' нужно сделать \'!w\'', function () {
        assert.deepEqual(regex.regex60('aaab aawa aaaw'), 'aaab aawa !w');
    });
});

describe('task61', function () {
    it('Преобразовать строку так, чтобы вместо целых чисел стояли их квадраты: 2 3 10 9', function () {
        assert.deepEqual(regex.regex61('2 3 10 9'), '4 9 100 81');
    });
});

describe('task62', function () {
    it('Найти числа, стоящие в кавычках и увеличьте их в два раза', function () {
        assert.deepEqual(regex.regex62('2aaa\'3\'bbb\'4\''), '2aaa\'6\'bbb\'8\'');
    });
});

describe('task63', function () {
    it('Найти все такие {{текст}} вставки и поменяйте в них порядок букв на обратный', function () {
        assert.deepEqual(regex.regex63('Найти все такие {{текст}} вставки'), 'Найти все такие {{тскет}} вставки');
    });
});

describe('task64', function () {
    it('Дана строка \'23 + 35 =\'. Выведите на экран результат операции в виде \'23 + 35 = 58\'', function () {
        assert.deepEqual(regex.regex64('23 + 35 ='), '23 + 35 = 58');
    });
});

describe('task65', function () {
    it('Определить, что год находится в интервале от 1900 до 2100', function () {
        assert.deepEqual(regex.regex65('1999'), true);
    });
    it('Определить, что год находится в интервале от 1900 до 2100', function () {
        assert.deepEqual(regex.regex65('2200'), false);
    });
});

describe('task66', function () {
    it('Определить, что переданная строка является корректным временем 23:41', function () {
        assert.deepEqual(regex.regex66('23:41'), true);
    });
    it('Определить, что переданная строка является корректным временем 12.05', function () {
        assert.deepEqual(regex.regex66('12.05'), false);
    });
});

describe('task67', function () {
    it('Определить, что переданная строка является корректным временем 9.59 am', function () {
        assert.deepEqual(regex.regex67('9.59 am'), true);
    });
    it('Определить, что переданная строка является корректным временем 10.59', function () {
        assert.deepEqual(regex.regex67('10.59 am'), true);
    });
});

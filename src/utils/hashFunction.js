// mi funcion para hashear las contraseñas y no guardarlas asi nomas en la base de datos

const hashFunction = (password, name) => {
    let combination = password + name;

    const alfabeto = {
        a: "4",
        b: "I3",
        c: "[",
        d: ")",
        e: "3",
        f: "|=",
        g: "&",
        h: "#",
        i: "1",
        j: ",_|",
        k: ">|",
        l: "1",
        m: "/\\/\\",
        n: "^/",
        o: "0",
        p: "|*",
        q: "(_,)",
        r: "I2",
        s: "5",
        t: "7",
        u: "(_)",
        v: "\\/",
        w: "\\/\\/",
        x: "><",
        y: "j",
        z: "2",
        1: "L",
        2: "R",
        3: "E",
        4: "A",
        5: "S",
        6: "b",
        7: "T",
        8: "B",
        9: "g",
        0: "o",
    };

    let result = '';

    for (let letra of combination.toLowerCase()) {
        result += letra in alfabeto ? alfabeto[letra] : letra;
    };

    return result;
};

module.exports = hashFunction;
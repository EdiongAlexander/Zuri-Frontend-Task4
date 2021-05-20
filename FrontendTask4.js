function checkYuGiOh(n) {
    let a = [];
    for (let i = 1; i <= n; i++) {
        a.push(i);
    }

    //To avoid using too much "&&", I'm using the L.C.M of the numbers involved
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 30 == 0) {
            a[i] = "yu-gi-oh";
        } else if (a[i] % 6 == 0) {
            a[i] = "yu-gi";
        } else if (a[i] % 10 == 0) {
            a[i] = "yu-oh";
        } else if (a[i] % 15 == 0) {
            a[i] = "gi-oh";
        } else if (a[i] % 2 == 0) {
            a[i] = "yu";
        } else if (a[i] % 3 == 0) {
            a[i] = "gi";
        } else if (a[i] % 5 == 0) {
            a[i] = "oh";
        }
    }
    if (isNaN(n)) {
        return `invalid parameter: "${n}"`
    } else {
        return a;
    }
}


function convertFahrToCelsius(num) {
    if (typeof num == "string") {
        if (isNaN(num)) {
            return `"${num}" is not a valid number but a ${typeof num} `
        }
    } else if (Array.isArray(num)) {
        // typeof array returns "object". Hence, I had to use Array.isArray method
        return `[${num}] is not a valid number but an array `
    }
    else if (typeof num == "object") {
        return `{${Object.keys(num)} : ${Object.values(num)}} is not a valid number but an ${typeof num}`
    }

    let convertToFahrenheit = (num * 1.8) + 32;
    let fixedFahr = convertToFahrenheit.toFixed(4);
    return `${fixedFahr}°F`;
}


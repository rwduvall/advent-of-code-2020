// const example = `eyr:1972 cid:100
// hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

// iyr:2019
// hcl:#602927 eyr:1967 hgt:170cm
// ecl:grn pid:012533040 byr:1946

// hcl:dab227 iyr:20120
// ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

// hgt:59cm ecl:zzz
// eyr:2038 hcl:74454a iyr:2023
// pid:3556412378 byr:2007`

const example = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`

export const parse = (data: string) => {
    let numberOfValid = 0
    const allPassports = data.split("\n\n")
    // console.log("number of passports " + allPassports.length)


    const splitPass = allPassports[0].split(" ")
    for (let passport of allPassports) {
        const byr = passport.includes("byr:")
        const iyr = passport.includes("iyr:")
        const eyr = passport.includes("eyr:")
        const hgt = passport.includes("hgt:")
        const hcl = passport.includes("hcl:")
        const ecl = passport.includes("ecl:")
        const pid = passport.includes("pid:")
        // const cid = passport.includes("cid:")

        const cleanedUp = passport.replace(/\n/g, " ").split(" ")
        // console.log("valide data response " + validateData(cleanedUp))

        if ((byr && iyr && eyr && hgt && hcl && ecl && pid && validateData(cleanedUp))) {
            // console.log("found valid passport")
            // console.log(passport)
            // console.log("valide data response " + validateData(cleanedUp))

            numberOfValid += 1
        }
    }

    console.log(numberOfValid)

    return numberOfValid
    console.log("--end--")

}

const validateData = (passports: string[]): boolean => {
    var numberOfBadFields = 0
    passports.forEach(function (value) {
        const finalForm = value.split(":")
        var isValid = false

        if (finalForm[0] == 'byr') {
            const value: number = +finalForm[1]
            const test = value >= 1920 && value <= 2002
            if (!test) {
                numberOfBadFields += 1
            }

        }

        if (finalForm[0] == 'iyr') {
            const value: number = +finalForm[1]
            const test = value >= 2010 && value <= 2020
            if (!test) {
                // console.log("iyr is valid")
                numberOfBadFields += 1
            }
        }

        if (finalForm[0] == 'eyr') {
            const value: number = +finalForm[1]
            const test = value >= 2020 && value <= 2030
            if (!test) {
                // console.log("eyr is valid")
                numberOfBadFields += 1
            }
        }

        if (finalForm[0] == 'hgt') {
            if (finalForm[1].endsWith("in")) {
                const height: number = +finalForm[1].slice(0, finalForm[1].length - 2)
                const test = height >= 59 && height <= 76
                if (!test) {
                    // console.log("hgt with in is valid" + finalForm)
                    numberOfBadFields += 1
                }
            }
            if (finalForm[1].endsWith("cm")) {
                const height: number = +finalForm[1].slice(0, finalForm[1].length - 2)
                const test = height >= 150 && height <= 193
                if (!test) {
                    // console.log("hgt with cm is valid" + finalForm)
                    numberOfBadFields += 1
                }
            }
        }

        if (finalForm[0] == 'hcl') {
            let regex = /^#\b[0-9A-Fa-f]{6}\b/g;
            const test = regex.test(finalForm[1])
            if (!test) {
                // console.log("hcl is valid" + finalForm)
                numberOfBadFields += 1
            }
        }

        if (finalForm[0] == 'ecl') {
            const value = finalForm[1]
            const test = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
            if (!test) {
                // console.log("ecl is valid" + finalForm)
                numberOfBadFields += 1
            }
        }

        if (finalForm[0] == 'pid') {
            let regex = /^\d{9}$/gm;
            const test = regex.test(finalForm[1])
            if (!test) {
                // console.log("pid if vaild" + finalForm)
                numberOfBadFields += 1
            }
        }
    })

    // console.log("----" + numberOfBadFields)
    const finalTest = !(numberOfBadFields > 0)
    // console.log("final test " + finalTest)
    return finalTest

}

parse(example)

// the anwer was 158 I was getting 159 idk why
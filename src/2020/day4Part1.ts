const example1 = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`

const day4Data = ``

const parse1 = (data: string) => {
    let numberOfValid = 0
    const allPassports = data.split("\n\n")
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

        if (byr && iyr && eyr && hgt && hcl && ecl && pid) {
            numberOfValid += 1
        }
    }
    console.log(numberOfValid)

}

// parse1(day4Data)
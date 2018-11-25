const users_DB_1 = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
},
{
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
},
{
    name: "Petr",
    surname: "Gavrilov",
    gender: "male",
    age: 34
},
{
    name: "Denis",
    surname: "Dirkin",
    gender: "male",
    age: 52
},
{
    name: "Olga",
    surname: "Dirkina",
    gender: "female",
    age: 15
}];

const users_DB_2 = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
},
{
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
},
{
    name: "Petr",
    surname: "Gavrilov",
    gender: "male",
    age: 34
},
{
    name: "John",
    surname: "Smith",
    gender: "male",
    age: 46
},
{
    name: "Kim",
    surname: "Besinger",
    gender: "female",
    age: 48
}]

let excludeBy = (db_1, db_2, prop_name) => {
    let excludedData = [];
    for (let e1 of db_1) {
        let counter = 0;
        for (let e2 of db_2) {
            if (e1[prop_name] === e2[prop_name]) {
                break;
            } else {
                counter++;
            }            
        }
        if (counter == db_2.length) {
            excludedData.push(e1);
        }
    }
    console.log(excludedData);
    return excludedData;
}

excludeBy(users_DB_1, users_DB_2, 'name');
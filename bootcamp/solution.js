const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: [
            {
                meats: ["hamburgers", "sausages"],
                fish: ["salmon", "pike"],
            },
        ],
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: [
            {
                meats: ["hamburgers", "steak", "lamb"],
                fish: ["tuna", "salmon", "barracuda"],
            },
        ],
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: [
            {
                meats: ["ham", "chicken"],
                fish: ["pike"],
            },
        ],
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: [
            {
                meats: ["bird", "rooster"],
                fish: ["salmon"],
            },
        ],
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: [
            {
                meats: ["hamburgers", "lamb"],
                fish: ["anchovies", "tuna"],
            },
        ],
    },
];

//1.get all the names and put them in an array

const names = (arr) => {
    const result = [];
    arr.map((item) => {
        result.push(item.name);
    });
    return result;
};

//2.get all the objects that are born before 1990

const born = (arr) => {
    const result = [];
    arr.map((item) => {
        const split = item.birthday.split("-");
        const birthday = split[split.length - 1];
        if (birthday < 1990) {
            result.push(item);
        }
    });
    return result;
};

//3.show a object of all the foods and their sequences

const foods = (arr) => {
    const obj = {};
    arr.map((el) => {
        el.favoriteFoods.map((foodItem) => {
            foodItem.meats.map((meatItem) => {
                obj[meatItem] = obj[meatItem] + 1 || 1;
            });
            foodItem.fish.map((fishItem) => {
                obj[fishItem] = obj[fishItem] + 1 || 1;
            });
        });
    });
    return obj;
};
console.log(foods(data));
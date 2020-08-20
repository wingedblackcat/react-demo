const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

function addFoodItems(smallFoodList, bigFoodList) {
    smallFoodList.forEach(item => {
        // console.log(item);
        bigFoodList[item] ? bigFoodList[item]++ : bigFoodList[item] = 1;
    });
}

function getFoodList() {
    const foods = {};
    data.forEach(person => {
        addFoodItems(person.favoriteFoods.meats, foods);
        addFoodItems(person.favoriteFoods.fish, foods);
    });
    return foods;
}

console.log(getFoodList());
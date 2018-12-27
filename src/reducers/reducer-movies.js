export default function (state = 0, action = null) {
    console.log("i m in reducers movies");



    var arr = [
        {
            id: 11,
            movie: "nota",
            price: 100,
            isLoading: false
        },
        {
            id: 12,
            movie: "arjunreddy",
            price: 1200,
            isLoading: false

        },
        {
            id: 13,
            movie: "ggovindham",
            price: 100,
            isLoading: false
        },
        {
            id: 14,
            movie: "pellichupulu",
            price: 120,
            isLoading: false
        },
        {
            id: 15,
            movie: "taxiwala",
            price: 130,
            isLoading: false
        },
        {
            id: 16,
            movie: "anji",
            price: 100,
            isLoading: false
        },
        {
            id: 17,
            movie: "sarkar",
            price: 1000,
            isLoading: false
        },
        {
            id: 18,
            movie: "thupaki",
            price: 10,
            isLoading: false
        },
        {
            id: 19,
            movie: "zero",
            price: 108,
            isLoading: false
        },
        {
            id: 20,
            movie: "mass",
            price: 100,
            isLoading: false
        }
    ]





    switch (action.type) {
        case "TRUE":
            var index = arr.map(function (item) {
                return item.id
            }).indexOf(action.payload.id)
            arr[index].isLoading = true;
            //action.payload.isLoading = true;
            //return action;
            break;



        case "FALSE":
            var index = arr.map(function (item) {
                return item.id
            }).indexOf(action.payload.id)
            arr[index].isLoading = false;
            //action.payload.isLoading = true;

            // return action;
            break;

        default:
            return arr;


    }

    return arr;
}
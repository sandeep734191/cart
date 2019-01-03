export default function (state = 0, action = null) {
    console.log("i m in reducers movies");



    var arr = [
        {
            id: 11,
            movie: "nota",
            price: 100,
            isLoading: false,
            img:'nota.jpg'
        },
        {
            id: 12,
            movie: "arjunreddy",
            price: 1200,
            isLoading: false,
            img:'arjunreddy.jpg'

        },
        {
            id: 13,
            movie: "ggovindham",
            price: 100,
            isLoading: false,
            img:'ggovindham.jpg'
        },
        {
            id: 14,
            movie: "pellichupulu",
            price: 120,
            isLoading: false,
            img:'pellichoopulu.jpg'
        },
        {
            id: 15,
            movie: "taxiwala",
            price: 130,
            isLoading: false,
            img:'taxiwala.jpg'
        },
        {
            id: 16,
            movie: "petta",
            price: 100,
            isLoading: false,
            img:'petta.jpg'
        },
        {
            id: 17,
            movie: "kick2",
            price: 1000,
            isLoading: false,
            img:'kick2.jpg'
        },
        {
            id: 18,
            movie: "kala",
            price: 10,
            isLoading: false,
            img:'kaala.jpg'
        },
        {
            id: 19,
            movie: "rajadgreat",
            price: 108,
            isLoading: false,
            img:'rajadgreat.jpg'
        },
        {
            id: 20,
            movie: "venky",
            price: 100,
            isLoading: false,
            img:'venky.jpg'
        },
        {
            id: 21,
            movie: "basha",
            price: 100,
            isLoading: false,
            img:'basha.jpg'
        },
        {
            id: 22,
            movie: "robo",
            price: 100,
            isLoading: false,
            img:'robo.jpg'
        },
        {
            id: 23,
            movie: "robo2",
            price: 100,
            isLoading: false,
            img:'robo2.jpg'
        },
        {
            id: 24,
            movie: "linga",
            price: 100,
            isLoading: false,
            img:'lingaa.jpg'
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
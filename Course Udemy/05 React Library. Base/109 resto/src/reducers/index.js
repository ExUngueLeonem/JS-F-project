const initialState = {
    menu: [],
    loading: true,
    items: [		
    {
        "title": "Greece salad",
        "price": 8,
        "url": "https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg",
        "category": "salads",
        "id": 4
    },
    {
        "title": "Cowboy Steak",
        "price": 25,
        "url": "https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg",
        "category": "meat",
        "id": 5
    }
]
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
            
        default:
            return state;   
    }
}

export default reducer;
const INITIAL_STATE = {
  selectedThing: null,
  mountains: [{
    id: 1,
    name: "K2",
    height: 2100,
    imgURL: "http://img.mota.ru/upload/wallpapers/source/2012/02/03/13/04/29788/mota_ru_2020327.jpg",
  }]
}


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_DETAILS':
      return Object.assign({}, state, {
        selectedThing: action.id
      })
    default:
      return state
  }
}


export default reducer

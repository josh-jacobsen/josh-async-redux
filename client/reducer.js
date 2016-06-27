const INITIAL_STATE = {
  selectedThing: null,
  mountains: [{
    id: 1,
    name: "K2",
    height: 8611,
    imgURL: "http://i.imgur.com/mISqV24.jpg"
  },{
    id: 2,
    name: "Lhotse",
    height: 8516,
    imgURL: "http://himalayanexperience.com/img/expeditions/lhotse/im01.jpg"
  },{
    id: 3,
    name: "Makalu",
    height: 8485,
    imgURL: "http://www.mountainprofessor.com/images/Makalu-B-B.jpg"
  },{
    id: 4,
    name: "Gasherbrum",
    height: 8080,
    imgURL: "http://images.summitpost.org/original/129358.jpg"
  },
]
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

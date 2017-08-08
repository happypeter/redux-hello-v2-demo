
let posts = [
    {
      _id: '111',
      title: 'Hello Git'
    },
    {
      _id: '222',
      title: 'Hello Redux'
    }
  ]


export default function postReducer(state=posts, action) {
  switch (action.type) {
    case 'XXX':
      return state
    default:
      return state
  }
}

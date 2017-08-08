
let posts = [
    {
      _id: '111',
      title: 'Hello Git',
      like: 1
    },
    {
      _id: '222',
      title: 'Hello Redux',
      like: 1
    }
  ]


export default function postReducer(state=posts, action) {
  switch (action.type) {
    case 'LIKE':
      let newState = state.map(item => {
        if(item._id === action.postId) {
          return { ...item, like: item.like + 1 }
        }
        return item
      })
      return newState
    default:
      return state
  }
}

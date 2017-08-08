let comments = [
  'hello1',
  'hello2'
]

export default function rootReducer(state=comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}

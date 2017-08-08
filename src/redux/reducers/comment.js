let comments = [
  {
    text: 'nice git',
    post: '111'
  },
  {
    text: 'cool redux',
    post: '222'
  },
  {
    text: 'cool git',
    post: '111'
  }
]

export default function commentReducer(state=comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { text: action.text, post: action.postId }]
    default:
      return state
  }
}

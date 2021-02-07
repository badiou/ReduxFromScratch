// {
//     users: {},
//     setting: {},
//     tweets: {
//       btyxlj: {
//         id: 'btyxlj',
//         text: 'What is a jQuery?',
//         author: {
//           name: 'Tyler McGinnis',
//           id: 'tylermcginnis',
//           avatar: 'twt.com/tm.png'
//         }   
//       }
//     }  
//   }

// function author (state, action) {
//     switch (action.type) {
//         case : UPDATE_AVATAR
//           return {
//             ...state,
//             avatar: action.newAvatar
//           }
//         default :
//           state
//     }
//   }
  
//   function tweet (state, action) {
//     switch (action.type) {
//         case ADD_TWEET :
//           ...
//         case REMOVE_TWEET :
//           ...
//         case : UPDATE_AVATAR
//           return {
//             ...state,
//             author: author(state.author, action)
//           }
//         default :
//           state
//     }
//   }
  
//   function tweets (state = {}, action) {
//     switch(action.type){
//         case ADD_TWEET :
//           ...
//         case REMOVE_TWEET :
//           ...
//         case UPDATE_AVATAR :
//           return {
//             ...state,
//             [action.tweetId]: tweet(state[action.tweetId], action)
//           }
//         default :
//           state
//     }
//   }
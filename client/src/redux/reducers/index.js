import { GET_ARTICLES } from "../constants/action-types";

const initialState = {
  articles: [
    // {
    //   userId: 1,
    //   id: 1,
    //   title:
    //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    // },
    // {
    //   userId: 1,
    //   id: 2,
    //   title: "qui est esse",
    //   body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    // },
  ],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ARTICLES) {
    console.log(action.payload);
    return Object.assign({}, state, { articles: action.payload });
  }
  return state;
}

export default rootReducer;

import { API_URL } from "../constants";
import * as BOTS from "../constants/bots";

function refreshContentSuccess(tableBots) {
  return {
    type: BOTS.REFRESH_CONTENT,
    payload: tableBots // передает данные в редьюсер
  };
}

export function refreshContent() {
  // или refreshContent(params) ну ты понял
  return dispatch => {
    return fetch(API_URL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token:
          "059f5a6b071086f27180031c0c1d4e7fdeba9806dfdb480e5d6223f182ba7df9",
        size: 10,
        order_by: "last_seen",
        direction: "ASC"
      })
    })
      .then(res => {
        if (res.status === 200) return res.json();
      })
      .then(resObj => {
        // по хорошему тут надо обрабатывать непредвиденные ситуации с апи
        // например, если что-то не так на сервере то dispatch(refreshContentFailure()) и т.д.

        return dispatch(refreshContentSuccess(resObj.results));
      })
      .catch(err => {
        if (err) console.log("API error");
      });
  };
}

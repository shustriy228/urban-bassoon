import * as BOTS from "../constants/bots"; // для удобства

const initialState = {
  tableBots: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOTS.REFRESH_CONTENT:
      return {
        ...state, // копируем существующий стейт
        tableBots: action.payload.tableBots // и меняем только нужное
      }; //новый стейт перезаписывает предыдущий

    default:
      return state;
  }
};

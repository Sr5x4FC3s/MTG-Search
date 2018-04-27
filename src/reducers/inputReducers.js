export const targetCard = (state = '', action) => {
  switch (action.type) {
    case `CARD_INPUT`:
      return action.card;
    default: 
      return state;
  }
};

export const listCards = (state = [], action) => {
  switch (action.type) {
    case `ADD_CARD`:
      return action.list;
    default: 
      return state;
  }
};

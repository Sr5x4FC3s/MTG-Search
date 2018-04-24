export const targetCard = (state = '', action) => {
  switch (action.type) {
    case `CARD_INPUT`:
      return action.targetCard;
    default: 
      return state;
  }
};
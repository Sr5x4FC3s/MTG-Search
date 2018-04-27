export const targetCard = (string) => {
  return {
    type: `CARD_INPUT`,
    card: string
  }
};

export const entryList = (array) => {
  return {
    type: `ADD_CARD`,
    list: array
  }
};
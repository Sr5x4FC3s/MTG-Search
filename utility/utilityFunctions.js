//function will take in props and check to see if targetcard already exists; yes do nothing 
//if no, add to the list and add set state to that new array 

export const createCardList = (entry) => {
  let entryList = [];
  console.log('utility entry', entry);
  
  if (entry.cardList.length > 0) {
    entryList = entry.cardList;
    entryList.push(entry.targetCard);
  } else {
    entryList.push(entry.targetCard);
  }
  return entryList;
};
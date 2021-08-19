
//action creator: 1 hàm nhận vào tham số tạo ra action tương ứng
export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby,
  }
}


export const setActiveHobby = (hobby) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: hobby,
  }
}
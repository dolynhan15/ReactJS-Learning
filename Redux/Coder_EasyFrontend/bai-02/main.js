
console.log(window.Redux);
const {createStore} = window.Redux;
//SET UP REDUX STORE
//state
//reducer
//store
const initialState = [
    'Listen to music'
];

const hobbyReducer = (state = initialState, action) => {
    return state;
}
const store = createStore(hobbyReducer); // 1 store nhận 1 hoặc nhìu reducer
// ------------------
//RENDER REDUX HOBBY LIST

const renderHobbyList = (hobbyList)=>{
    if(Array.isArray(hobbyList) || hobbyList.length === 0) return;
    const ulElement = document.querySelector('#hobbyListId');
    if (!ulElement) return;
    //tại lần render now sẽ delete đi kết quả lần trước 
    //reset previous content of ul
    ulElement.innerHTML = ''
    for (const hobby of hobbyList){
        const liElement = document.createElement('li');
        liElement.textContent = hobby;
        
        ulElement.appendChild(liElement);

    }
    // RENDER INITIAL HOBBY LIST
    
}
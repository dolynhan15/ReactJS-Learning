//Cach 1

[1, 2, 3, 4].reduce((sum, num) => {
    return sum + num;
}, 0)

function reduce(arr, cb, initValue){
    if (initValue == undefined){
        initValue = arr[0];
        arr = arr.slice(1);
    }
    for (const item of arr){
        initValue = cb(initValue, item);
    }
    return initValue;
}
// console.log(reduce([1,2,3,4], (sum, num) =>{
//     return sum+num;
// },0));

const actions = [
    {type: 'CHANGE_SPEED', payload: 3},
    {type: 'TURN_OFF'},
    {type: 'TURN_ON'}
];

const initState = {
    speed: 0,
    lastSpeed: 1
};
reduce(actions, (state, action)=>{
    if (action.type === 'CHANGE_SPEED') {
        return {
            ...state,
            speed: action.payload
        }
    }
    if (action.type === 'TURN_OFF'){
        return {
            ...state,
            speed: 0,
            lastSpeed: state.speed
        };
    }
    if (action.type === 'TURN_ON'){
        return {
            ...state,
            speed: state.lastSpeed
        };
    }
    return state;
}, initState)
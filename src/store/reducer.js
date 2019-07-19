const defaultState = {
  inputValue:"",
  List:[]
};

export default (state = defaultState,action)=>{
    if(action.type === "Change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.text;
        return newState;
    }else if(action.type ==="Add_List"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.List.push(action.text);
        return newState;
    }else if(action.type==="Delete_List"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.List.splice(action.index,1);
        return newState;
    }else if(action.type==="Change_List"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.List.splice(action.index,1,state.inputValue);
        return newState;
    }
    return state
}
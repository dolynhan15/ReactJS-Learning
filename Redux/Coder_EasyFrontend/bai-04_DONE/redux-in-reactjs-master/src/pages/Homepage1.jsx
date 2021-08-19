import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage1.propTypes = {

};

const randomNumber = () => {
  return 1000 + Math.trunc((Math.random() * 9000)); // Math.truc: lay so nguyen
}

function HomePage1(props) {
    const dispatch = useDispatch();
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

  // const hobbyState= useSelector(state => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.list,
  // }))

  

  // console.log('Hobby list', hobbyList);
  const handleAddHobbyClick = () => {
    const newId = randomNumber()
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`
    }

    //Dispatch action to adda new hobby to redux store
    const action = addNewHobby(newHobby); //action "ADD-HOBBY"/hobby
    dispatch(action); //reducer/hobby
  }
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);//action "SET-ACTIVEID-HOBBY"/hobby
    dispatch(action);
  }


  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Page</h1>

      <button onClick={handleAddHobbyClick}>Random hobby</button>

      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage1;
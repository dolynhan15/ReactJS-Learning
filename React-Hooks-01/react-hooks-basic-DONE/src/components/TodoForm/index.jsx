import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        //Prvent reloading browser
        e.preventDefault();
        if (!onSubmit) return;
        const formValues = {
            title: value,
        };
        onSubmit(formValues);

        //Reset form
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}> 
        {/* Hàm trên chặn việc reload lại input thành 
        value rỗng ban đầu sau khi enter */}
            <input 
            type="text" 
            value= {value} 
            // value={value}: k gõ được vào input do value bị gán cứng
            // Muốn gõ được: sử dụng hàm onChange() dưới
            onChange={handleValueChange}/>
        </form>
    );
}

export default TodoForm;
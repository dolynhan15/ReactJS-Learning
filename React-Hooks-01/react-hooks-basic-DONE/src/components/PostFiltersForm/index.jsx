import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
};

function PostFiltersForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);
    //useRef: giữ value trc sau mỗi lần render

    function handleSearchTermChange(e) {

        const value = e.target.value;
        setSearchTerm(value);
    
        if (!onSubmit) return;

        //Ok, bạn gõ đi, tui sẽ đợi 300ms
        //Nếu bạn gõ típ, tui cx sẽ đợi 300ms

        //SET -- 100 CLEAR, SET -- 300 -> SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        } //Lấy giá trị timeout trước

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                // searchTerm: e.target.value,//k thể xài trực tiếp event
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);      
        
    }
    return (
        <form>
            <input 
             type="text"
             value={searchTerm}
             onChange={handleSearchTermChange}>

            </input>
        </form>
    );
}

export default PostFiltersForm;
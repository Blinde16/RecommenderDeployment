import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate(); // React Router navigation

    const handleRecommend = () => {
        if (inputValue >= 1 && inputValue <= 200) {
            navigate(`/mainResults?contentId=${inputValue}`); // Navigate with query params
        } else {
            alert('Please enter a value between 1 and 200.');
        }
    };

    return (
        <>
            <div className="input-group">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter a value (1-200)"
                    min="1"
                    max="200"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleRecommend}
                >
                    Recommend!
                </button>
            </div>
        </>
    );
}

export default Calculator;

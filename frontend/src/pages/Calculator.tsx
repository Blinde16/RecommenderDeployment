import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
    return(
        <>
            <div className="input-group">
            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Pick a user...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <button className="btn btn-outline-secondary" type="button">Recommend!</button>
            </div>
        </>
    )
}
export default Calculator;
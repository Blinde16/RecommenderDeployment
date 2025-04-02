import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
    return(
        <>
            <div className="input-group">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title1</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item 1</td>
                        <td>$10</td>
                        <td>2</td>
                        <td>$20</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </>
    )
}
export default Calculator;
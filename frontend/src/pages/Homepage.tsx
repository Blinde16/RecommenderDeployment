import './css/homepage.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Calculator';

const Homepage = () => {
  return (
    <>
      <div className='homeTitle'>
        <h1>Recommender</h1>
      </div>
      <div>
        <Calculator />
      </div>
      </>

  )
}

export default Homepage

import NewArraivals from './NewArraivals.jsx';
import Herosection from './Herosection.jsx';

const Homepage = () => {
  return (
    <div className='pagewidth homepage' style={{ paddingTop: '3.5rem' }}>
        <Herosection/>
        <NewArraivals/>
    </div>
  )
}

export default Homepage
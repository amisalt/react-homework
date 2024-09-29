import { Link } from 'react-router-dom';
import '../index.css';

const TestList = ({ tests, onSelectTest }) => {
  return (
    <div className="test-list">
      <h2>Available Tests</h2>
      <ul>
        {tests.length > 0 ? (
          tests.map((test) => (
            <li key={test.id} className="test-item">
              <Link to={`/take-test/${test.id}`} onClick={() => onSelectTest(test.id)}><button >
                {test.title}
              </button></Link>
            </li>
          ))
        ) : (
          <p>No tests available. Add a new test to start!</p>
        )}
      </ul>
    </div>
  );
};

export default TestList;

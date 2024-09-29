import React, {useEffect} from 'react';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadTestsFromStorage } from '../features/tests/testsSlice';

const TestHistory = () => {
  const dispatch = useDispatch()
  const history = useSelector(state=>state.tests.history)
  useEffect(() => {
    dispatch(loadTestsFromStorage()); 
    
    // Загружаем тесты из localStorage при загрузке компонента
  }, [dispatch]);
  
  return (
    <div className="test-history">
      <h2>Test History</h2>
      <ul>
        {
          history.map(point=>(
            <li>{point.test}: {point.result}% ({point.date})</li>
          ))
        }
      </ul>
    </div>
  );
};

export default TestHistory;

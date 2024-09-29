import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTest, loadTestsFromStorage } from '../features/tests/testsSlice';
import TestList from './TestList';

const TestListContainer = () => {
  const dispatch = useDispatch();
  const tests = useSelector(state=> state.tests.allTests);

  useEffect(() => {
    dispatch(loadTestsFromStorage()); 
    
    // Загружаем тесты из localStorage при загрузке компонента
  }, [dispatch]);

  const handleSelectTest = (testId) => {
    dispatch(setCurrentTest(testId));
  };

  return (
    <div>
      <TestList tests={tests} onSelectTest={handleSelectTest} />
    </div>
  );
};

export default TestListContainer;

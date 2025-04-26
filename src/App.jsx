
import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import ThemeToggle from './components/ThemeToggle';
import { database } from './firebase-config';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const res = await fetch(\`\${database}/feedbacks.json\`);
    const data = await res.json();
    const loadedFeedbacks = [];
    for (const key in data) {
      loadedFeedbacks.push({ id: key, ...data[key] });
    }
    setFeedbacks(loadedFeedbacks.reverse());
  };

  const addFeedback = async (feedback) => {
    await fetch(\`\${database}/feedbacks.json\`, {
      method: 'POST',
      body: JSON.stringify(feedback),
    });
    fetchFeedbacks();
  };

  const deleteFeedback = async (id) => {
    await fetch(\`\${database}/feedbacks/\${id}.json\`, {
      method: 'DELETE',
    });
    fetchFeedbacks();
  };

  return (
    <div className="container">
      <ThemeToggle />
      <h1>Feedback Board</h1>
      <FeedbackForm onFeedbackSubmit={addFeedback} />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  );
}

export default App;

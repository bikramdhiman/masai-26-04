
import React, { useState } from 'react';

function FeedbackForm({ onFeedbackSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      alert('All fields are required.');
      return;
    }
    const feedback = {
      name,
      email,
      comment,
      timestamp: Date.now(),
    };
    onFeedbackSubmit(feedback);
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;

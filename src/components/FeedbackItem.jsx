
import React from 'react';

function FeedbackItem({ feedback, onDelete }) {
  return (
    <div className="feedback-card">
      <div>
        <strong>{feedback.name}</strong> ({feedback.email})
        <p>{feedback.comment}</p>
      </div>
      <button onClick={() => onDelete(feedback.id)}>Delete</button>
    </div>
  );
}

export default FeedbackItem;

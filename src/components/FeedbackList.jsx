
import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbacks, onDelete }) {
  return (
    <div>
      {feedbacks.map((fb) => (
        <FeedbackItem key={fb.id} feedback={fb} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default FeedbackList;

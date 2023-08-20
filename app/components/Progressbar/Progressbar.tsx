import React, { useState } from 'react';
import '../Progressbar/ProgressBar.css'; // Import the CSS file for styling

export default function ProgressBarComponent(props:any) {
  const [progress, setProgress] = useState(0); // Initial progress value is 0

  // Function to increment the progress
  const incrementProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100)); // Increase by 10, capped at 100
  };

  return (
    <div>
      <div className="progress-container">
        <div
          className="progress"
          style={{ width: `${props.progress}%`,backgroundColor:props.progress>50?"orange":"#007bff" }} // Set the width of the progress bar based on the progress value
        ></div>
      </div>
      <button onClick={incrementProgress}>Increase Progress</button>
    </div>
  );
}


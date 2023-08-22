import React from 'react';

const LoadingContent = () => (
  <div>
    <p>Loading...</p>
  </div>
);

export const Loading = ({ isLoading }) => (
  isLoading && <LoadingContent />
);

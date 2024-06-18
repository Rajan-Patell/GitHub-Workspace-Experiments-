import React from 'react';

const SocialMediaIntegration = () => {
  return (
    <div>
      <h2>Share This Product</h2>
      <div>
        <button onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank')}>Share on Facebook</button>
        <button onClick={() => window.open('https://twitter.com/intent/tweet?url=' + window.location.href, '_blank')}>Share on Twitter</button>
        <button onClick={() => window.open('https://www.instagram.com/?url=' + window.location.href, '_blank')}>Share on Instagram</button>
      </div>
    </div>
  );
};

export default SocialMediaIntegration;

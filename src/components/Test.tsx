import { useEffect } from 'react';

function Test({ asd, ...rest }: { asd: string }) {
  useEffect(() => () => {}, []);

  return (
    <div {...rest}>
      <h1>Test</h1>
    </div>
  );
}

export default Test;

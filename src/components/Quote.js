import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'q++9dEjjh1hQhe2xKILAgg==jcLHoiOHLwqPGw5O',
        },
      });
      const json = await response.json();
      setQuote(json[0]);
      setLoading(false);
    } catch (e) {
      throw Error;
    }
  }, []);

  if (loading) return <h3 className="mt-5 pt-5">Loading ...</h3>;

  return (
    <h3 className="mt-5 pt-5">
      {quote.quote}
      {' '}
      -
      {' '}
      {quote.author}
    </h3>
  );
};

export default Quote;

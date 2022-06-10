import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrormessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      setErrormessage('');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Milano'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrormessage(`Something went wrong. Error message: ${err}`);
    }
  };

  //Default search on firstmount  
  useEffect(() => {
    searchApi('Milano');
  }, []);

  return [searchApi, results, errorMessage];

};


import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import axios from '../utils/axios'

const Home: NextPage = () => {

  useEffect(()=> {
    getData()
  }, [])

  const getData = async (): Promise<void> => {
    try {
      const res = await axios.get('/productItems', {
        params: {
          page: 1
        }
      });

      console.log(res.data);
    } catch(err) {
      console.log(err)
    }
  }
  return <div>test</div>;
};

export default Home;4

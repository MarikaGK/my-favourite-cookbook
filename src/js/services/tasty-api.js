import { axios } from 'axios';
import 'dotenv/config';
import express from 'express';

const RAPID_API_KEY = process.env.AUTH0_RAPID_API_KEY;

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '50',
    tags: 'under_30_minutes',
  },
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

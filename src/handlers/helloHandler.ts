import { Handler } from 'express';
import config from 'config';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const helloHandler: Handler = (req, res) => {
  const { params } = req;
  const { name = 'world' } = params;
  const response = helloBuilder(name);
  console.log(config.get('LOG_LEVEL'));
  return res.json(response);
};

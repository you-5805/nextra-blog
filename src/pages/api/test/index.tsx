// import type { NextApiHandler } from 'next';

// const handler = ((_req, res) => {
//   res.json({ msg: 'Hello world!' });
// }) satisfies NextApiHandler;

// export default handler;

import { NextApiHandler } from 'next';
import { type NextMiddleware, NextResponse } from 'next/server';

export const GET = (req: Request) => {
  req.headers
  return new Response('Hello world!');
}

const handler = ((req, res) => {
  res.json({ msg: 'Hello world!' });
  res.
}) satisfies NextApiHandler;

// import type { NextApiHandler } from 'next';

// const handler = ((_req, res) => {
//   res.json({ msg: 'Hello world!' });
// }) satisfies NextApiHandler;

// export default handler;

import { type NextMiddleware, NextResponse } from 'next/server';

export const GET = ((req) => {
  return NextResponse.json({ msg: 'Hello world!' });
}) satisfies NextMiddleware;

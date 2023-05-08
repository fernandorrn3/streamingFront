import { NextResponse } from 'next/server';
 
export const config = {
  runtime: 'edge',
};
 //Azd7qWnj_xLc4BxWRUfg8m8vcyHcHpDRBhGUxorjx
const handler =  (req) => {
  return NextResponse.json({
    name: `Hello, from I'm now an Edge Function!`,
  });
};

export default handler
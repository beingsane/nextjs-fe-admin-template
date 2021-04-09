import type { NextApiRequest, NextApiResponse } from 'next';
/**
 * @function handler API handler for some trivial login functionality.
 * @param req Incoming request object.
 * @param res Response request object.
 */
function handler(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'GET') {
    res.status(200).json({
      name: 'Login output'
    });
  }

  if (req.method === 'POST') {
    const { email } = req.body;
    const { password } = req.body;

    if (email === 'duchpatrik@icloud.com' && password === 'duch') {
      res.status(200).json({
        email
      });
    }
  }
}

export default handler;
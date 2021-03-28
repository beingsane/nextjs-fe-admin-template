import type { NextApiRequest, NextApiResponse } from 'next';
/**
 * @function handler API handler for accessing project detail information.
 * @param req Incoming request object.
 * @param res Response request object.
 */
function handler(req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'GET') {
    res.status(200).json({
      name: 'Patrik Duch'
    });
  }
}

export default handler;
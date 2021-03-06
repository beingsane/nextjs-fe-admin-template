import type { NextApiRequest, NextApiResponse } from 'next';
/**
 * @function handler API handler for accessing list of user-management.
 * @param req Incoming request object.
 * @param res Response request object.
 */
function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json({
    users: [
      {
        id: 1,
        firstName: 'Patrik',
        surname: 'Duch'
      },

      {
        id: 2,
        firstName: 'Jakub',
        surname: 'Beránek'
      },
      {
        id: 3,
        firstName: 'Jakub',
        surname: 'Mazur'
      },

      {
        id: 4,
        firstName: 'Tomáš',
        surname: 'Silber'
      }
    ]
  });
}

export default handler;
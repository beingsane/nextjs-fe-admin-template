/**
 * @function handler API handler for accessing list of users.
 * @param req Incoming request object.
 * @param res Response request object.
 */
function handler(req, res) {
  res.status(200).json({
    users: [
      {
        firstName: 'Patrik',
        surname: 'Duch'
      },

      {
        firstName: 'Jakub',
        surname: 'Beránek'
      },
      {
        firstName: 'Jakub',
        surname: 'Mazur'
      },

      {
        firstName: 'Tomáš',
        surname: 'Silber'
      }
    ]
  });
}

export default handler;
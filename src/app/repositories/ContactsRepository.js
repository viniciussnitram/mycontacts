const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Vinicius',
    email: 'vinicius@mail.com',
    phone: '121213131',
    category_id: uuid(),
  }
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();

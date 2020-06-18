const Client = require('../models/client');

module.exports = async () => {
  const client = [
    {
      fullName: 'Asmaa A.H',
      email: 'asma@gmail.com',
      password: '$2b$10$gB8D2bI6/X7xTwsSRs5JQe2BvwOLEdMag8dinhfIY4Eu0tIEWVTr2',
      avatar:
        'https://cdn.shopify.com/s/files/1/0074/5432/6862/files/mongoose-envoy-0063-tested_grande.jpg?v=1585927855',
      mobileNumber: '4555787946664',
      bankAccounts: [15642313, 56498432132, 68741201165, 879841233],
      balance: [
        { type: 'USD', total: 5000 },
        { type: 'ILS', total: 300 },
      ],
      mainBank: 15642313,
    },
    {
      fullName: 'Hasssan A',
      email: 'hassan@gmail.com',
      password: '$2b$10$gB8D2bI6/X7xTwsSRs5JQe2BvwOLEdMag8dinhfIY4Eu0tIEWVTr2',
      avatar:
        'https://cdn.shopify.com/s/files/1/0074/5432/6862/files/mongoose-envoy-0063-tested_grande.jpg?v=1585927855',
      mobileNumber: '4555787946664',
      bankAccounts: [15642313, 56498432132, 68741201165, 879841233],
      balance: [
        { type: 'USD', total: 10000 },
        { type: 'ILS', total: 900 },
      ],
      mainBank: 15642313,
    },
    {
      fullName: 'Mohammed F ',
      email: 'mm2020@gmail.com',
      password: '$2b$10$gB8D2bI6/X7xTwsSRs5JQe2BvwOLEdMag8dinhfIY4Eu0tIEWVTr2',
      avatar:
        'https://cdn.shopify.com/s/files/1/0074/5432/6862/files/mongoose-envoy-0063-tested_grande.jpg?v=1585927855',
      mobileNumber: '4555787946664',
      bankAccounts: [15642313, 56498432132, 68741201165, 879841233],
      balance: [
        { type: 'USD', total: 5000 },
        { type: 'ILS', total: 300 },
      ],
      mainBank: 15642313,
    },
    {
      fullName: 'Ali Dahdoh',
      email: 'ali@gmail.com',
      password: '$2b$10$gB8D2bI6/X7xTwsSRs5JQe2BvwOLEdMag8dinhfIY4Eu0tIEWVTr2',
      avatar:
        'https://cdn.shopify.com/s/files/1/0074/5432/6862/files/mongoose-envoy-0063-tested_grande.jpg?v=1585927855',
      mobileNumber: '4555787946664',
      bankAccounts: [15642313, 56498432132, 68741201165, 879841233],
      balance: [
        { type: 'USD', total: 5000 },
        { type: 'ILS', total: 300 },
      ],
      mainBank: 15642313,
    },
  ];
  await Client.create(client);
};

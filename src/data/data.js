const sideNavData = [
  {
    title: 'mon asso',
    name: 'main',
    notifications: 0,
    subCategories: ['main'],
    items: [
      [
        { name: 'Changer d\'espace', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Mon organisation', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Administrateur', content: 'http://via.placeholder.com/350x150', notifications: 1 },
        { name: 'Compte en ligne', content: 'http://via.placeholder.com/350x150', notifications: 2 },
      ],
    ],
  },
  {
    title: 'Labeling',
    name: 'barcode',
    notifications: 0,
    subCategories: ['Reports'],
    items: [
      [
        { name: 'Printer Report', content: 'http://via.placeholder.com/350x200', notifications: 0 },
        { name: 'Label Report', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
      [
        {
          name: 'Labels',
          content: 'http://via.placeholder.com/350x150',
          notifications: 0,
          childItems: [
            { key: 'Bananas', value: 'Bananas', text: 'Bananas' },
            { key: 'Raspberries', value: 'Raspberries', text: 'Raspberries' },
          ],
        },
        { name: 'Categories', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        {
          name: 'Templates',
          content: 'http://via.placeholder.com/350x150',
          notifications: 0,
          childItems: [
            { key: 'Basic Date Code 1x1', value: 'Basic Date Code 1x1', text: 'Basic Date Code 1x1' },
          ],
        },
        { name: 'Prep Lists', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
    ],
  },
  {
    title: 'Scheduling',
    name: 'calendar',
    notifications: 3,
    subCategories: ['Your Schedule', 'Reports', 'Manage'],
    items: [
      [
        { name: 'Shifts', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Make Requests', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Pickup Shifts', content: 'http://via.placeholder.com/350x150', notifications: 1 },
        { name: 'Pending Requests', content: 'http://via.placeholder.com/350x150', notifications: 2 },
      ],
      [
        { name: 'Coming Soon', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
      [
        { name: 'By Day', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'By Week', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
    ],
  },
  {
    title: 'Lists',
    name: 'browser',
    notifications: 0,
    subCategories: ['Your Lists', 'Reports', 'Manage'],
    items: [
      [
        { name: 'To Do', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Manage', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
      [
        { name: 'Browse', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Comparison', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
      [
        { name: 'Lists', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Items', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
    ],
  },
  {
    title: 'Sensors',
    name: 'thermometer three quarters',
    notifications: 0,
    subCategories: ['Reports', 'Manage'],
    items: [
      [
        { name: 'Graphs', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Events', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Data', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
      [
        { name: 'Sensor Names', content: 'http://via.placeholder.com/350x150', notifications: 0 },
        { name: 'Scenarios', content: 'http://via.placeholder.com/350x150', notifications: 0 },
      ],
    ],
  },

];

const dataMap = {};
sideNavData.map((category) => {
  dataMap[category.title] = {};
  category.subCategories.map((subCategory, index) => {
    dataMap[category.title][subCategory] = category.items[index].reduce((itemsMap, item) => {
      itemsMap[item.name] = item;
      return itemsMap;
    }, {});
  });
});

exports.getAll = () => {
  return sideNavData;
};

exports.lookupCategory = (title) => {
  return dataMap[title] || {};
};

exports.lookupItem = (category, subCategory, item) => {
  return dataMap[category][subCategory][item];
};

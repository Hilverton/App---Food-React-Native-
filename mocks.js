//HOME==========================
const infoHome = [
  { 
    id: 1,
    title: 'Hot Restaurants Around',
    datas: [
      {
        id: 1,
        star: 4.2,
        url: require('./assets/Home/hot1.png'),
        title: 'That Breakfast Spot',
        subTitle: 'Vegan, Mexicano',
      },
      {
        id: 2,
        star: 4.2,
        url: require('./assets/Home/hot2.png'),
        title: 'Hot & Spicy',
        subTitle: 'American, Indian',
      },
      {
        id: 3,
        star: 4.2,
        url: require('./assets/Home/hot3.png'),
        title: 'That Breakfast & Spicy',
        subTitle: 'Vegan, Indian',
      },
    ]
  },
  {
    id: 2,
    title: 'Food Recommendations for you',
    datas: [
      {
        id: 1,
        time: '10-20mins',
        url: require('./assets/Home/recomendado1.png'),
        title: 'Italian Breakfast Combo',
        subTitle: 'Zillion Reasons',
      },
      {
        id: 2,
        time: '10-20mins',
        url: require('./assets/Home/recomendado2.png'),
        title: 'Vegan Hangout',
        subTitle: 'Hotel Mayback',
      },
    ]
  }
];

//EXPLORE========================

const imgs = [
  {
    id: 1,
    url: require('./assets/Explore/american.png'),
    place: 'American',
    qtd: 240,
  },
  {
    id: 2,
    url: require('./assets/Explore/italian.png'),
    place: 'Italian',
    qtd: 124,
  },
  {
    id: 3,
    url: require('./assets/Explore/chinese.png'),
    place: 'Chinese',
    qtd: 21,
  },
  {
    id: 4,
    url: require('./assets/Explore/middleEast.png'),
    place: 'Middle East',
    qtd: 240,
  },
  {
    id: 5,
    url: require('./assets/Explore/eastern.png'),
    place: 'Eastern',
    qtd: 21,
  },
  {
    id: 6,
    url: require('./assets/Explore/mexican.png'),
    place: 'Mexican',
    qtd: 240,
  },
  {
    id: 7,
    url: require('./assets/Explore/french.png'),
    place: 'French',
    qtd: 21,
  },
  {
    id: 8,
    url: require('./assets/Explore/indian.png'),
    place: 'Indian',
    qtd: 21,
  },
  {
    id: 9,
    url: require('./assets/Explore/european.png'),
    place: 'European',
    qtd: 21,
  },
  {
    id: 10,
    url: require('./assets/Explore/continental.png'),
    place: 'Continental',
    qtd: 21,
  },
];

//PROFILE=======================

const items = [
  {
    id: 1,
    url: require('./assets/Profile/select.png'),
    title: 'Saved Restaurants',
  },
  {
    id: 2,
    url: require('./assets/Profile/shop2.png'),
    title: 'My Orders',
  },
  {
    id: 3,
    url: require('./assets/Profile/offers.png'),
    title: 'Offers',
  },
  {
    id: 4,
    url: require('./assets/Profile/conf.png'),
    title: 'Account Settings',
  },
  {
    id: 5,
    url: require('./assets/Profile/pay.png'),
    title: 'Payment Profile',
  },
  {
    id: 6,
    url: require('./assets/Profile/help.png'),
    title: 'Help & Support',
  },
  {
    id: 7,
    url: require('./assets/Profile/logOut.png'),
    title: 'Logout',
  },
];

//RESTAURANT=========================

const rest = [
  {
    id: 1,
    url: require('./assets/Restaurant/italian.png'),
    title: 'Italian Breakfast Combo',
    price: 2.99,
  },
  {
    id: 2,
    url: require('./assets/Restaurant/bread.png'),
    title: 'Bread & Bacon',
    price: 5.99,
  },
];

const populars = [
  {
    id: 1,
    title: 'Bread Butter Toast',
    price: 4.99,
  },
  {
    id: 2,
    title: 'Veg & Cheese Sandwich',
    price: 4.99,
  },
];

const foodMenu = {
  id: 1,
  url: require('./assets/Restaurant/combo.png'),
  title: 'Italian Breakfast Combo',
  price: 2.99,
};

export { infoHome, imgs, items, rest, populars, foodMenu };
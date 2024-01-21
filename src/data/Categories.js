import Imagelink from '../Imagelink';
const categories = [
  {
    id: '1',
    Title: 'Ongoing Courses',
    data: [
      {
        id: 'item1',
        title: 'Arabic',
        description: 'Expires in: 2 months',
        image: Imagelink.Frame,
        time: '1hr 30 min',
      },
      {
        id: 'item2',
        title: 'Building',
        description: 'Expires in: 1 month',
        image: Imagelink.Rectangle,
        time: '1hr 50 min',
      },
      {
        id: 'item3',
        title: 'Hadith',
        description: 'Expires in: 15 days',
        image: Imagelink.student,
        time: '2hr 30 min',
      },
    ],
  },
  {
    id: '2',
    Title: 'Popular Courses',
    data: [
      {
        id: 'item4',
        title: 'Parah',
        description: 'Starts in: 2 months',
        image: Imagelink.Creed,
        time: '3hr 30 min',
      },
      {
        id: 'item5',
        title: 'Sunnah',
        description: 'Start in: 23 days',
        image: Imagelink.Hadith,
        time: '5hr 40 min',
      },
      {
        id: 'item6',
        title: 'Quran',
        description: 'Start in: 1 month',
        image: Imagelink.Quran,
        time: '1hr 30 min',
      },
    ],
  },
  {
    id: '3',
    Title: 'Free Courses',
    data: [
      {
        id: 'item7',
        title: 'Family',
        description: 'Expire in: 2 months',
        image: Imagelink.Family,
        time: '1hr 30 min',
      },
      {
        id: 'item8',
        title: 'Daily Life',
        description: 'Expires in: 23 days',
        image: Imagelink.Group,
        time: '1hr 30 min',
      },
      {
        id: 'item9',
        title: 'Islam',
        description: 'Expires in: 13 days',
        image: Imagelink.Every,
        time: '1hr 30 min',
      },
    ],
  },
];

export default categories;

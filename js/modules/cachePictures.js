const PRIMARY_PICS_URL = [
  'img/content/02.jpg',
  // 'img/content/03.jpg',
  'img/content/03_1.jpg',
  'img/content/03_2.jpg',
  'img/content/04.jpg',
  'img/content/05.jpg',
  'img/content/06_1.jpg',
  'img/content/06_2.jpg',
  'img/content/24.jpg',
  'img/content/25.jpg',
  'img/content/26.jpg',
  'img/content/28.jpg',
  'img/content/29.jpg',
  'img/content/30.jpg',
  'img/content/44.jpg',
  'img/content/45.jpg',
  'img/content/46.jpg',
  'img/content/60.jpg',
  'img/content/61.jpg',
  'img/content/62.jpg',
];
const SECONDARY_PICS_URL = [
  'img/content/07.jpg',
  'img/content/08_1.jpg',
  'img/content/08_2.jpg',
  'img/content/09.jpg',
  'img/content/10.jpg',
  'img/content/11.jpg',
  'img/content/12.jpg',
  'img/content/13.jpg',
  'img/content/14.jpg',
  'img/content/15_1.jpg',
  'img/content/15_2.jpg',
  'img/content/16.jpg',
  'img/content/17.jpg',
  'img/content/18.jpg',
  'img/content/19.jpg',
  'img/content/20.jpg',
  'img/content/21_1.jpg',
  'img/content/21_2.jpg',
  'img/content/22_1.jpg',
  'img/content/22_2.jpg',
  'img/content/31.jpg',
  'img/content/32.jpg',
  'img/content/33.jpg',
  'img/content/34.jpg',
  'img/content/35.jpg',
  'img/content/36.jpg',
  'img/content/37.jpg',
  'img/content/38.jpg',
  'img/content/39.jpg',
  'img/content/40.jpg',
  'img/content/41.jpg',
  'img/content/42.jpg',
  'img/content/47.jpg',
  'img/content/48.jpg',
  'img/content/49.jpg',
  'img/content/50.jpg',
  'img/content/51.jpg',
  'img/content/52.jpg',
  'img/content/53_1.jpg',
  'img/content/53_2.jpg',
  'img/content/54.jpg',
  'img/content/55_1.jpg',
  'img/content/55_2.jpg',
  'img/content/56.jpg',
  'img/content/57.jpg',
  'img/content/58.jpg',
  'img/content/63.jpg',
  'img/content/64.jpg',
  'img/content/65.jpg',
  'img/content/66.jpg',
  'img/content/67.jpg',
];

const cachePicture = (url) => {
  const img = new Image();
  img.src = url;
};

const cachePictures = () => {
  PRIMARY_PICS_URL.forEach(cachePicture);
  SECONDARY_PICS_URL.forEach(cachePicture);
};

export { cachePictures };

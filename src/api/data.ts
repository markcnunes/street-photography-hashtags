/* Icons reference: https://react-icons.github.io/react-icons/icons?name=gi */

/**
 * Takes one of the following strings as corresponds to icons variations
 */

export type TCategoryIcon =
  | 'GiBalloons'
  | 'GiBallPyramid'
  | 'GiBlackball'
  | 'GiFilmStrip'
  | 'GiModernCity'
  | 'GiNewspaper'
  | 'GiPalette'
  | 'GiSuspicious'
  | 'GiSpy'
  | 'GiTrophy';

export type TCategory = string;
export type TKeywords = string;

export interface ICategory {
  /**
   * Title of the page
   */
  category: TCategory;
  /**
   * Icon
   */
  icon: TCategoryIcon;
  /**
   * Array of keywords
   */
  keywords: TKeywords[];
}

const categoriesDefaultData: ICategory[] = [
  {
    category: 'popular',
    icon: 'GiTrophy',
    keywords: [
      '#_isp',
      '#apfmagazine',
      '#aspfeatures',
      '#bcncollective',
      '#burnmagazine',
      '#burnmyeye',
      '#capturestreets',
      '#citygrammers',
      '#curiouscameraclub',
      '#dpsp_street',
      '#dreaminstreets',
      '#everybodystreet',
      '#eyephotomagazine',
      '#f22bestphoto',
      '#friendsinstreets',
      '#fromstreetswithlove',
      '#hcsc_street',
      '#lensculture',
      '#lensculturestreets',
      '#life_is_street',
      '#magnumphotos',
      '#myspc',
      '#nonstopstreet',
      '#observecollective',
      '#ourstreets',
      '#rawstreetphotogallery',
      '#snapthestreetbeat',
      '#soulofstreet',
      '#spicollective',
      '#storyofthestreet',
      '#street_avengers',
      '#streetactivity',
      '#streetdreamsmag',
      '#streetgallerymagazine',
      '#streetziers',
      '#streethunters',
      '#streetizm',
      '#streetleaks',
      '#streetlensmag',
      '#streetmoment',
      '#streetouss',
      '#streetphotographerscommunity',
      '#streetphotographersmagazine',
      '#streetphotographyinternational',
      '#streetphotographyworldwide',
      '#streets_storytelling',
      '#streets_unseen',
      '#streets_vision',
      '#streetsansfrontieres',
      '#streetscape',
      '#streetscene',
      '#streetsgrammer',
      '#streetshared',
      '#streetweekly',
      '#streetxstory',
      '#supersweetstreet',
      '#sweet_street_beat',
      '#tdmmag',
      '#thestreephers',
      '#timeless_streets',
      '#today_streets',
      '#wearethestreets',
      '#zonestreet',
    ],
  },
  {
    category: 'portrait',
    icon: 'GiSuspicious',
    keywords: [
      '#peopleinframe',
      '#portraitstreet',
      '#streetportraits',
      '#streetportraiture',
      '#streetportraitphotography',
      '#streetportrait',
      '#urbanportrait',
    ],
  },
  {
    category: 'architecture',
    icon: 'GiModernCity',
    keywords: ['#archilovers', '#architecturelovers', '#streetarchitecture'],
  },
  {
    category: 'candid',
    icon: 'GiSpy',
    keywords: [
      '#candid',
      '#candidphotography',
      '#candidshot',
      '#candids',
      '#candidphoto',
      '#candidclick',
      '#candidmoments',
      '#candida',
      '#candidphotographer',
      '#candidshots',
      '#candidmoment',
      '#candidcamera',
      '#CandidMemories',
      '#candidmotherhood',
      '#candidportrait',
      '#candidsandra',
      '#candidslumber',
      '#candidphotos',
      '#candidasa',
      '#candidpic',
      '#candidatecrate',
      '#candidbooty',
    ],
  },
  {
    category: 'color',
    icon: 'GiPalette',
    keywords: [
      '#color_street',
      '#colour_street',
      '#spi_colour',
      '#streetcolor',
      '#streetcolour',
      '#colorstreets',
      '#streetphotographyguy',
    ],
  },
  {
    category: 'b&w',
    icon: 'GiBlackball',
    keywords: [
      '#friendsinbnw',
      '#bnw_captures',
      '#bnw_drama',
      '#bnw_demand',
      '#bnw_life',
      '#ig_photostars_bw',
      '#insta_bw',
      '#bnw_magazine',
      '#streetphoto_bw',
      '#streetphotography_bw',
      '#monochrome',
      '#blackandwhitephotography',
      '#blackandwhitephoto',
      '#monochromatic',
    ],
  },
  {
    category: 'film',
    icon: 'GiFilmStrip',
    keywords: [
      '#analogfeatures',
      '#analoguevibes',
      '#believeinfilm',
      '#buyfilmnotpixels',
      '#buyfilmnotmegapixels',
      '#filmcamera',
      '#filmcommunity',
      '#filmfeed',
      '#filmisalive',
      '#grainisgood',
      '#onfilm',
      '#shootfilm',
      '#staybrokeshootfilm',
    ],
  },
  {
    category: 'documentary',
    icon: 'GiNewspaper',
    keywords: ['#photodocumentary'],
  },
  {
    category: 'visual poetry',
    icon: 'GiBalloons',
    keywords: [
      '#apricotmagazine',
      '#artclassified',
      '#boyhill',
      '#broadmag',
      '#classicsmagazine',
      '#dreamermagazine',
      '#espritmag',
      '#etczine',
      '#fisheyemag',
      '#fivesixmag',
      '#indiependentmag',
      '#ithosmag',
      '#itsthatnice',
      '#magnificomagazine',
      '#makemeseemag',
      '#myamericanvision',
      '#noicemag',
      '#oftheafternoon',
      '#optionmag',
      '#ourmag',
      '#paperjournalmag',
      '#peachestate',
      '#phroommagazine',
      '#portbox',
      '#realismag',
      '#rentalmag',
      '#somewheremagazine',
      '#subjectivelyobjective',
      '#taintedmag',
      '#thinkverylittle',
      '#thisaintartschool',
      '#truecolormag',
      '#wtns',
    ],
  },
];

export interface ILocation {
  /**
   * Title of the page
   */
  category: string;
  /**
   * Array of keywords
   */
  keywords: string[];
}

export const locationsData: ILocation[] = [
  {
    category: 'london',
    keywords: [
      '#explorelondon',
      '#londonstreet',
      '#londonstreetlife',
      '#londonstreets',
      '#londonphotographer',
      '#londonstreetphotography',
    ],
  },
  {
    category: 'NYC',
    keywords: [
      '#icapture_nyc',
      '#nycstreets',
      '#newyorkstreetphotography',
      '#nycspc',
      '#newyork_streetstyle_',
      '#streetsofnyc',
      '#streetsofnewyork',
    ],
  },
];

export default categoriesDefaultData;

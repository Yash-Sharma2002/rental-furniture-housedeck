// Products 
import Electronics from '../assets/products/ic-electronics.svg'
import Appliances from '../assets/products/ic-appliances.svg'
import Fitness from "../assets/products/ic-fitness.svg"
import Full_Home from '../assets/products/ic-fullhome.svg'
import Storage from "../assets/products/ic-storage.svg"
import Work_Stations from '../assets/products/ic-ws.svg'
import Kids_Room from '../assets/products/ic-kids.svg'
import Dining_Room from '../assets/products/ic-diningroom.svg'
import Two_Wheelers from '../assets/products/ic-twowheeler-v1.svg'

// Collections
import Award_Winners from '../assets/collections/ic-awardwinners.svg'
import Binge_Watch from '../assets/collections/ic-binge-watch.svg'
import Essentials from "../assets/collections/ic-essentials.svg"
import Most_Popular from '../assets/collections/ic-most-popular.svg'
import Newly_Launched from "../assets/collections/ic-newlylaunched.svg"
import Special_Deals from '../assets/collections/ic-specialdeals.svg'
import Storage_Combos from '../assets/collections/ic-storage.svg'


export const CitiesImg = [
  { id: "bangalore", url: require("../assets/cities/bangalore.png"), name: "Bangalore", },
  { id: "chennai", url: require("../assets/cities/chennai.png"), name: "Chennai" },
  { id: "delhi", url: require("../assets/cities/delhi.png"), name: "Delhi" },
  { id: "faridabad", url: require("../assets/cities/faridabad.png"), name: "Faridabad" },
  { id: "ghaziabad", url: require("../assets/cities/ghaziabad.png"), name: "Ghaziabad" },
  {
    id: "greater_noida",
    url: require("../assets/cities/greater_noida.png"),
    name: "Greater Noida",
  },
  { id: "gurgaon", url: require("../assets/cities/gurgaon.png"), name: "Gurgaon" },
  { id: "hyderabad", url: require("../assets/cities/hyderabad.png"), name: "Hyderabad" },
  { id: "mumbai", url: require("../assets/cities/mumbai.png"), name: "Mumbai" },
  { id: "noida", url: require("../assets/cities/noida.png"), name: "Noida" },
  { id: "pune", url: require("../assets/cities/pune.png"), name: "Pune" },
];


export const ProductsImgData = [
  { img: Electronics, url: '/categories/products/electronics', name: "electronics", },
  { img: Appliances, url: '/categories/products/appliances', name: "appliances" },
  { img: Fitness, url: '/categories/products/fitness', name: "fitness" },
  { img: Full_Home, url: '/categories/products/full_home', name: "full home" },
  { img: Storage, url: '/categories/products/storage', name: "storage" },
  { img: Work_Stations, url: '/categories/products/work_stations', name: "work stations", },
  { img: Kids_Room, url: '/categories/products/kids_room', name: "kids room" },
  { img: Dining_Room, url: '/categories/products/dining_room', name: "dining room" },
  { img: Two_Wheelers, url: '/categories/products/two_wheelers', name: "two wheelers" },
];




export const CollectionImgData = [
  { img: Binge_Watch, url: '/categories/collections/binge_watch_collections', name: "binge watch collections", },
  { img: Special_Deals, url: '/categories/collections/special_deals', name: "special deals" },
  { img: Most_Popular, url: '/categories/collections/most_popular', name: "most popular" },
  { img: Essentials, url: '/categories/collections/essentials', name: "essentials" },
  { img: Newly_Launched, url: '/categories/collections/newly_launched', name: "newly launched" },
  { img: Storage_Combos, url: '/categories/collections/storage_combos', name: "storage combos", },
  { img: Award_Winners, url: '/categories/collections/award_winners', name: "award winners" },
];


export const AvailabilityData = {

  'bangalore': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  'chennai': {
    'products': {
      'available': ['electronics', 'appliances', 'two wheelers', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'fitness']
    },
    'collections': {
      'available': ['binge watch collections', 'storage combos', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'special deals', 'award winners']
    }
  },

  'delhi': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  // 'faridabad': {
  //   'products': {
  //     'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
  //     'not_available': ['kids room', 'dining room', 'two wheelers']
  //   },
  //   'collections': {
  //     'avalable': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
  //     'not_avalable': ['newly launched', 'storage combos', 'award winners']
  //   }
  // },

  'ghaziabad': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  'greater_noida': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  // 'gurgaon': {
  //   'products': {
  //     'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
  //     'not_available': ['kids room', 'dining room', 'two wheelers']
  //   },
  //   'collections': {
  //     'avalable': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
  //     'not_avalable': ['newly launched', 'storage combos', 'award winners']
  //   }
  // },

  'hyderabad': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  'mumbai': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  'noida': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },

  'pune': {
    'products': {
      'available': ['electronics', 'appliances', 'fitness', 'full home', 'storage', 'work stations'],
      'not_available': ['kids room', 'dining room', 'two wheelers']
    },
    'collections': {
      'available': ['binge watch collections', 'special deals', 'most popular', 'essentials'],
      'not_available': ['newly launched', 'storage combos', 'award winners']
    }
  },
}
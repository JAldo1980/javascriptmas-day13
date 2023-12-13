const meatRecipes = [
  // MEAT OPTIONS
  {
    title: "Festive Herb-Crusted Prime Rib Extravaganza",
    description:
      "Elevate your Christmas celebration for one with this succulent prime rib, expertly crusted with a blend of aromatic herbs and spices. Slow-roasted to perfection, each slice promises a juicy and flavorful experience that will leave you craving seconds. Accompanied by a rich red wine reduction and garlic-infused mashed potatoes, this prime rib extravaganza is the epitome of holiday indulgence.",
    image: "/ribs-image-1.png",
    link: "https://www.visitnorway.com/things-to-do/food-and-drink/the-norwegian-cookbook/christmas-pork-ribs/",
    type: "meat",
    id: 1,
  },
  {
    title: "Maple-Glazed Ham Harmony",
    description:
      "Unwrap the sweet and savory magic of Christmas with our Maple-Glazed Ham Harmony for two. This delectable ham is generously coated in a luscious maple glaze, creating a perfect balance of flavors. Served alongside caramelized sweet potatoes and green bean almondine, it's a symphony of tastes that will have your festive spirits singing.",
    image: "/ham-image-2.png",
    link: "https://www.everydayeileen.com/easy-maple-glazed-ham-recipe/",
    type: "meat",
    id: 2,
  },
  {
    title: "Cranberry-Glazed Duck Delight",
    description:
      "Add a touch of sophistication to your holiday table with our Cranberry-Glazed Duck Delight. The succulent duck is bathed in a tangy cranberry glaze, creating a symphony of flavors that dance on your palate. Accompanied by wild rice pilaf and roasted Brussels sprouts, this dish is a festive fusion of sweet and savory that will make your Christmas dinner memorable.",
    image: "/duck-image-3.png",
    link: "https://www.gressinghamduck.co.uk/recipes/honey-and-orange-glazed-duck-breast/",
    type: "meat",
    id: 3,
  },
  {
    title: "Rosemary-Scented Lamb Leg Roast",
    description:
      "Experience the warmth of the season with our Rosemary-Scented Lamb Leg Roast. Slow-roasted to perfection, the lamb is infused with aromatic rosemary and garlic, creating a dish that is both elegant and comforting. Served alongside minted pea puree and roasted root vegetables, this Christmas dinner option is a delightful blend of tradition and culinary finesse",
    image: "/lamb-image-4.png",
    link: "https://www.bbcgoodfood.com/recipes/roast-lamb-studded-rosemary-garlic",
    type: "meat",
    id: 4,
  },
  {
    title: "Peppercorn-Crusted Beef Tenderloin Bliss",
    description:
      "Indulge in a feast of flavors with our Peppercorn-Crusted Beef Tenderloin Bliss. The tenderloin is expertly coated in a bold peppercorn crust, delivering a spicy kick that harmonizes with the richness of the beef. Accompanied by truffle-infused mashed potatoes and sautéed asparagus, this dish is a celebration of luxurious tastes that will make your Christmas dinner a culinary triumph.",
    image: "/beef-image-5.png",
    link: "https://www.onceuponachef.com/recipes/roast-beef-tenderloin-wine-sauce.html",
    type: "meat",
    id: 5,
  },
  {
    title: "Gilded Turkey Gala: A Feast of Festive Flavors",
    description:
      "Celebrate the holiday season with our Golden Roast Turkey Extravaganza, a masterpiece that embodies the essence of Christmas feasting. The star of the show is a succulent turkey, expertly roasted to a golden perfection. The crispy skin gives way to juicy, tender meat that will leave your guests craving more. Complemented by traditional sage stuffing, velvety mashed potatoes, and cranberry-orange relish, this festive turkey dinner is a symphony of classic flavors that will make your Christmas memorable",
    image: "/turkey-image-5.png",
    link: "https://cafedelites.com/roast-turkey/",
    type: "meat",
    id: 6,
  },
];

// vegitarian options
const vegiRecipes = [
  {
    title: "Harvest Stuffed Butternut Squash Soiree",
    description:
      "Join us for a celebration of flavors with our Harvest Stuffed Butternut Squash Soiree. The star of the table is a perfectly roasted butternut squash, generously stuffed with a medley of wild rice, quinoa, cranberries, and pecans. Accompanied by a side of balsamic-glazed Brussels sprouts and creamy goat cheese mashed sweet potatoes, this vegetarian delight promises a festive feast that captures the essence of the season.",
    image: "",
    link: "",
    type: "vegetarian",
    id: 1,
  },
  {
    title: "Mushroom Wellington Elegance",
    description:
      "Elevate your holiday dining experience with our Mushroom Wellington Elegance. Layers of earthy mushrooms, spinach, and savory herbs are encased in flaky puff pastry, creating a show-stopping centerpiece. Served alongside truffle-infused mashed potatoes and roasted asparagus, this vegetarian Wellington is a culinary masterpiece that brings elegance and richness to your Christmas table.",
    image: "",
    link: "",
    type: "vegetarian",
    id: 2,
  },
  {
    title: "Cranberry and Pecan Stuffed Acorn Squash Affair",
    description:
      "Embark on a journey of taste with our Cranberry and Pecan Stuffed Acorn Squash Affair. The tender acorn squash is filled with a delectable stuffing featuring cranberries, pecans, and aromatic herbs. Accompanied by a side of garlic-roasted Brussels sprouts and lemon-infused quinoa, this vegetarian affair is a harmonious blend of textures and flavors, promising a festive experience for your taste buds.",
    image: "",
    link: "",
    type: "vegetarian",
    id: 3,
  },
];

// VEGAN options

const veganRecipes = [
  {
    title: "Festive Lentil Loaf Fiesta",
    description:
      "Join us for a flavor-packed celebration with our Festive Lentil Loaf Fiesta. Our signature lentil loaf, infused with aromatic spices, is the star of the show. Complemented by quinoa-stuffed bell peppers, rosemary-infused roasted potatoes, and a tangy cranberry-orange sauce, this vegan feast promises a festive experience that satisfies both your taste buds and holiday spirit",
    image: "",
    link: "",
    type: "vegan",
    id: 1,
  },
  {
    title: "Vegan Wellington Extravaganza",
    description:
      "Elevate your holiday dining with our Vegan Wellington Extravaganza. Encased in flaky puff pastry, layers of savory mushrooms, spinach, and lentils create a show-stopping centerpiece. Served alongside creamy mashed sweet potatoes and balsamic-glazed Brussels sprouts, this vegan Wellington is a culinary masterpiece that brings elegance and richness to your Christmas table.",
    image: "",
    link: "",
    type: "vegan",
    id: 2,
  },
  {
    title: "Stuffed Acorn Squash Symphony",
    description:
      "Embark on a delightful journey of flavors with our Stuffed Acorn Squash Symphony. Tender acorn squash is filled with a hearty stuffing featuring quinoa, chickpeas, and a medley of seasonal vegetables. Paired with garlic-roasted Brussels sprouts and lemon-infused wild rice, this vegan symphony is a harmonious blend of textures and tastes, creating a festive experience for all plant-based enthusiasts.",
    image: "",
    link: "",
    type: "vegan",
    id: 3,
  },
];

const glutenRecipes = [
  {
    title: "Gluten-Free Joyful Roast Chicken Banquet",
    description:
      "Revel in a gluten-free feast with our Joyful Roast Chicken Banquet. The star of the show is a perfectly roasted whole chicken, infused with a blend of herbs and citrus. Accompanied by wild rice stuffing, garlic-roasted sweet potatoes, and sautéed green beans, this gluten-free banquet promises a celebration of flavors that will delight your taste buds and keep your festivities worry-free",
    image: "",
    link: "",
    type: "gluten",
    id: 1,
  },
];

const nutRecipes = [
  {
    title: "Nut-Free Festive Herb-Crusted Pork Extravaganza",
    description:
      "Dive into a nut-free culinary delight with our Festive Herb-Crusted Pork Extravaganza. The centerpiece is a succulent pork roast, expertly crusted with a medley of aromatic herbs. Accompanied by quinoa and cranberry-stuffed acorn squash, rosemary-infused roasted vegetables, and buttery mashed potatoes, this nut-free extravaganza promises a festive feast that caters to all tastes, ensuring a worry-free and joyous celebration",
    image: "",
    link: "",
    type: "nut",
    id: 1,
  },
];

export default {
  meatRecipes,
  vegiRecipes,
  veganRecipes,
  glutenRecipes,
  nutRecipes,
};

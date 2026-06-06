import{a as x}from"./chunk-3D7LGB6O.js";import"./chunk-4AQWYRNL.js";import{e as g}from"./chunk-L3MMBQOB.js";import"./chunk-KY6VXMBW.js";import"./chunk-UUJ3Q2RN.js";import{$a as t,Ja as o,Ma as c,ab as n,bb as r,ca as p,rb as e,sb as l,za as a}from"./chunk-RW673TXT.js";var u=class d extends x{getTocItems(){return[{id:"overview",label:this.lang.t("api.toc.overview")},{id:"endpoints-glance",label:this.lang.t("api.mdb.gs.endpoints-title")},{id:"base-url",label:this.lang.t("api.mdb.gs.base-url-title")},{id:"typical-response",label:this.lang.t("api.mdb.gs.response-title")}]}static \u0275fac=(()=>{let m;return function(i){return(m||(m=p(d)))(i||d)}})();static \u0275cmp=o({type:d,selectors:[["app-meal-db-introduction"]],features:[c],decls:184,vars:24,consts:[[1,"breadcrumb"],["routerLink","/"],["routerLink","/api-docs"],[1,"portfolio-note"],[1,"fas","fa-circle-info"],["id","overview",1,"api-section"],[1,"page-eyebrow"],[1,"hero-summary"],[1,"hero-grid"],[1,"hero-card"],[1,"hero-meta"],[1,"meta-pill"],[1,"fas","fa-utensils"],[1,"fas","fa-image"],[1,"fab","fa-youtube"],[1,"fas","fa-magnifying-glass"],[1,"fas","fa-tag"],[1,"fas","fa-globe"],[1,"fas","fa-unlock"],[1,"fas","fa-bolt"],[1,"fas","fa-infinity"],["id","endpoints-glance",1,"api-section"],[1,"params-table"],[1,"method-badge","method-get"],["id","base-url",1,"api-section"],[1,"endpoint-signature"],[1,"ep-base"],[1,"code-example"],[1,"code-header"],[1,"language-bash"],[1,"code-example",2,"margin-top","0.75rem"],[1,"language-javascript"],["id","typical-response",1,"api-section"],[1,"language-json"]],template:function(s,i){s&1&&(t(0,"nav",0)(1,"a",1),e(2),n(),t(3,"span"),e(4,">"),n(),t(5,"a",2),e(6),n(),t(7,"span"),e(8,">"),n(),t(9,"span"),e(10),n()(),t(11,"div",3),r(12,"i",4),t(13,"p"),e(14),n()(),t(15,"section",5)(16,"span",6),e(17),n(),t(18,"h1"),e(19),n(),t(20,"p",7),e(21),n(),t(22,"div",8)(23,"div",9)(24,"h3"),e(25),n(),t(26,"p"),e(27),n(),t(28,"div",10)(29,"span",11),r(30,"i",12),e(31," 300+ meals"),n(),t(32,"span",11),r(33,"i",13),e(34," Images"),n(),t(35,"span",11),r(36,"i",14),e(37," YouTube links"),n()()(),t(38,"div",9)(39,"h3"),e(40),n(),t(41,"p"),e(42),n(),t(43,"div",10)(44,"span",11),r(45,"i",15),e(46," By name"),n(),t(47,"span",11),r(48,"i",16),e(49," By category"),n(),t(50,"span",11),r(51,"i",17),e(52," By area"),n()()(),t(53,"div",9)(54,"h3"),e(55),n(),t(56,"p"),e(57),n(),t(58,"div",10)(59,"span",11),r(60,"i",18),e(61," No auth"),n(),t(62,"span",11),r(63,"i",19),e(64," JSON"),n(),t(65,"span",11),r(66,"i",20),e(67," Free forever"),n()()()()(),t(68,"section",21)(69,"h2"),e(70),n(),t(71,"table",22)(72,"thead")(73,"tr")(74,"th"),e(75,"Method"),n(),t(76,"th"),e(77,"Endpoint"),n(),t(78,"th"),e(79,"Description"),n()()(),t(80,"tbody")(81,"tr")(82,"td")(83,"span",23),e(84,"GET"),n()(),t(85,"td")(86,"code"),e(87,"search.php?s={name}"),n()(),t(88,"td"),e(89),n()(),t(90,"tr")(91,"td")(92,"span",23),e(93,"GET"),n()(),t(94,"td")(95,"code"),e(96,"search.php?f={letter}"),n()(),t(97,"td"),e(98),n()(),t(99,"tr")(100,"td")(101,"span",23),e(102,"GET"),n()(),t(103,"td")(104,"code"),e(105,"lookup.php?i={id}"),n()(),t(106,"td"),e(107),n()(),t(108,"tr")(109,"td")(110,"span",23),e(111,"GET"),n()(),t(112,"td")(113,"code"),e(114,"random.php"),n()(),t(115,"td"),e(116),n()(),t(117,"tr")(118,"td")(119,"span",23),e(120,"GET"),n()(),t(121,"td")(122,"code"),e(123,"categories.php"),n()(),t(124,"td"),e(125),n()(),t(126,"tr")(127,"td")(128,"span",23),e(129,"GET"),n()(),t(130,"td")(131,"code"),e(132,"filter.php?c={cat}"),n()(),t(133,"td"),e(134),n()(),t(135,"tr")(136,"td")(137,"span",23),e(138,"GET"),n()(),t(139,"td")(140,"code"),e(141,"list.php?c=list"),n()(),t(142,"td"),e(143),n()()()()(),t(144,"section",24)(145,"h2"),e(146),n(),t(147,"div",25)(148,"span",26),e(149,"https://www.themealdb.com/api/json/v1/1/"),n()(),t(150,"p"),e(151,"The "),t(152,"code"),e(153,"v1"),n(),e(154," segment is the API version and "),t(155,"code"),e(156,"1"),n(),e(157," is the public demo key. All requests use this prefix."),n(),t(158,"div",27)(159,"div",28)(160,"span"),e(161,"curl"),n()(),t(162,"pre")(163,"code",29),e(164,'curl "https://www.themealdb.com/api/json/v1/1/random.php"'),n()()(),t(165,"div",30)(166,"div",28)(167,"span"),e(168,"JavaScript"),n()(),t(169,"pre")(170,"code",31),e(171,`const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
const { meals } = await res.json();
const meal = meals?.[0]; // always null-check!`),n()()()(),t(172,"section",32)(173,"h2"),e(174),n(),t(175,"p"),e(176),n(),t(177,"div",27)(178,"div",28)(179,"span"),e(180,"JSON \u2014 random.php response (truncated)"),n()(),t(181,"pre")(182,"code",33),e(183,`{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Teriyaki Chicken Casserole",
      "strCategory": "Chicken",
      "strArea": "Japanese",
      "strInstructions": "Preheat oven to 350\xB0F...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
      "strTags": "Meat,Casserole",
      "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
      "strIngredient1": "soy sauce",
      "strMeasure1": "3/4 cup",
      "strIngredient2": "water",
      "strMeasure2": "1/2 cup",
      "strIngredient3": "sugar",
      "strMeasure3": "1/4 cup",
      "strIngredient4": "sesame oil",
      "strMeasure4": "1/2 teaspoon",
      "strIngredient5": "garlic",
      "strMeasure5": "2 cloves",
      "strIngredient6": "ginger",
      "strMeasure6": "1/2 teaspoon",
      "strIngredient7": "corn starch",
      "strMeasure7": "4 Tablespoons",
      "strIngredient8": "chicken thighs",
      "strMeasure8": "2",
      "strIngredient9": "",
      "strMeasure9": "",
      ...
    }
  ]
}`),n()()()()),s&2&&(a(2),l(i.lang.t("api.bc.home")),a(4),l(i.lang.t("api.bc.quick-start")),a(4),l(i.lang.t("api.bc.meal-db")),a(4),l(i.lang.t("api.mdb.gs.portfolio-note")),a(3),l(i.lang.t("api.mdb.gs.eyebrow")),a(2),l(i.lang.t("api.mdb.gs.title")),a(2),l(i.lang.t("api.mdb.gs.hero-summary")),a(4),l(i.lang.t("api.mdb.gs.card1.title")),a(2),l(i.lang.t("api.mdb.gs.card1.desc")),a(13),l(i.lang.t("api.mdb.gs.card2.title")),a(2),l(i.lang.t("api.mdb.gs.card2.desc")),a(13),l(i.lang.t("api.mdb.gs.card3.title")),a(2),l(i.lang.t("api.mdb.gs.card3.desc")),a(13),l(i.lang.t("api.mdb.gs.endpoints-title")),a(19),l(i.lang.t("api.mdb.gs.ep1")),a(9),l(i.lang.t("api.mdb.gs.ep2")),a(9),l(i.lang.t("api.mdb.gs.ep3")),a(9),l(i.lang.t("api.mdb.gs.ep4")),a(9),l(i.lang.t("api.mdb.gs.ep5")),a(9),l(i.lang.t("api.mdb.gs.ep6")),a(9),l(i.lang.t("api.mdb.gs.ep7")),a(3),l(i.lang.t("api.mdb.gs.base-url-title")),a(28),l(i.lang.t("api.mdb.gs.response-title")),a(2),l(i.lang.t("api.mdb.gs.response-note")))},dependencies:[g],encapsulation:2})};export{u as MealDbIntroduction};

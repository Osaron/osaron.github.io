import{a as x}from"./chunk-3D7LGB6O.js";import"./chunk-4AQWYRNL.js";import{Ja as g,Ma as S,_ as c,ca as u,cb as e,db as t,eb as a,ib as E,rb as n,sb as d,za as m}from"./chunk-RW673TXT.js";var b=class p extends x{getTocItems(){return[{id:"content-api",label:this.lang.t("api.mdb.content.meal-obj-title")},{id:"ingredients",label:this.lang.t("api.mdb.content.ing-title")},{id:"filter-lookup",label:this.lang.t("api.mdb.content.filter-title")},{id:"images",label:this.lang.t("api.mdb.content.img-title")}]}activeTab=c("js-filter");copyCode(o){let r=o.closest(".code-example")?.querySelector("pre code");r&&navigator.clipboard.writeText(r.textContent??"").then(()=>{let i=o.querySelector("i")??o,s=i.className;i.className="fas fa-check",setTimeout(()=>{i.className=s},1800)})}static \u0275fac=(()=>{let o;return function(i){return(o||(o=u(p)))(i||p)}})();static \u0275cmp=g({type:p,selectors:[["app-meal-db-content-api"]],features:[S],decls:211,vars:15,consts:[[1,"breadcrumb"],["routerLink","/"],["routerLink","/api-docs/meal-db/introduction"],["id","content-api",1,"api-section"],[1,"page-eyebrow"],[1,"hero-summary"],[1,"params-table"],["id","ingredients",1,"api-section"],[1,"code-example"],[1,"code-header"],[1,"language-json"],[1,"info-card",2,"margin-top","1rem"],[1,"info-card-icon"],[1,"fas","fa-lightbulb"],[1,"code-example",2,"margin-top","1rem"],[1,"copy-btn",3,"click"],[1,"fas","fa-copy"],[1,"language-javascript"],["id","filter-lookup",1,"api-section"],[1,"code-example",2,"margin-top","0.75rem"],[1,"language-python"],["id","images",1,"api-section"],[1,"filtering-recipes",2,"margin-top","1.5rem"],[1,"recipe-card"],[1,"fas","fa-film"],[1,"code-example",2,"margin-top","0.5rem"],[1,"language-html"],[1,"fas","fa-tags"]],template:function(r,i){r&1&&(e(0,"nav",0)(1,"a",1),n(2),t(),e(3,"span"),n(4,">"),t(),e(5,"a",2),n(6),t(),e(7,"span"),n(8,">"),t(),e(9,"span"),n(10),t()(),e(11,"section",3)(12,"span",4),n(13),t(),e(14,"h1"),n(15),t(),e(16,"p",5),n(17),t(),e(18,"h3"),n(19),t(),e(20,"p"),n(21),t(),e(22,"table",6)(23,"thead")(24,"tr")(25,"th"),n(26,"Field"),t(),e(27,"th"),n(28,"Type"),t(),e(29,"th"),n(30,"Description"),t()()(),e(31,"tbody")(32,"tr")(33,"td")(34,"code"),n(35,"idMeal"),t()(),e(36,"td"),n(37,"string"),t(),e(38,"td"),n(39,"Unique numeric ID (as string)"),t()(),e(40,"tr")(41,"td")(42,"code"),n(43,"strMeal"),t()(),e(44,"td"),n(45,"string"),t(),e(46,"td"),n(47,"Meal name"),t()(),e(48,"tr")(49,"td")(50,"code"),n(51,"strCategory"),t()(),e(52,"td"),n(53,"string"),t(),e(54,"td"),n(55,"Category (Chicken, Dessert, Seafood\u2026)"),t()(),e(56,"tr")(57,"td")(58,"code"),n(59,"strArea"),t()(),e(60,"td"),n(61,"string"),t(),e(62,"td"),n(63,"Cuisine origin (Italian, Japanese, Mexican\u2026)"),t()(),e(64,"tr")(65,"td")(66,"code"),n(67,"strInstructions"),t()(),e(68,"td"),n(69,"string"),t(),e(70,"td"),n(71,"Full cooking instructions (plain text, line-break delimited)"),t()(),e(72,"tr")(73,"td")(74,"code"),n(75,"strMealThumb"),t()(),e(76,"td"),n(77,"string (URL)"),t(),e(78,"td"),n(79,"Full-size image URL. Append "),e(80,"code"),n(81,"/preview"),t(),n(82," for 228\xD7228."),t()(),e(83,"tr")(84,"td")(85,"code"),n(86,"strTags"),t()(),e(87,"td"),n(88,"string | null"),t(),e(89,"td"),n(90,"Comma-separated tags, or null"),t()(),e(91,"tr")(92,"td")(93,"code"),n(94,"strYoutube"),t()(),e(95,"td"),n(96,"string | null"),t(),e(97,"td"),n(98,"YouTube tutorial URL, or null"),t()(),e(99,"tr")(100,"td")(101,"code"),n(102,"strIngredient1\u201320"),t()(),e(103,"td"),n(104,"string"),t(),e(105,"td"),n(106,"Up to 20 ingredient names. Empty string when unused."),t()(),e(107,"tr")(108,"td")(109,"code"),n(110,"strMeasure1\u201320"),t()(),e(111,"td"),n(112,"string"),t(),e(113,"td"),n(114,"Matching measures for each ingredient. Empty string when unused."),t()()()()(),e(115,"section",7)(116,"h2"),n(117),t(),e(118,"p"),n(119),t(),e(120,"div",8)(121,"div",9)(122,"span"),n(123,"JSON \u2014 ingredient fields (truncated)"),t()(),e(124,"pre")(125,"code",10),n(126,`{
  "strIngredient1": "soy sauce",   "strMeasure1": "3/4 cup",
  "strIngredient2": "water",       "strMeasure2": "1/2 cup",
  "strIngredient3": "sugar",       "strMeasure3": "1/4 cup",
  "strIngredient4": "sesame oil",  "strMeasure4": "1/2 teaspoon",
  "strIngredient5": "garlic",      "strMeasure5": "2 cloves",
  ...
  "strIngredient9": "",            "strMeasure9": ""
}`),t()()(),e(127,"div",11)(128,"div",12),a(129,"i",13),t(),e(130,"div")(131,"p"),n(132),t()()(),e(133,"div",14)(134,"div",9)(135,"span"),n(136,"JavaScript \u2014 extract ingredients"),t(),e(137,"button",15),E("click",function(l){return i.copyCode(l.target)}),a(138,"i",16),t()(),e(139,"pre")(140,"code",17),n(141,`function getIngredients(meal) {
  return Array.from({ length: 20 }, (_, i) => i + 1)
    .map(n => ({
      ingredient: meal[\`strIngredient\${n}\`],
      measure:    meal[\`strMeasure\${n}\`],
    }))
    .filter(item => item.ingredient?.trim());
}`),t()()()(),e(142,"section",18)(143,"h2"),n(144),t(),e(145,"p"),n(146),t(),e(147,"div",8)(148,"div",9)(149,"span"),n(150,"JavaScript \u2014 filter then lookup"),t(),e(151,"button",15),E("click",function(l){return i.copyCode(l.target)}),a(152,"i",16),t()(),e(153,"pre")(154,"code",17),n(155,`const BASE = 'https://www.themealdb.com/api/json/v1/1/';

// Step 1 \u2014 filter returns lightweight list
const filterRes = await fetch(\`\${BASE}filter.php?c=Seafood\`);
const { meals: list } = await filterRes.json();
// list[0] = { idMeal, strMeal, strMealThumb }

// Step 2 \u2014 lookup returns full meal object
const lookupRes = await fetch(\`\${BASE}lookup.php?i=\${list[0].idMeal}\`);
const { meals } = await lookupRes.json();
const fullMeal = meals[0]; // strInstructions, ingredients, etc.`),t()()(),e(156,"div",19)(157,"div",9)(158,"span"),n(159,"Python"),t(),e(160,"button",15),E("click",function(l){return i.copyCode(l.target)}),a(161,"i",16),t()(),e(162,"pre")(163,"code",20),n(164,`import requests

BASE = "https://www.themealdb.com/api/json/v1/1/"

# Step 1 \u2014 get filtered list
meals_list = requests.get(f"{BASE}filter.php?a=Japanese").json()["meals"]

# Step 2 \u2014 lookup the first result
meal_id = meals_list[0]["idMeal"]
full = requests.get(f"{BASE}lookup.php?i={meal_id}").json()["meals"][0]
print(full["strMeal"], full["strInstructions"][:100])`),t()()()(),e(165,"section",21)(166,"h2"),n(167),t(),e(168,"p"),n(169),t(),e(170,"div",8)(171,"div",9)(172,"span"),n(173,"JavaScript"),t(),e(174,"button",15),E("click",function(l){return i.copyCode(l.target)}),a(175,"i",16),t()(),e(176,"pre")(177,"code",17),n(178,`const meal = data.meals[0];

// Full-size image
const fullSrc = meal.strMealThumb;
// \u2192 "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"

// Compact 228\xD7228 thumbnail
const thumbSrc = \`\${meal.strMealThumb}/preview\`;
// \u2192 "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg/preview"`),t()()(),e(179,"div",22)(180,"div",23)(181,"h4"),a(182,"i",24),n(183," YouTube Link"),t(),e(184,"p"),n(185,"Many meals include "),e(186,"code"),n(187,"strYoutube"),t(),n(188,". Embed it as an iframe or link directly. Check for null before rendering."),t(),e(189,"div",25)(190,"div",9)(191,"span"),n(192,"HTML"),t()(),e(193,"pre")(194,"code",26),n(195,`<!-- Convert watch URL to embed URL -->
<iframe
  src="https://www.youtube.com/embed/4aZr5hZXP_s"
  frameborder="0" allowfullscreen>
</iframe>`),t()()()(),e(196,"div",23)(197,"h4"),a(198,"i",27),n(199," Tags"),t(),e(200,"p")(201,"code"),n(202,"strTags"),t(),n(203," is a comma-separated string or null. Split it to build tag pills."),t(),e(204,"div",25)(205,"div",9)(206,"span"),n(207,"JavaScript"),t()(),e(208,"pre")(209,"code",17),n(210,"const tags = meal.strTags?.split(',').map(t => t.trim()) ?? [];"),t()()()()()()),r&2&&(m(2),d(i.lang.t("api.bc.home")),m(4),d(i.lang.t("api.bc.meal-db")),m(4),d(i.lang.t("api.mdb.content.title")),m(3),d(i.lang.t("api.mdb.content.eyebrow")),m(2),d(i.lang.t("api.mdb.content.title")),m(2),d(i.lang.t("api.mdb.content.hero-summary")),m(2),d(i.lang.t("api.mdb.content.meal-obj-title")),m(2),d(i.lang.t("api.mdb.content.meal-obj-desc")),m(96),d(i.lang.t("api.mdb.content.ing-title")),m(2),d(i.lang.t("api.mdb.content.ing-desc")),m(13),d(i.lang.t("api.mdb.content.ing-tip")),m(12),d(i.lang.t("api.mdb.content.filter-title")),m(2),d(i.lang.t("api.mdb.content.filter-desc")),m(21),d(i.lang.t("api.mdb.content.img-title")),m(2),d(i.lang.t("api.mdb.content.img-desc")))},encapsulation:2})};export{b as MealDbContentApi};

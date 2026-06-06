import{a as b}from"./chunk-3D7LGB6O.js";import"./chunk-4AQWYRNL.js";import{Ja as g,Ma as v,_ as u,ca as h,cb as t,db as i,eb as d,ib as m,pb as s,rb as n,sb as o,za as a}from"./chunk-RW673TXT.js";var S=class E extends b{getTocItems(){return[{id:"authentication",label:this.lang.t("api.toc.authentication")},{id:"rate-limiting",label:this.lang.t("api.toc.rate-limiting")},{id:"handling-errors",label:this.lang.t("api.toc.handling-errors")},{id:"best-practices",label:this.lang.t("api.toc.best-practices")}]}activeTab=u("js-retry");copyCode(c){let p=c.closest(".code-example")?.querySelector("pre code");p&&navigator.clipboard.writeText(p.textContent??"").then(()=>{let e=c.querySelector("i"),r=e.className;e.className="fas fa-check",setTimeout(()=>{e.className=r},1800)})}static \u0275fac=(()=>{let c;return function(e){return(c||(c=h(E)))(e||E)}})();static \u0275cmp=g({type:E,selectors:[["app-authentication"]],features:[v],decls:153,vars:46,consts:[[1,"breadcrumb"],[1,"portfolio-note"],[1,"fas","fa-circle-info"],["id","authentication",1,"api-section"],[1,"info-grid"],[1,"info-card"],[1,"fas","fa-unlock",2,"color","var(--accent)","margin-right","0.4rem"],[1,"fas","fa-user-slash",2,"color","var(--accent)","margin-right","0.4rem"],[1,"code-example"],[1,"code-label"],[1,"code-label-actions"],[1,"code-path"],[1,"code-copy-btn",3,"click"],[1,"fas","fa-copy"],[1,"language-bash"],["id","rate-limiting",1,"api-section"],[1,"params-table"],[1,"language-json"],["id","handling-errors",1,"api-section"],[1,"code-tabs"],[1,"tab-btn",3,"click"],[1,"code-content"],[1,"language-javascript"],[1,"language-python"],["id","best-practices",1,"api-section"]],template:function(p,e){p&1&&(t(0,"nav",0)(1,"span"),n(2),i(),t(3,"span"),n(4,"/"),i(),t(5,"span"),n(6),i()(),t(7,"div",1),d(8,"i",2),t(9,"p"),n(10),i()(),t(11,"section",3)(12,"h1"),n(13),i(),t(14,"p"),n(15),i(),t(16,"div",4)(17,"article",5)(18,"h3"),d(19,"i",6),n(20),i(),t(21,"p"),n(22),i()(),t(23,"article",5)(24,"h3"),d(25,"i",7),n(26),i(),t(27,"p"),n(28),i()()(),t(29,"div",8)(30,"div",9)(31,"span"),n(32),i(),t(33,"div",10)(34,"span",11),n(35,"GET /quotes/random"),i(),t(36,"button",12),m("click",function(l){return e.copyCode(l.currentTarget)}),d(37,"i",13),i()()(),t(38,"pre")(39,"code",14),n(40,`# No headers needed \u2014 this is the complete request
curl "https://api.quotable.io/quotes/random"`),i()()()(),t(41,"section",15)(42,"h2"),n(43),i(),t(44,"p"),n(45),i(),t(46,"table",16)(47,"thead")(48,"tr")(49,"th"),n(50),i(),t(51,"th"),n(52),i()()(),t(53,"tbody")(54,"tr")(55,"td")(56,"strong"),n(57),i()(),t(58,"td"),n(59),i()(),t(60,"tr")(61,"td")(62,"strong"),n(63),i()(),t(64,"td"),n(65),i()(),t(66,"tr")(67,"td")(68,"strong"),n(69),i()(),t(70,"td"),n(71),i()(),t(72,"tr")(73,"td")(74,"strong"),n(75),i()(),t(76,"td"),n(77),i()()()(),t(78,"div",8)(79,"div",9)(80,"span"),n(81),i(),t(82,"div",10)(83,"span",11),n(84,"HTTP 429"),i(),t(85,"button",12),m("click",function(l){return e.copyCode(l.currentTarget)}),d(86,"i",13),i()()(),t(87,"pre")(88,"code",17),n(89,`HTTP/1.1 429 Too Many Requests
Retry-After: 60

{
  "statusCode": 429,
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Try again in 60 seconds."
}`),i()()()(),t(90,"section",18)(91,"h2"),n(92),i(),t(93,"p"),n(94),i(),t(95,"div",8)(96,"div",19)(97,"button",20),m("click",function(){return e.activeTab.set("js-retry")}),n(98,"JavaScript"),i(),t(99,"button",20),m("click",function(){return e.activeTab.set("python-retry")}),n(100,"Python"),i(),t(101,"button",20),m("click",function(){return e.activeTab.set("curl-retry")}),n(102,"cURL"),i()(),t(103,"div",21)(104,"div",9)(105,"span"),n(106),i(),t(107,"div",10)(108,"span",11),n(109,"fetch with retry"),i(),t(110,"button",12),m("click",function(l){return e.copyCode(l.currentTarget)}),d(111,"i",13),i()()(),t(112,"pre")(113,"code",22),n(114,`async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url);

    if (res.status === 429) {
      const wait = parseInt(res.headers.get('Retry-After') || '60') * 1000;
      console.warn(\`Rate limited. Retrying in \${wait / 1000}s...\`);
      await new Promise(r => setTimeout(r, wait));
      continue;
    }

    return res.json();
  }
  throw new Error('Max retries reached');
}

const quote = await fetchWithRetry('https://api.quotable.io/quotes/random');`),i()()(),t(115,"div",21)(116,"div",9)(117,"span"),n(118),i(),t(119,"div",10)(120,"span",11),n(121,"requests with retry"),i(),t(122,"button",12),m("click",function(l){return e.copyCode(l.currentTarget)}),d(123,"i",13),i()()(),t(124,"pre")(125,"code",23),n(126,`import requests, time

def fetch_with_retry(url, retries=3):
    for _ in range(retries):
        r = requests.get(url)
        if r.status_code == 429:
            wait = int(r.headers.get('Retry-After', 60))
            print(f"Rate limited. Retrying in {wait}s...")
            time.sleep(wait)
            continue
        r.raise_for_status()
        return r.json()
    raise Exception("Max retries reached")

quote = fetch_with_retry("https://api.quotable.io/quotes/random")`),i()()(),t(127,"div",21)(128,"div",9)(129,"span"),n(130),i(),t(131,"div",10)(132,"span",11),n(133,"bash with retry"),i(),t(134,"button",12),m("click",function(l){return e.copyCode(l.currentTarget)}),d(135,"i",13),i()()(),t(136,"pre")(137,"code",14),n(138,`for i in 1 2 3; do
  STATUS=$(curl -s -o /tmp/response.json -w "%{http_code}" \\
    "https://api.quotable.io/quotes/random")
  if [ "$STATUS" -eq 429 ]; then
    echo "Rate limited, waiting 60s..."
    sleep 60
  else
    cat /tmp/response.json
    break
  fi
done`),i()()()()(),t(139,"section",24)(140,"h2"),n(141),i(),t(142,"p"),n(143),i(),t(144,"ul")(145,"li"),n(146),i(),t(147,"li"),n(148),i(),t(149,"li"),n(150),i(),t(151,"li"),n(152),i()()()),p&2&&(a(2),o(e.lang.t("api.bc.api-docs")),a(4),o(e.lang.t("api.bc.authentication")),a(4),o(e.lang.t("api.gs.portfolio-note")),a(3),o(e.lang.t("api.auth.title")),a(2),o(e.lang.t("api.auth.desc")),a(5),o(e.lang.t("api.auth.nokey.title")),a(2),o(e.lang.t("api.auth.nokey.desc")),a(4),o(e.lang.t("api.auth.nosignup.title")),a(2),o(e.lang.t("api.auth.nosignup.desc")),a(4),o(e.lang.t("api.auth.minimal-label")),a(11),o(e.lang.t("api.auth.rate.title")),a(2),o(e.lang.t("api.auth.rate.desc")),a(5),o(e.lang.t("api.table.parameter")),a(2),o(e.lang.t("api.table.description")),a(5),o(e.lang.t("api.auth.rate.limit")),a(2),o(e.lang.t("api.auth.rate.limit.desc")),a(4),o(e.lang.t("api.auth.rate.scope")),a(2),o(e.lang.t("api.auth.rate.scope.desc")),a(4),o(e.lang.t("api.auth.rate.error")),a(2),o(e.lang.t("api.auth.rate.error.desc")),a(4),o(e.lang.t("api.auth.rate.reset")),a(2),o(e.lang.t("api.auth.rate.reset.desc")),a(4),o(e.lang.t("api.auth.rate.response-label")),a(11),o(e.lang.t("api.auth.handling.title")),a(2),o(e.lang.t("api.auth.handling.desc")),a(3),s("active",e.activeTab()==="js-retry"),a(2),s("active",e.activeTab()==="python-retry"),a(2),s("active",e.activeTab()==="curl-retry"),a(2),s("active",e.activeTab()==="js-retry"),a(3),o(e.lang.t("api.auth.handling.code-label")),a(9),s("active",e.activeTab()==="python-retry"),a(3),o(e.lang.t("api.auth.handling.code-label")),a(9),s("active",e.activeTab()==="curl-retry"),a(3),o(e.lang.t("api.auth.handling.code-label")),a(11),o(e.lang.t("api.auth.best.title")),a(2),o(e.lang.t("api.auth.best.desc")),a(3),o(e.lang.t("api.auth.best.li1")),a(2),o(e.lang.t("api.auth.best.li2")),a(2),o(e.lang.t("api.auth.best.li3")),a(2),o(e.lang.t("api.auth.best.li4")))},encapsulation:2})};export{S as Authentication};

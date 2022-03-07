import{r as s,o,c as r,a as e,b as t,F as i,d as n,e as l}from"./app.5dd68279.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=e("h1",{id:"turbo-nestjs-boilerplate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#turbo-nestjs-boilerplate","aria-hidden":"true"},"#"),n(" Turbo NestJS Boilerplate")],-1),h={href:"https://github.com/juliandavidmr/awesome-nestjs",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://img.shields.io/badge/Awesome-NestJS-blue.svg?longCache=true&style=flat-square",alt:"Awesome NestJS"},null,-1),b=n("This is a fork of "),m={href:"https://github.com/NarHakobyan/awesome-nest-boilerplate",target:"_blank",rel:"noopener noreferrer"},g=n("Awesome NestJS Boilerplate"),f=n(" to support TypeORM with MySQL. Questions, feedback, and for now, even bikeshedding are welcome. \u{1F604}"),_=l(`<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. Clone the repository or click on &quot;Use this template&quot; button.</span>
npx degit gh repo clone tshewang-rinzin/turbo-nestjs-boilerplate my-nest-app

<span class="token comment"># 2. Enter your newly-cloned folder.</span>
<span class="token builtin class-name">cd</span> my-nest-app

<span class="token comment"># 3. Create Environment variables file.</span>
<span class="token function">cp</span> .env.example .env

<span class="token comment"># 3. Install dependencies. (Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install)</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="checklist" tabindex="-1"><a class="header-anchor" href="#checklist" aria-hidden="true">#</a> Checklist</h2><p>When you use this template, try follow the checklist to update your info properly</p><ul><li>[ ] Change the author name in <code>LICENSE</code></li><li>[ ] Change configurations in <code>.env</code></li><li>[ ] Remove the <code>.github</code> folder which contains the funding info</li><li>[ ] Clean up the README.md file</li></ul><p>And, enjoy \u{1F603}</p><h3 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 4. Run development server and open http://localhost:3000</span>
<span class="token function">yarn</span> start:dev

<span class="token comment"># 5. Read the documentation linked below for &quot;Setup and development&quot;.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h3><p>To build the App, run</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> build:prod
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And you will see the generated file in <code>dist</code> that ready to be served.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><dl><dt><b>Instant feedback</b></dt><dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes are reflected instantaneously.</dd><dt><b>JWT Authentication</b></dt><dd>Installed and configured JWT authentication.</dd><dt><b>Next generation Typescript</b></dt><dd>Always up to date typescript version.</dd><dt><b>Industry-standard routing</b></dt><dd>It&#39;s natural to want to add pages (e.g. /about\`) to your application, and routing makes this possible.</dd><dt><b>Environment Configuration</b></dt><dd>development, staging and production environment configurations</dd><dt><b>Swagger Api Documentation</b></dt><dd>Already integrated API documentation. To see all available endpoints visit http://localhost:3000/documentation</dd><dt><b>Linter</b></dt><dd>eslint + prettier = \u2764\uFE0F</dd></dl><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h2><p>This project includes a <code>docs</code> folder with more details on:</p>`,16),v={href:"https://narhakobyan.github.io/awesome-nest-boilerplate/docs/development.html#first-time-setup",target:"_blank",rel:"noopener noreferrer"},k=n("Setup and development"),y={href:"https://narhakobyan.github.io/awesome-nest-boilerplate/docs/architecture.html",target:"_blank",rel:"noopener noreferrer"},w=n("Architecture"),x={href:"https://narhakobyan.github.io/awesome-nest-boilerplate/docs/naming-cheatsheet.html",target:"_blank",rel:"noopener noreferrer"},A=n("Naming Cheatsheet"),N=e("h2",{id:"community",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community","aria-hidden":"true"},"#"),n(" Community")],-1),C=e("p",null,"For help, discussion about best practices, or any other conversation that would benefit from being searchable:",-1),E={href:"https://github.com/NarHakobyan/awesome-nest-boilerplate/discussions",target:"_blank",rel:"noopener noreferrer"},S=n("Discuss Awesome NestJS Boilerplate on GitHub");function j(T,I){const a=s("ExternalLinkIcon");return o(),r(i,null,[p,e("p",null,[e("a",h,[u,t(a)])]),e("p",null,[b,e("a",m,[g,t(a)]),f]),_,e("ol",null,[e("li",null,[e("a",v,[k,t(a)])]),e("li",null,[e("a",y,[w,t(a)])]),e("li",null,[e("a",x,[A,t(a)])])]),N,C,e("p",null,[e("a",E,[S,t(a)])])],64)}var J=d(c,[["render",j]]);export{J as default};
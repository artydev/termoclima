// @bun
var o=Symbol.for("isJSX");function a(t){return e(null,t)}function e(t,{children:n,...i},d){let s=n;if(Array.isArray(n)&&!l(n))s=n.map((r)=>r?.[o]?r:a({children:r}));return Object.assign([t,{...i,key:d},s],{[o]:!0})}function l(t){return Array.isArray(t)&&((o in t)||h(t))}function h(t){return t?.[0]==="HTML"&&typeof t[1]?.html==="string"}function p(){return e("title",{id:"title",children:"About Brisa"})}function u(){return e(a,{children:[e("div",{class:"hero",children:[e("h1",{children:[e("span",{class:"h1_addition",children:"About "}),"Brisa"]}),e("p",{class:"edit-note",children:"\u270F\uFE0F Change this page on "}),e("code",{children:"src/pages/about/index.tsx"})]}),e("div",{class:"about-sections",children:e("section",{children:[e("h2",{children:"Curious for more details? Let's dive in!"}),e("p",{children:"Brisa is the Web Platform Framework. Its pages are dynamically server-rendered JSX components, so there's zero JavaScript shipped to the browser by default."}),e("p",{children:"Everything runs exclusively on the server by default, except the Web Components folder which, of course, also runs on the client."}),e("p",{children:"We have solved the burden of writing and processing Web Components. Easy to write with Signals, Server-Side rendering, and optimized in build time to be fast and small; if you use Web Components, it adds +3KB."}),e("p",{children:"You can also use the Brisa compiler to create libraries of Web Components that work in any framework- or even without a framework, and they are supported by Server-Side rendering."}),e("p",{children:`We have also solved the Server Actions. With Brisa, the server components can capture any browser event: onSubmit, onInput, onFocus, onClick, and, all events from Web Components, like onClickOnMyComponent. These are all Server-Actions now, so you don't need to put "use client" nor "use server" any more. On the server they are simply Server-Actions, and on the client they are simply browser-events.`}),e("p",{children:'To make this possible we have improved the communication between both worlds, creating new concepts like "Action Signals". With these, the server can react to Web Components without the need for rerenders. We have also added ideas from HTMX; you have extra attributes in the HTML for debouncing or managing errors and pending states.'}),e("p",{children:"Brisa not only uses Hypermedia, it streams it over the wire."}),e("p",{children:"Brisa is also the only framework with full Internationalization support. not only routing, but you can also translate your pages and the URL pathnames if you need it. If you use i18n, the server components are 0 Bytes, but in Web Components are 800 B. At the end we use the Web Platform; we make a bridge with the ECMAScript Intl API to make it easier for you to translate your Web Components."}),e("p",{children:"In Brisa we like the idea that all the tooling is integrated, that's why Brisa is made with Bun we have extended the Matchers and added an API so you can run with Bun the tests of your Components."}),e("p",{children:"Bun is great and improves the development experience a lot. Although we recommend Bun.js also as runtime, as output you can use Node.js or Deno if you want, generate a static output and upload it to a CDN, or generate an executable app for Android (.apk),\xA0 iOS (.ipa), Windows (.exe), Mac (.dmg), or Linux (.deb). Yes, Brisa is multiplatform thanks to its integration with Tauri."}),e("p",{children:"We support Partial Prerendering, you can prerender only a part of your page, such as the footer."}),e("p",{children:"We also support many more features like middleware, layouts, WebSockets, API routes, suspense, etc."}),e("p",{children:"Brisa is the future of the Web, and the future is now. We invite you to try it and contribute to the community."}),e("p",{class:"CTA-text",children:["Ready to start?"," ",e("a",{class:"CTA",href:"https://brisa.build",target:"_blank","data-replace":"Read the docs",rel:"noreferrer",children:e("span",{children:"Read the docs"})})]})]})})]})}export{u as default,p as Head};

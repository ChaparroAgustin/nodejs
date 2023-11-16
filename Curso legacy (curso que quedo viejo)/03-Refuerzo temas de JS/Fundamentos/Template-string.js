const nombre = "Deadpool";
const real = "wade wilson";

const normal = nombre + " " + real;
const template = `${nombre} ${real}`;

console.log(normal);
console.log(template);

console.log(normal === template); /// compara y da por resultado true

const html = `
<h1>hola</>
<p>mundo</p>
`;

console.log(html);

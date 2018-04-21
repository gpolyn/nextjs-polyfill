// We need to use `require` instead of `import`
// They also must be assigned to a variable/constant
const logoSVG = require('../static/images/logo.svg')
const logoPNG = require('../static/images/logo.png')
const txt = require('../static/file.txt')

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const object2 = Object.assign({c: 4, d: 5}, object1);



console.log(object2.c, object2.d);

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));

export default () => (
  <div>
    <strong>{txt}</strong>
    <br />
    <img src={logoSVG} alt='Logo SVG' width='305' />
    <br />
    <strong>{logoSVG}</strong>
    <br />
    <img src={logoPNG} alt='Logo PNG' width='305' />
    <br />
    <strong>{logoPNG}</strong>
		<div className='hello'>
			<p>Hello World</p>
		</div>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
        lost-column: 1/3;
        &:hover {
          color: red;
        }
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
  </div>
)

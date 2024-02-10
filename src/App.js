import React from 'react';

function App() {
  const str1 = 'text1'
  const str2 = 'text2'
  const name = 'user'
  const age = '18'
  const arr = [1, 2, 3, 4, 5]
  const obj = {name: 'John', surname: 'Smit'}
  const attr = 'block'
  const str3 = <p>youuuu</p>
  const li1 = <li>text1</li>
	const li2 = <li>text2</li>
	const li3 = <li>text3</li>
  const items = (<>
    <li>text1</li>
    <li>text2</li>
    <li>text3</li>
  </>)
  return <>
  {
    //  12
  }
  <div>
    <input /><input /><input />
  </div>
  {
    //  13
  }
  <div>
    <p>{str1}</p>
    <p>{str2}</p>
  </div>
  {
    //  14
  }
  <div>
    name: {name} <br />
    age: {age}
  </div>
  {
    //  15
  }
  <div>
    <ul>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
      <li>{arr[3]}</li>
      <li>{arr[4]}</li>
    </ul>
  </div>
  {
    //  16
  }
  <div>
    <p>
      name: <span> {obj.name} </span> <br />
      surname: <span> {obj.surname} </span>
    </p>
  </div>
  {
    //  17
  }
  <div id={attr}>
    text
  </div>
  {
    //  18
  }
  <div>
    {str3}
  </div>
  {
    //  19
  }
  <div>
    <ul>
      {li1}
      {li2}
      {li3}
    </ul>
  </div>
  {
    //  20
  }
  <div>
    <ul>
      {items}
    </ul>
  </div>
  {
    //  21
  }
  <div>
  {
    //Константы с тегами можно возвращать через return:
    //function App() {
    //	const str = <main>
    //		text
    //	</main>;
    //	
    //	return str;
    //}
  }
  </div>
  {
    //  22
  }
  <div>
    <input /> <br />
    <input /> <br />
    <input />
  </div>
  </>
}
export default App; 
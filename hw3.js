/*
<ul>  
  <li>1</li>
  <li>2</li>
  <li>xx</li>
  <li>4</li>
  <li>5</li>
</ul>
*/


const depts = [
  {
    name: 'alice',
    leader: 'manager',
    age: 17,
    account: 10.5,

  },
  {
    name: 'bob',
    leader: 'manager',
    age: 17,
    account: 10.5,
  },
]


let result = '<ul>'

for (const dept of depts) {
  const deptStr = "<li>" + dept.name + "</li>" /* $(dept.name) this is the same, but it is now a java code not string. it will run through ant variable*/
  result = result + deptStr 
  /* can use += instead of = result + deptStr means the same thing */
}

result += "</ul>"

//console.log(result)
const divElement = document.getElementById('output')
divElement.innerHTML = result
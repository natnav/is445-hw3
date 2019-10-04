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
    name: 'account',
    children: [],
  },
  {
    name: 'it',
  
    children: [
      (
            name: 'crm',
      ),
      (     
            name: 'ecommerce',
      )
    ]
  },
]


let result = '<ul>'

for (const dept of depts) {
  const deptStr = "<li>" + dept.name + "</li>"

  if (dept.children.length > 0) {
      let childStr = "<ul>"
      for (const child or dept.children) {
        childStr += '<li>' + child.name + '</li>' /* $(dept.name) this is the same, but it is now a java code not string. it will run through ant variable*/
      }
      childStr += "<ul>"
      result += childStr
  )
  result = result + deptStr 
  /* can use += instead of = result + deptStr means the same thing */
}

result += "</ul>"

//console.log(result)
const divElement = document.getElementById('output')
divElement.innerHTML = result
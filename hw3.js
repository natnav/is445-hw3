const depts = [
  {
    name: 'account',
    children: [],
  },
  {
    name: 'it',

    children: [
      {
        name: 'crm',
      },
      {
        name: 'ecommerce',
      },
    ],
  },
  {
    name: 'finance',
    children: [],
  },
]

let result = '<ul>'

for (const dept of depts) {
  //   const deptStr = `<li> ${dept.name} </li>`
  const deptStr = '<li>' + dept.name + '</li>'
  result += deptStr

  if (dept.children.length > 0) {
    let childStr = '<ul>'
    for (const child of dept.children) {
      childStr += '<li>' + child.name + '</li>' /* $(dept.name) this is the same, but it is now a java code not string. it will run through ant variable*/
    }
    childStr += '</ul>'
    result += childStr /* can use += instead of = result + deptStr means the same thing */
  }
}

result += '</ul>'

//console.log(result)

const divElement = document.getElementById('output')
divElement.innerHTML = result


var charArr = [
  {org1_depts = [
  {
    name: 'accounting',
    subDept: [
      { name: 'accounting payable', children: [] },
      { name: 'accounting receivable', children: [] },
    ],
  },
  {
    name: 'finance',
    children: [],
  },
]},

 {org2_depts = [
  {
    name: 'accounting',
    subDept: [
      { name: 'accounting payable', children: [] },
      {
        name: 'accounting receivable',
        children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
      },
    ],
  },
  {
    name: 'finance',
    subDept: [{ name: 'investment', children: [] }],
  },
]},
]


// alert('Your input is: ' + message)
/*
const org = document.getElementById('org').value
org.innerHTML = 'Hello ' + message 
*/
const message = prompt("What's your organization's department?")

// alert('Your input is: ' + message)

const start_tag = '<ol>'
const end_tag = '</ol>'
const start_li = '<li>'
const end_li = '</li>'

var output = start_tag
for (const user of charArr) {
  output += start_li + user.name + end_li
  output += start_li + user.subDept + end_li
}
output += end_tag

const outputDiv = document.getElementById('output')
outputDiv.innerHTML = output

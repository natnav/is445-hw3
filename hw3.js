
const org1_depts = [
  {
    name: 'accounting',
    children: [
      { name: 'accounting payable', children: [] },
      { name: 'accounting receivable', children: [] },
    ],
  },
  {
    name: 'finance',
    children: [],
  },
]

const org2_depts = [
  {
    name: 'accounting',
    children: [
      { name: 'accounting payable', children: [] },
      {
        name: 'accounting receivable',
        children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
      },
    ],
  },
  {
    name: 'finance',
    children: [{ name: 'investment', children: [] }],
  },
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
for (const user of org1_depts) {
  output += start_li + user.name + end_li
}
output += end_tag

const outputDiv = document.getElementById('output').value
outputDiv.innerHTML = output

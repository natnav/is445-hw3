/*
 / const org1_depts = [
    {
      deptOne: 'accounting',
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

  */

 const userName = 'John'; 
 function showMessage() { 
  const message = 'Hello, ' + userName
  alert(message) 
} 
showMessage() // Hello, Joh

  /* const message = prompt("What is the organization department?") 

// alert('Your input is: ' + message)
const output = document.getElementById('output')
output.innerHTML = org1_depts */



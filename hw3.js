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

function PrintDepts(org1_depts) {
    const list = "<ul>";

    for(var i = 0; i < org1_depts.length; ++i) {
        list = list + "<li>" + org1_depts[i].text;
        if(org1_depts[i].org1_depts.length) {
            list = list + PrintDepts(org1_depts[i].org1_depts);
        }
        list = list + "</li>";
    }
    return list + "</ul>";
}


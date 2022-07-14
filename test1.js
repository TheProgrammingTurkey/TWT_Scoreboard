function addRow(id)
    { var x=document.getElementById(id).tBodies[0];  //get the table
      var node=t.rows[0].cloneNode(true);    //clone the previous node or row
      x.appendChild(node);   //add the node or row to the table
    }  



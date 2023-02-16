//get element from ids
let serial = 0;
document.getElementById('first-card').addEventListener('click',function(){
  serial+=1;
    const productName = document.getElementById('first-element').innerHTML
    const productPrice = document.getElementById('first-price').innerHTML
    const productQuantity = document.getElementById('first-quantity').innerHTML
    //console.log(typeof productPrice, typeof productQuantity )
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    //console.log(priceTotal, typeof priceTotal);
    
                   
    //show the data (Ei code tuku sobar jonno same)
                      //.......................//
    /*
    //without using function 
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');

    tr.innerHTML=`
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    //console.log(firstElement,firstPrice,firstQuantity);
    container.appendChild(tr);
                       //.....................//
    */
   //call displayData as function
    displayData(productName,productPrice,productQuantity,priceTotal);
});
 
//using .....e..... 
document.getElementById('second-card').addEventListener('click',function(e){
    serial+=1;
    //console.log(e.target.parentNode.parentNode.children[0].innerText);
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const priceTotal = parseInt(productPrice) + parseInt(productQuantity);
    //console.log(productName);
    //console.log(productPrice);
    //console.log(productName,productPrice,productQuantity);
    
    displayData(productName,productPrice,productQuantity,priceTotal)
})
    
document.getElementById('third-card').addEventListener('click',function(){
    serial+=1;
      const productName = document.getElementById('third-element').innerHTML
      const productPrice = document.getElementById('third-price').innerHTML
      const productQuantity = document.getElementById('third-quantity').innerHTML
      //console.log(typeof productPrice, typeof productQuantity )
      const priceTotal = parseInt(productPrice) / parseInt(productQuantity);
      displayData(productName,productPrice,productQuantity,priceTotal);
    });

    document.getElementById('forth-card').addEventListener('click',function(){
        serial+=1;
          const productName = document.getElementById('forth-element').innerHTML
          const productPrice = document.getElementById('forth-price').innerHTML
          const productQuantity = document.getElementById('forth-quantity').innerHTML
          //console.log(typeof productPrice, typeof productQuantity )
          const priceTotal = parseInt(productPrice) - parseInt(productQuantity);
          displayData(productName,productPrice,productQuantity,priceTotal);
        });

//use function...
//common function to display data...
    

    function displayData(productName,productPrice,productQuantity,priceTotal){
        const container = document.getElementById('table-container');

        const tr = document.createElement('tr');
    
        tr.innerHTML=`
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
        `;
        //console.log(firstElement,firstPrice,firstQuantity);
        container.appendChild(tr); 
    }

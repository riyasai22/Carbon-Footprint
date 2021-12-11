// const form=document.querySelector('.form-group');
const count=document.getElementById('count')
const size=document.getElementById('size')
const food=document.getElementById('food')
const food2=document.getElementById('food2')
const water=document.getElementById('water');
const water2=document.getElementById('water2');
const purchase=document.getElementById('purchase');
const purchase2=document.getElementById('purchase2');
const waste=document.getElementById('waste');
const recycle=document.getElementById('recycle');
const glass=document.getElementById('glass');
const plastic=document.getElementById('plastic');
const paper=document.getElementById('paper');
const aluminium=document.getElementById('aluminium');
const steel=document.getElementById('steel');
const compost=document.getElementById('compost');
const recycleOptions=document.getElementById('recycle-options');

const button=document.getElementById('finalButton');


// console.log(form)
button.addEventListener('click', (e)=>
{
    // e.preventDefault();
    var points=0;

    //1. count of members
    if (count.value>6)
    {
        points+=2;
    }
    else if(count.value==6)
    {
        points+=4;
    }
    else if(count.value==5)
    {
        points+=6;
    }
    else if(count.value==4)
    {
        points+=8;
    }
    else if(count.value==3)
    {
        points+=10;
    }
    else if(count.value==2)
    {
        points+=12;
    }
    else{
        points+=14
    }
    console.log("points 1: "+points);
    //2. size of house
    console.log("size: "+size.value);
    if(size.value=="large")
    {
        points+=10;
    }
    else if(size.value=="medium")
    {
        points+=7;
    }
    else if(size.value=="small")
    {
        points+=4;
    }
    else if(size.value=="apartment")
    {
        points+=2;
    }
    console.log("points 2: "+points);
    //3. food choices
    console.log("food: "+food.value);

    if(food.value=="f1")
    {
        points+=10;
    }
    else if(food.value=="f2")
    {
        points+=8;
    }
    else if(food.value=="f3")
    {
        points+=4;
    }
    else if(food.value=="f4")
    {
        points+=2;
    }
    console.log("points 3: "+points);
    //4. prepackaged food
    console.log("food2: "+food2.value);

    if(food2.value=="p1")
    {
        points+=12;
    }
    else if(food2.value=="p2")
    {
        points+=6;
    }
    else if(food2.value=="p3")
    {
        points+=2;
    }

    console.log("points 4: "+points);
    //5. washing machine
    console.log("water: "+water.value);

    if (water.value>9)
    {
        points+=3;
    }
    else if(water.value>=4 || water.value<=9)
    {
        points+=2;
    }
    else if(water.value>=1 || water.value<=3)
    {
        points+=1;
    }
    else if(water.value==0)
    {
        points+=0;
    }
    console.log("points 5: "+points);

    //6. dish washer
    console.log("water2: "+water2.value);

    if (water2.value>9)
    {
        points+=3;
    }
    else if(water2.value>=4 || water2.value<=9)
    {
        points+=2;
    }
    else if(water2.value>=1 || water2.value<=3)
    {
        points+=1;
    }
    else if(water2.value==0)
    {
        points+=0;
    }
    console.log("points 6: "+points);
    
    //7. electronic gadgets
    console.log("purchase: "+purchase.value);

    if (purchase.value>7)
    {
        points+=10;
    }
    else if(purchase.value>5 || purchase.value<=7)
    {
        points+=8;
    }
    else if(purchase.value>3 || purchase.value<=5)
    {
        points+=6;
    }
    else if(purchase.value>1||purchase.value<=3)
    {
        points+=4;
    }
    else if(purchase.value<=1)
    {
        points+=2;
    }
    console.log("points 7: "+points);
    //8. furniture
    console.log("purchase2: "+purchase2.value);

    if (purchase2.value>7)
    {
        points+=10;
    }
    else if(purchase2.value>5 || purchase2.value<=7)
    {
        points+=8;
    }
    else if(purchase2.value>3 || purchase2.value<=5)
    {
        points+=6;
    }
    else if(purchase2.value>1||purchase2.value<=3)
    {
        points+=4;
    }
    else if(purchase2.value<=1)
    {
        points+=2;
    }
    console.log("points 8: "+points);
    //9. waste
    console.log("waste: "+waste.value);

    if (waste.value>=4)
    {
        points+=50;
    }
    else if(waste.value==3)
    {
        points+=40;
    }
    else if(waste.value==2)
    {
        points+=30;
    }
    else if(waste.value==1)
    {
        points+=20;
    }
    console.log("points 9: "+points);
    //10. recycle
    console.log("recycle: "+recycle.value);
    points+=24;
    if(recycle.checked)
    {
        recycleOptions.classList.toggle("show");
        console.log("glass: "+glass.checked);
        console.log("plastic: "+plastic.checked);
        console.log("paper: "+paper.checked);
        console.log("aluminum: "+aluminium.checked);
        console.log("steel: "+steel.checked);

        if(glass.checked)
        {

            points-=4;
        }
        if(plastic.checked)
        {
            points-=4;
        }
        if(paper.checked)
        {
            points-=4;
        }
        if(aluminium.checked)
        {
            points-=4;
        }
        if(steel.checked)
        {
            points-=4;
        }
        if(compost.checked)
        {
            points-=4;
        }
    }
    console.log("points 10: "+points);
    //11. transport
    console.log("transport: "+transport.value);
    if (transport.value>=15000)
    {
        points+=12;
    }
    else if(transport.value>=10000 || transport.value<15000)
    {
        points+=10;
    }
    else if(transport.value>=1000 || transport.value<10000)
    {
        points+=6;
    }
    else if(transport.value>=1 || transport.value<1000)
    {
        points+=4;
    }
    else if(transport.value<1)
    {
        points+=0;
    }
    console.log("points 11: "+points);
    //12. public transport
    console.log("public transport: "+transport1.value);
    if (transport.value>=20000)
    {
        points+=12;
    }
    else if(transport1.value>=15000 || transport1.value<20000)
    {
        points+=10;
    }
    else if(transport1.value>=10000 || transport1.value<15000)
    {
        points+=6;
    }
    else if(transport1.value>=1000 || transport1.value<10000)
    {
        points+=4;
    }
    else if(transport1.value>=1 || transport1.value<1000)
    {
        points+=2;
    }
    else if(transport1.value<1)
    {
        points+=0;
    }
    console.log("points 12: "+points);
    //13. flights
    console.log("flights: "+transport2.value);
    if (transport2.value=="fl1")
    {
        points+=20;
    }
    else if(transport2.value=="fl2")
    {
        points+=6;
    }
    else if(transport.value=="fl3")
    {
        points+=2;
    }
    else if(transport.value=="fl4")
    {
        points+=0;
    }
    console.log("points 13: "+points);
    const final=points/10.5


    document.getElementById('disp').innerText=
    `${final.toFixed(2)} tonnes CO2e`;
    console.log(disp);  
})

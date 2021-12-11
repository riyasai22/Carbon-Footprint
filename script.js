const formContainer=document.querySelector('.form_container')
const submitButton=document.querySelector('.submitButton');
formContainer.addEventListener('submit',(e)=>{
    e.preventDefault();

})
const container1=document.querySelector('.container1');
const container2=document.querySelector('.container2');
const container3=document.querySelector('.container3');
const container4=document.querySelector('.container4');
const container5=document.querySelector('.container5');
const container6=document.querySelector('.container6');
const container7=document.querySelector('.container7');

const nextBtn1=document.querySelector('.nextBtn');
const headerInfo=document.querySelector('.info');

const circle1=document.querySelector('.circle1');
const circle2=document.querySelector('.circle2');
const circle3=document.querySelector('.circle3');
const circle4=document.querySelector('.circle4');
const circle5=document.querySelector('.circle5');
const circle6=document.querySelector('.circle6');
const circle7=document.querySelector('.circle7');

circle1.addEventListener('click',()=>{
    circle1.classList.toggle('active');
    if(circle2.classList.contains('active') && container2.classList.contains('show'))
    {
        circle2.classList.toggle('active');
        container2.classList.toggle('show');
    }
    else if(circle3.classList.contains('active') && container3.classList.contains('show'))
    {
        circle3.classList.toggle('active');
        container3.classList.toggle('show');
    }
    else if(circle4.classList.contains('active') && container4.classList.contains('show'))
    {
        circle4.classList.toggle('active');
        container4.classList.toggle('show');
    }
    else if(circle5.classList.contains('active') && container5.classList.contains('show'))
    {
        circle5.classList.toggle('active');
        container5.classList.toggle('show');

    }
    else if(circle6.classList.contains('active') && container6.classList.contains('show'))
    {
        circle6.classList.toggle('active');
        container6.classList.toggle('show');
    }
    else if(circle7.classList.contains('active') && container7.classList.contains('show'))
    {
        circle7.classList.toggle('active');
        container7.classList.toggle('show');
    }
    container1.classList.toggle('show');
})
circle2.addEventListener('click',()=>{
    circle2.classList.toggle('active');
    if(circle1.classList.contains('active') && container1.classList.contains('show'))
    {
        circle1.classList.toggle('active');
        container1.classList.toggle('show');
    }
    else if(circle3.classList.contains('active') && container3.classList.contains('show'))
    {
        circle3.classList.toggle('active');
        container3.classList.toggle('show');
    }
    else if(circle4.classList.contains('active') && container4.classList.contains('show'))
    {
        circle4.classList.toggle('active');
        container4.classList.toggle('show');
    }
    else if(circle5.classList.contains('active') && container5.classList.contains('show'))
    {
        circle5.classList.toggle('active');
        container5.classList.toggle('show');

    }
    else if(circle6.classList.contains('active') && container6.classList.contains('show'))
    {
        circle6.classList.toggle('active');
        container6.classList.toggle('show');
    }
    else if(circle7.classList.contains('active') && container7.classList.contains('show'))
    {
        circle7.classList.toggle('active');
        container7.classList.toggle('show');

    }
    container2.classList.toggle('show');
})
circle3.addEventListener('click',()=>{
    circle3.classList.toggle('active');
    if(circle1.classList.contains('active') && container1.classList.contains('show'))
    {
        circle1.classList.toggle('active');
        container1.classList.toggle('show');
    }
    else if(circle2.classList.contains('active') && container2.classList.contains('show'))
    {
        circle2.classList.toggle('active');
        container2.classList.toggle('show');
    }
    else if(circle4.classList.contains('active') && container4.classList.contains('show'))
    {
        circle4.classList.toggle('active');
        container4.classList.toggle('show');
    }
    else if(circle5.classList.contains('active') && container5.classList.contains('show'))
    {
        circle5.classList.toggle('active');
        container5.classList.toggle('show');

    }
    else if(circle6.classList.contains('active') && container6.classList.contains('show'))
    {
        circle6.classList.toggle('active');
        container6.classList.toggle('show');
    }
    else if(circle7.classList.contains('active') && container7.classList.contains('show'))
    {
        circle7.classList.toggle('active');
        container7.classList.toggle('show');

    }
    container3.classList.toggle('show');
})
circle4.addEventListener('click',()=>{
    circle4.classList.toggle('active');
    if(circle1.classList.contains('active') && container1.classList.contains('show'))
    {
        circle1.classList.toggle('active');
        container1.classList.toggle('show');
    }
    else if(circle2.classList.contains('active') && container2.classList.contains('show'))
    {
        circle2.classList.toggle('active');
        container2.classList.toggle('show');
    }
    else if(circle3.classList.contains('active') && container3.classList.contains('show'))
    {
        circle3.classList.toggle('active');
        container3.classList.toggle('show');
    }
    else if(circle5.classList.contains('active') && container5.classList.contains('show'))
    {
        circle5.classList.toggle('active');
        container5.classList.toggle('show');

    }
    else if(circle6.classList.contains('active') && container6.classList.contains('show'))
    {
        circle6.classList.toggle('active');
        container6.classList.toggle('show');

    }
    else if(circle7.classList.contains('active') && container7.classList.contains('show'))
    {
        circle7.classList.toggle('active');
        container7.classList.toggle('show');
    }
    container4.classList.toggle('show');
})
circle5.addEventListener('click',()=>{
    circle5.classList.toggle('active');
    if(circle1.classList.contains('active') && container1.classList.contains('show'))
    {
        circle1.classList.toggle('active');
        container1.classList.toggle('show');
    }
    else if(circle2.classList.contains('active') && container2.classList.contains('show'))
    {
        circle2.classList.toggle('active');
        container2.classList.toggle('show');
    }

    else if(circle3.classList.contains('active') && container3.classList.contains('show'))
    {
        circle3.classList.toggle('active');
        container3.classList.toggle('show');

    }
    else if(circle4.classList.contains('active') && container4.classList.contains('show'))
    {
        circle4.classList.toggle('active');
        container4.classList.toggle('show');
    }
    else if(circle6.classList.contains('active') && container6.classList.contains('show'))
    {
        circle6.classList.toggle('active');
        container6.classList.toggle('show');

    }
    else if(circle7.classList.contains('active') && container7.classList.contains('show'))
    {
        circle7.classList.toggle('active');
        container7.classList.toggle('show');

    }
    container5.classList.toggle('show');
})
circle6.addEventListener('click',()=>{
    circle6.classList.toggle('active');
    if(circle1.classList.contains('active') && container1.classList.contains('show'))
    {
        circle1.classList.toggle('active');
        container1.classList.toggle('show');
    }
    else if(circle2.classList.contains('active') && container2.classList.contains('show'))
    {
        circle2.classList.toggle('active');
        container2.classList.toggle('show');
    }
    else if(circle3.classList.contains('active') && container3.classList.contains('show'))
    {
        circle3.classList.toggle('active');
        container3.classList.toggle('show');
    }
    else if(circle4.classList.contains('active') && container4.classList.contains('show'))
    {
        circle4.classList.toggle('active');
        container4.classList.toggle('show');

    }
    else if(circle5.classList.contains('active') && container5.classList.contains('show'))
    {
        circle5.classList.toggle('active');
        container5.classList.toggle('show');

    }
    else if(circle7.classList.contains('active') && container7.classList.contains('show'))
    {
        circle7.classList.toggle('active');
        container7.classList.toggle('show');

    }
    container6.classList.toggle('show');
})
circle7.addEventListener('click',()=>{
    circle7.classList.toggle('active');
    if(circle1.classList.contains('active') && container1.classList.contains('show'))
    {
        circle1.classList.toggle('active');
        container1.classList.toggle('show');
    }
    else if(circle2.classList.contains('active') && container2.classList.contains('show'))
    {
        circle2.classList.toggle('active');
        container2.classList.toggle('show');
    }
    else if(circle3.classList.contains('active') && container3.classList.contains('show'))
    {
        circle3.classList.toggle('active');
        container3.classList.toggle('show');
    }
    else if(circle4.classList.contains('active') && container4.classList.contains('show'))
    {
        circle4.classList.toggle('active');
        container4.classList.toggle('show');

    }
    else if(circle5.classList.contains('active') && container5.classList.contains('show'))
    {
        circle5.classList.toggle('active');
        container5.classList.toggle('show');
    }
    else if(circle6.classList.contains('active') && container6.classList.contains('show'))
    {
        circle6.classList.toggle('active');
        container6.classList.toggle('show');

    }
    container7.classList.toggle('show');
})

nextBtn1.addEventListener('click',()=>{
    container1.classList.toggle('show');
    container2.classList.toggle('show');
    circle1.classList.toggle('active');
    circle2.classList.toggle('active');
})

const nextBtn2=document.querySelector('.nextButton2');

nextBtn2.addEventListener('click',()=>{
    container2.classList.toggle('show');
    container3.classList.toggle('show');
    circle2.classList.toggle('active');
    circle3.classList.toggle('active');
})
const nextBtn3=document.querySelector('.nextButton3');

nextBtn3.addEventListener('click',()=>{
    container3.classList.toggle('show');
    container4.classList.toggle('show');
    circle3.classList.toggle('active');
    circle4.classList.toggle('active');
})
const nextBtn4=document.querySelector('.nextButton4');

nextBtn4.addEventListener('click',()=>{
    container4.classList.toggle('show');
    container5.classList.toggle('show');
    circle4.classList.toggle('active');
    circle5.classList.toggle('active');
})
const nextBtn5=document.querySelector('.nextButton5');

nextBtn5.addEventListener('click',()=>{
    container5.classList.toggle('show');
    container6.classList.toggle('show');
    circle5.classList.toggle('active');
    circle6.classList.toggle('active');
})
const nextBtn6=document.querySelector('.nextButton6');

nextBtn6.addEventListener('click',()=>{
    container6.classList.toggle('show');
    container7.classList.toggle('show');
    circle6.classList.toggle('active');
    circle7.classList.toggle('active');
})

const backBtn1=document.querySelector('.backButton1')
backBtn1.addEventListener('click',()=>{
    container2.classList.toggle('show');
    container1.classList.toggle('show');
    circle2.classList.toggle('active');
    circle1.classList.toggle('active');
})
const backBtn2=document.querySelector('.backButton2')
backBtn2.addEventListener('click',()=>{
    container3.classList.toggle('show');
    container2.classList.toggle('show');
    circle3.classList.toggle('active');
    circle2.classList.toggle('active');
})
const backBtn3=document.querySelector('.backButton3')
backBtn3.addEventListener('click',()=>{
    container4.classList.toggle('show');
    container3.classList.toggle('show');
    circle4.classList.toggle('active');
    circle3.classList.toggle('active');
})
const backBtn4=document.querySelector('.backButton4')
backBtn4.addEventListener('click',()=>{
    container5.classList.toggle('show');
    container4.classList.toggle('show');
    circle5.classList.toggle('active');
    circle4.classList.toggle('active');
})
const backBtn5=document.querySelector('.backButton5')
backBtn5.addEventListener('click',()=>{
    container6.classList.toggle('show');
    container5.classList.toggle('show');
    circle6.classList.toggle('active');
    circle5.classList.toggle('active');
})
const backBtn6=document.querySelector('.backButton6')
backBtn6.addEventListener('click',()=>{
    container7.classList.toggle('show');
    container6.classList.toggle('show');
    circle7.classList.toggle('active');
    circle6.classList.toggle('active');
})

const factBtn=document.getElementById('factBtn');
const fact=document.getElementById('fact');

factBtn.addEventListener('mouseover',()=>{
    fact.classList.toggle('appear');
    if(circle1.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`Having a count of the members of your household is essential. Sharing a house reduces the consumption of electricity, water, and fuel costs. A smaller home makes a smaller impact on the environment!`;
    }
    if(circle2.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`Your carbon footprint increases if your meat consumption from domesticated animals is frequent! Prepackaged food like frozen pizza, cereal and potato chips also increases the carbon footprint.`;  
    }
    if(circle3.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`Your water consumption from appliances is also important to consider as you calculate your carbon footprint.  Use water efficiently. It takes lots of energy to pump, treat, and heat water, so saving water reduces greenhouse gas emissions.`;  
    }
    if(circle4.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`Keep a check on how many household purchases you make. Keep your purchases minimal and buy items like furniture and electronic items to a limit as mass purchasing can lead to high carbon footprint. Shifting to secondhand items is suggested!`;  
    }
    if(circle5.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`The more trash you produce, the larger your footprint.It is essential to prevent and recyle waste to reduce the amount of waste sent to incinerators. As a matter of fact, greenhouse gases are emitted as waste decomposes in landfills. Producing minimal waste by trying and consuming less is key! `;  
    }
    if(circle6.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`Transportation accounts for around one-fifth of global carbon dioxide (CO2) emissions. Greenhouse gas emissions from transportation primarily come from burning fossil fuel for our cars, trucks, ships, trains, and planes. Avoid Flying For Short Distances. Carpool and use public transportation as much as possible. For shorter distances walk instead travel by vehicles. `;  
    }
    if(circle7.classList.contains('active'))
    {
        document.getElementById('fact').innerText=`Voila! You have reached your results. As a matter of fact, if your carbon footprint is over an average of 11, its high time that you try and alter your lifestyle with the given eco-friendly solutions. Start Today! Save Tomorrow!`;  
    }
})

factBtn.addEventListener('mouseleave',()=>{
    fact.classList.toggle('appear');

})


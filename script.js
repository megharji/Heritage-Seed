var dot = document.querySelector(".point")
var mainhead = document.querySelector(".heading")
var subhead = document.querySelector("h2")
var check = 0

dot.addEventListener("click", function(){
    if(check == 0){
        subhead.style.padding = "0 3% "
        mainhead.style.marginTop = "-5%"
        mainhead.innerHTML = "INDIA"
        subhead.style.fontSize = "2vmax"
        subhead.innerHTML = 'India, officially the Republic of India is a country in South Asia. It is the seventh-largest country by area the most populous country as of June 2023 and from the time of its independence in 1947, the worlds most populousdemocracy. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia. Chambal River Valley in Garadia Mahadev Temple, Kota, Rajasthan very popular destination in rajasthan Konark Sun Temple in Odisha, is a UNESCO World Heritage Site Shola Grasslands and forests in the Kudremukha National Park, Western Ghats, Karnataka during Monsoon season The Taj Mahal, Agra.'
        mainhead.style.fontSize = "7vmax"
        dot.innerHTML = '<i class="ri-record-circle-fill"></i>'       
        check = 1
    }else{
        mainhead.style.marginTop = "5%"
        mainhead.innerHTML = "Historical places to visit in India"
        subhead.style.fontSize = "2vmax"
        subhead.innerHTML = 'Unity In Diversity'
        mainhead.style.fontSize = "5vmax"
        dot.innerHTML = '<i class="ri-record-circle-fill"></i>'       
        check = 0
    }
    
})
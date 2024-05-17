document.addEventListener("DOMContentLoaded", function() {

    const speedometerImg = document.getElementById("speedometer");
    const contributorImg = document.getElementById("contributor");
    const userImg = document.getElementById("user");

  
    speedometerImg.addEventListener("click", function() {
        window.location.href = "../page1/page1.html"; 
    });

    contributorImg.addEventListener("click", function() {
        window.location.href = ".page2.html";
    });

    userImg.addEventListener("click", function() {
        window.location.href = "../page3/page3.html"; 
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const speedometerImg = document.getElementById("speedometer");
    const contributorImg = document.getElementById("contributor");
    const userImg = document.getElementById("user");

  
    speedometerImg.addEventListener("click", function() {
        window.location.href = "../page1/page1.html"; 
    });

    contributorImg.addEventListener("click", function() {
        window.location.href = "../page2/page2.html";
    });

    userImg.addEventListener("click", function() {
        window.location.href = "../page3/page3.html"; 
    });
});
const courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        course.addEventListener('click', function() {
            window.location.href = '../page4/page4.html'; 
        });
    });

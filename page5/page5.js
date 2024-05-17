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
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.save');
    const publishButton = document.querySelector('.publish');
    const notesTextarea = document.getElementById('notes');
    const publishedNotesContainer = document.querySelector('.published-notes');

    if (localStorage.getItem('savedNote')) {
        notesTextarea.value = localStorage.getItem('savedNote');
    }


    if (localStorage.getItem('publishedNotes')) {
        const publishedNotes = JSON.parse(localStorage.getItem('publishedNotes'));
        publishedNotes.forEach(noteText => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = noteText;
            publishedNotesContainer.appendChild(newParagraph);
        });
    }

    saveButton.addEventListener('click', function() {
        const noteText = notesTextarea.value;
        localStorage.setItem('savedNote', noteText);
        alert('Note saved successfully!');
    });


    publishButton.addEventListener('click', function() {
        const noteText = notesTextarea.value;

        if (noteText.trim() !== '') {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = noteText;
            publishedNotesContainer.appendChild(newParagraph);

            let publishedNotes = [];
            if (localStorage.getItem('publishedNotes')) {
                publishedNotes = JSON.parse(localStorage.getItem('publishedNotes'));
            }
            publishedNotes.push(noteText);
            localStorage.setItem('publishedNotes', JSON.stringify(publishedNotes));

            notesTextarea.value = '';
            localStorage.removeItem('savedNote');
        } else {
            alert('Please enter a note to publish.');
        }
    });
});

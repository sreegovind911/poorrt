document.getElementById('resumeLink').addEventListener('click', function(event) {
    event.preventDefault(); // prevent scroll/jump
    const resumeSection = document.getElementById('resume');

    if (resumeSection.classList.contains('show')) {
        resumeSection.classList.remove('show');
        setTimeout(() => {
            resumeSection.style.display = 'none';
        }, 500);
    } else {
        resumeSection.style.display = 'block';
        setTimeout(() => {
            resumeSection.classList.add('show');
        }, 10);
    }
});

hideAllSections();
showContent('latest')

function showContent(contentId) {
    hideAllSections();

    // Show the selected content div
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
}

function hideAllSections() {
    var contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(function(div) {
      div.style.display = 'none';
    });
}
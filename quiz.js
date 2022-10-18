
function choosing(c)
{
    document.location.href = './quiz.html?topic='+c;
}

if (document.title=="Quiz"){
    var topic = document.location.href.split('?')[1].split('=')[1]
    document.getElementsByTagName('h3')[0].innerText = "Which brand do you prefer for "+topic+"?"
}
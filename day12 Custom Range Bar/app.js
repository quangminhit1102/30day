var rangeBar = document.querySelector(".range-bar");
var range = document.querySelector(".range");
var body = document.querySelector('body');
range.addEventListener('mousemove', function (e) {
    
    var calculate = (e.pageX - this.offsetLeft)/e.currentTarget.offsetWidth;
    body.style.backgroundColor = "rgba(227,235,71,"+calculate+")";
    setRangeBar(Math.ceil(calculate*100))
})
function setRangeBar(i)
{
    rangeBar.style.width = i+"%";
    rangeBar.querySelector('span').innerText = i+"%";
}



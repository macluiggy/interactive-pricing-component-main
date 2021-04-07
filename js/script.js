(function () {
    /*function getElement(el) {
        return document.querySelector(el)
    }
    var attribution = getElement('.attribution');
    console.log(attribution.innerHTML);*/
    var values = [8, 12, 16, 24, 36]
    var pageviewsList = ['10k', '50k', '100k', '500k', '1M']
    var pageviews = $('#pageviews');
    var perMonth = $('#per-month');
    var sliderBar = $('#slider1');
    
    sliderBar.on('change', function () {
        perMonth.text('$' + values[this.value] + '.00');
        pageviews.text(pageviewsList[this.value] + ' Pageviews');
        //console.log(pageviewsList[this.value]);
        //console.log(this.value);
    })



   //end
}());
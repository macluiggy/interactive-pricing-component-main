(function () {
    
    var values = [8, 12, 16, 24, 36]
    var pageviewsList = ['10k', '50k', '100k', '500k', '1M']
    var pageviews = $('#pageviews');
    var perMonth = $('#per-month');
    var sliderBar = $('#slider1');
    
    sliderBar.on('input', function () {
        perMonth.text('$' + values[this.value] + '.00');
        pageviews.text(pageviewsList[this.value] + ' Pageviews');
        //console.log(pageviewsList[this.value]);
        //console.log(this.value);
    })
    
    sliderBar.on('input', function() {
        var value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, 	#a5f3eb 0%, #a5f3eb ' + value + '%, #fff ' + value + '%, #fff 100%)';
      });



   //end
}());
(function($) {
	"use strict";
	var HT = {}; 
    HT.uploadImageToInput = () => {
        $('.upload-image').click(function(){
            HT.setupCkFinder2();
        })
    }

    HT.setupCkFinder2 = (type) => {
        if(typeof(type) == 'undefined'){
           type = 'Images';
        }
        var finder = new CkFinder();
        finder.resourceType = type;
        finder.selectActionFunction = function(fileUrl, data) {
            console.log(fileUrl)
        }
        finder.popup();
    }

    
   
	$(document).ready(function(){
        HT.uploadImageToInput();
	});

    

})(jQuery);

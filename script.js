var images = [
    "https://www.surfertoday.com/images/stories/jellyfish.jpg",
    "https://oceana.org/sites/default/files/734564/shutterstock_376643215.jpg",
"https://1.bp.blogspot.com/-V2RgzY87nLs/V5WgWHyIKgI/AAAAAAAAAnY/HDl_wpjoZj4D5pZlYKNDbtqikg_K901zgCLcB/s1600/clownfish-nemo-wallpaper-3.jpg",
];

images.forEach(function(a,b){

    $(".animals").append("<img src=" + images[b] + ">");
    
});

var imageInput = 

images.push("https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Reptiles/reptile_green-sea-turtle_600x300.ashx");

$(".animals").empty();

images.forEach(function(a,b) {

	$(".animals").append("<img src=" + images[b] + ">");

});

$("button").click(function() {

var linkAddress = $("input").val();
    
    images.push(linkAddress);
    
    $(".animals").empty();
    
    images.forEach(function(a,b) {

	$(".animals").append("<img src=" + images[b] + ">");
        
        $("input").val("");

});
    
});
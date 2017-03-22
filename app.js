var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};

for (var i = 0; i < 3; i++) {

	//Create the images section 
	var contentImages = document.createElement('div');
	var wrapper = document.getElementsByClassName('wrapper');
	wrapper[0].appendChild(contentImages);	

	//Add class name to this div that we just made
	contentImages.className += "contentImages";

	//Create the container for each image
	var imageContainer = document.createElement('div');
	imageContainer.className += "imageContainer";
	contentImages.appendChild(imageContainer);

	//Create the description for each image
	var ImageDes = document.createElement('div');
	ImageDes.className += "ImageDes";
	imageContainer.appendChild(ImageDes);

	//Create three titles one for each image then append them to the parent div tag
	var title = document.createElement('h2');
	title.className += "title";

	//Create three description one for each image then append them to the parent div tag
	var description = document.createElement('h5');
	description.className += "description";

	ImageDes.appendChild(title);
	ImageDes.appendChild(description);
}

//Set the id for each image
imageCon = document.getElementsByClassName('imageContainer');
imageCon[0].setAttribute("id", "boxOne");
imageCon[1].setAttribute("id", "boxTwo");
imageCon[2].setAttribute("id", "boxThree");

//Get the title from the object for each image
var heading = document.getElementsByClassName('title');
heading[0].innerHTML = images.man.heading;
heading[1].innerHTML = images.wizard.heading;
heading[2].innerHTML = images.beast.heading;

//Get the description from the object for each image
var des = document.getElementsByClassName('description');
des[0].innerHTML = images.man.description;
des[1].innerHTML = images.wizard.description;
des[2].innerHTML = images.beast.description;

//For each Image use the image path to assign the background image and some style for it
var firstBox = document.getElementById('boxOne');
firstBox.style.background = "url(" + images.man.path + ")";
firstBox.style.backgroundPosition = "top center";
firstBox.style.backgroundSize = "350px";
firstBox.style.backgroundRepeat = "no-repeat";

var secondBox = document.getElementById('boxTwo');
secondBox.style.background = "url(" + images.wizard.path + ")";
secondBox.style.backgroundPosition = "top center";
secondBox.style.backgroundSize = "350px";
secondBox.style.backgroundRepeat = "no-repeat";

var thirdBox = document.getElementById('boxThree');
thirdBox.style.background = "url(" + images.beast.path + ")";
thirdBox.style.backgroundPosition = "top center";
thirdBox.style.backgroundSize = "350px";
thirdBox.style.backgroundRepeat = "no-repeat";







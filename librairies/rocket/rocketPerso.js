function rocketcss(rocket, target, theclass) {
	var rockPar = $(rocket).parent();
	var tarPar = $(target).parent();
	var tmpRoc = $('#tmp_roc');
	var tmpTar = $('#tmp_tar');

	var cloned = $(rocket).clone();

	var offset_target = $(target).offset();
	//console.log(offset_target);
	var offset_rocket = $(rocket).offset();
	console.log(offset_rocket);


	$(rocket).css({ "display": "none" });
	cloned.insertBefore(rocket);
	console.log(cloned.offset());

	//console.log(offset_target);
	//console.log(cloned.height());
	//console.log(offset_target);


/*
	cloned.css({ "position": "fixed",
	 							"z-index": "999999",
								top: offset_rocket.top + "px",
								left: offset_rocket.left + "px",
								//"right": "auto",
								//"bottom": "auto",
								//"margin": "auto",
								//"padding": "auto",
								opacity: "1"})*/
	cloned.animate({ top: offset_target.top,
								left: offset_target.left}, 1500);
		console.log(cloned.offset());
		console.log(offset_target);

	cloned.addClass('mover ' + (theclass || 'rocketPulseHole') );
	console.log(cloned.offset());

	setTimeout(function () {
		cloned.fadeOut(300);
		//Envoie vers div temporaire cachée
		$(target).prependTo(tmpTar);
		$(rocket).prependTo(tmpRoc);

		//Change les class
		$(target).removeClass("target col-12").addClass("stagiaire col-4");
		$(rocket).removeClass("stagiaire col-4").addClass("target col-12");
		//Envoie vers les div affichées
		$(tmpRoc).children().prependTo(tarPar);
		$(tmpTar).children().prependTo(rockPar);
		cloned.remove();
	}, 1500);

	$(rocket).css({ "display": "block" });
	//return cloned;
}

function rocketcss(rocket, target, theclass) {
	var rockPar = $(rocket).parent();
	var tarPar = $(target).parent();
	var tmpRoc = $('#tmp_roc');
	var tmpTar = $('#tmp_tar');

	var cloned = $(rocket).clone();
	var offset_target = tarPar.offset();
	var offset_rocket = $(rocket).offset();

	cloned.insertAfter(rocket);
	cloned.css({position: "fixed"}).animate({ "top": offset_target.top + "px",
								"left": offset_target.left + "px"}, 1500);
	cloned.addClass('mover ' + (theclass || 'rocketPulse') );
	setTimeout(function () {
		cloned.fadeOut(300);
		//Envoie vers div temporaire cachée
		$(target).prependTo(tmpTar);
		$(rocket).prependTo(tmpRoc);
		//Change les class
		$(target).removeClass("target col-12").addClass("stagiaire col-4");
		$(rocket).removeClass("stagiaire col-4").addClass("target col-12");
		//Envoie vers les div affichées
		$(tmpRoc).children().appendTo(tarPar);
		$(tmpTar).children().appendTo(rockPar);
		//Destruction du clone
		cloned.remove();
	}, 1500);
}

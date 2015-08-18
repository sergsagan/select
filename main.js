/**
 * Created by martynuk on 18.08.15.
 */
$(function(){
	$(".select").each(function(i){
		var currentElem = $(this),
			currentSelect = $(this).find("select"),
			currentList = $(this).find(".list"),
			currentDate = $(this).find(".selected");

		$(currentDate).text(currentSelect.val());
		currentSelect.find("option").each(function(){
			currentList.append('<li>' + $(this).text() + '</li>');
		});

		currentList.on("click", "li", function(){
			currentDate.text($(this).text());
			currentSelect.val($(this).text());
		});

		$(this).click(function(){
			currentDate.hasClass('focus') ?
				currentList.slideUp(300) :
				currentList.slideDown(300);
			currentDate.toggleClass('focus');
		});
	});


});
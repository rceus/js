$(document).ready(function(){
	
	$('#addNew').click(function(){
		addNewRow();
	});
	
	$('#refreshNotes').click(function(){
		refreshNotes();
	});
	
	$('.deleteButton').click(function(){
		deleteRowthis($(this));
	});

	$('.deleteButton1').click(function(){
		deleteRowthis1($(this));
	})
});

function addNewRow(){	
	var numRows = $('#table-css tr').length;
	$('#table-css').append('<tr><td><input type="text" id="title-'+numRows+'" value="Title" /></td><td><input type="text" id="description-'+numRows+'" value="Enter Task" /></td><td><a class="deleteButton1" id="Delete-'+numRows+'" title="Delete Task">Clear</a></td></tr>');
}

function refreshNotes(){
	
	var tableRows = $('#table-css tr');
	
	$('.sticky_notes li').remove();

	$.each(tableRows,function(i){
		var title = $(this).find('input[id^="title"]').val();
		var description = $(this).find('input[id^="description"]').val();
		var Delete = $(this).find('input[id^="Delete"]').val();
		
		if(title != undefined && description != undefined){
			createNotes(title, description, Delete);
		}	
	});
}

function createNotes(title, description, Delete){
	var header = '<h2>'+title+'</h2>';
	var desc = '<p>'+description+'</p>';
	
	var colours = new Array();
	colours[0] = 'green';
	colours[1] = 'blue';
	colours[2] = 'yellow';
	colours[3] = 'red';
	colours[4] = 'purple';
	colours[5] = 'orange';
	
	
	$('.sticky_notes').append('<li class="'+colours[randomFromTo(0,(colours.length - 1))]+'">'+header+description+'</li>');
}

function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
 }


function deleteRowthis(thisButton){
	thisButton.parent().parent().remove();
}


function deleteRowthis1(thisButton){
	thisButton.parent().parent().remove();
}
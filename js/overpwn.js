function htmlbodyHeightUpdate(){
		var height3 = $( window ).height()
		var height1 = $('.nav').height()+50
		height2 = $('.main').height()
		if(height2 > height3){
			$('html').height(Math.max(height1,height3,height2)+10);
			$('body').height(Math.max(height1,height3,height2)+10);
		}
		else
		{
			$('html').height(Math.max(height1,height3,height2));
			$('body').height(Math.max(height1,height3,height2));
		}
		
	}

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function filterByNameGraphic() {
  var input, filter, table, tr, td, i, e;
  e = document.getElementById("heroes-select");
  input = e.options[e.selectedIndex].text;
  filter = input.toUpperCase();
  if(filter=="TODOS OS HERÓIS"){
    filter = "";
  }
  table = document.getElementById("tableHeroData");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function filterByName() {
  var element, input, filter, table, tr, td, i, e;
  element = document.getElementById('role-select');
  element.selectedIndex = "Todas as funções";
  e = document.getElementById("heroes-select");
  input = e.options[e.selectedIndex].text;
  filter = input.toUpperCase();
  if(filter=="TODOS OS HERÓIS"){
  	filter = "";
  }
  table = document.getElementById("tableHeroData");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function filterByRole() {
  var element, input, filter, table, tr, td, i, e;
  element = document.getElementById('heroes-select');
  element.selectedIndex = "Todos os heróis";
  e = document.getElementById("role-select");
  input = e.options[e.selectedIndex].text;
  filter = input.toUpperCase();
  if(filter=="TODAS AS FUNÇÕES"){
  	filter = "";
  }
  table = document.getElementById("tableHeroData");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function setColor() {
  table = document.getElementById("tableHeroData");
  tr = table.getElementsByTagName("tr");
  window.alert("Oi");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[i];    
    if(td=="Ana"){
      window.alert("Oi");
    }  
  }
}

   

	
	$(document).ready(function () {
					htmlbodyHeightUpdate()
				$( window ).resize(function() {
					htmlbodyHeightUpdate()
				});
				$( window ).scroll(function() {
					height2 = $('.main').height()
	  				htmlbodyHeightUpdate()
				});
			});
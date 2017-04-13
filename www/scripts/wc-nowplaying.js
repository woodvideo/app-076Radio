function startTime() {
		var Datum = new Date(); 
		var dag = Datum.getDay();  
		var uur = Datum.getHours();
        var progNu = document.getElementById('progTitel');
        var progStraks = document.getElementById('progLater');
		var ProgImg = document.getElementById('progFoto');
		var ProgFoto = document.getElementById('progFoto');
		var progUrl = document.getElementById('progUrl');
		var progPres= document.getElementById('progPres');
		var progLater = "STRAKS: "+progStraks;


        	
		if (dag==6 && uur >= 8 && uur < 10) { 
			progNu.innerHTML = "Non-stop hits"; 
            progStraks.innerHTML="Straks: Het besten van Antoon van der Westen";
			progFoto.src="logos/ns.jpg";
			progPres.innerHTML="076 Radio mixmachine";} 
		else 

		if (dag==0 && uur >= 8 && uur < 10) { 
			progNu.innerHTML = "Non-stop hits"; 
            progStraks.innerHTML="Straks: Het besten van Antoon van der Westen";
			progFoto.src="logos/ns.jpg";
			progPres.innerHTML="076 Radio mixmachine";} 
		else 			
			
		if (dag==6 && uur >= 10 && uur < 11) { 
			progNu.innerHTML = "Het besten van Antoon van der Westen"; 
            progStraks.innerHTML="Straks: DE HITS GEZONGEN MET van Dongen";
			progFoto.src="logos/ktmav.png";
			progPres.innerHTML="Antoon van der Westen";} 
		else  
		
		if (dag==0 && uur >= 10 && uur < 11) { 
			progNu.innerHTML = "Het besten van Antoon van der Westen"; 
            progStraks.innerHTML="Straks: DE HITS GEZONGEN MET van Dongen";
			progFoto.src="logos/ktmav.png";
			progPres.innerHTML="Antoon van der Westen";} 
		else  
	
		if (dag==6 && uur >= 11 && uur < 12) { 
			progNu.innerHTML = "DE HITS GEZONGEN MET van Dongen"; 
            progStraks.innerHTML="Straks: Typisch Sander";
			progFoto.src="logos/hgmv.jpg";
			progPres.innerHTML="Voornaam van Dongen";} 
		else  
			
		if (dag==0 && uur >= 11 && uur < 12) { 
			progNu.innerHTML = "DE HITS GEZONGEN MET van Dongen"; 
            progStraks.innerHTML="Straks: Typisch Sander";
			progFoto.src="logos/hgmv.jpg";
			progPres.innerHTML="Voornaam van Dongen";} 
		else  

		if (dag==6 && uur >= 12 && uur < 13) { 
			progNu.innerHTML = "Typisch Sander";
			progStraks.innerHTML="Straks: Typisch Sander non-stop";
			progFoto.src="logos/ts.jpg";
			progPres.innerHTML="Sander Waasdorp";}
		else  
			
		if (dag==0 && uur >= 12 && uur < 13) { 
			progNu.innerHTML = "Typisch Sander";
			progStraks.innerHTML="Straks: Typisch Sander non-stop";
			progFoto.src="logos/ts.jpg";
			progPres.innerHTML="Sander Waasdorp";}
		else  

		if (dag==6 && uur >= 13 && uur < 14) { 
			progNu.innerHTML = "Typisch Sander non-stop"; 
			progStraks.innerHTML="Straks: NAC Praat Herhaling";
			progFoto.src="logos/np.jpg";
			progPres.innerHTML="Sander Waasdorp";} 
		else  
		
		if (dag==0 && uur >= 13 && uur < 14) { 
			progNu.innerHTML = "Typisch Sander non-stop"; 
			progStraks.innerHTML="Straks: Weekendkr8 Dance Classics"; 
			progFoto.src="logos/teamnl.jpg";
			progPres.innerHTML="Sander Waasdorp";} 
		else  
		
		if (dag==6 && uur >= 14 && uur < 16) { 
			progNu.innerHTML = "NAC Praat Herhaling"; 
			progStraks.innerHTML="Straks: Koen in the Afternoon";
			progFoto.src="logos/t80.jpg";
			progPres.innerHTML="Fanzine De Rat";} 
		else  

		if (dag==0 && uur >= 14 && uur < 16) { 
			progNu.innerHTML = "Weekendkr8 Dance Classics"; 
			progStraks.innerHTML="Straks: Koen in the Afternoon";
			progFoto.src="logos/t80.jpg";
			progPres.innerHTML="Jan Krijnen";} 
		else  			

		if (dag==6 && uur >= 16 && uur < 17) { 
			progNu.innerHTML = "Koen in the Afternoon"; 
			progStraks.innerHTML="Straks: Nonstop top 40 hits";
			progFoto.src="logos/kita.jpg";
			progUrl.href="p-koenvdh.html";
			progUrl.innerHTML = "meer informatie";			
			progPres.innerHTML="Koen van der Horst";} 			
		else  
			
		if (dag==0 && uur >= 16 && uur < 17) { 
			progNu.innerHTML = "Koen in the Afternoon"; 
			progStraks.innerHTML="Straks: Nonstop top 40 hits";
			progFoto.src="logos/kita.jpg";
			progUrl.href="p-koenvdh.html";
			progPres.innerHTML="Koen van der Horst";} 			
		else 		

		if (dag==6 && uur >= 17 && uur < 19) { 
			progNu.innerHTML = "Nonstop top 40 hits"; 
			progStraks.innerHTML="Straks: Team NL Voor het stappen gaan";
			progFoto.src="logos/ns40.png";
			progPres.innerHTML="Nienke en Lobke Krijnen";} 
		else  

		if (dag==6 && uur >= 19 && uur < 21) { 
			progNu.innerHTML = "Team NL Voor het stappen gaan"; 
			progStraks.innerHTML="Straks: Weekeind Kr8 Dance Classics";
			progFoto.src="logos/vhsg.jpg";
			progPres.innerHTML="Nienke en Lobke Krijnen";} 
		else  

		if (dag==6 && uur >= 22 && uur < 24) { 
			progNu.innerHTML = "Weekeind Kr8 Dance Classics"; 
			progStraks.innerHTML="Straks: Non-stop hits";
			progFoto.src="logos/wkdc.jpg";
			progPres.innerHTML="Jan Krijnen";} 
		else  

		if (dag==0 && uur >= 17 && uur < 18) { 
			progNu.innerHTML = "Nonstop top 40 hits"; 
			progStraks.innerHTML="Straks: Hits From The Heartland Camiel Janszen";
			progFoto.src="logos/ns40.jpg";
			progPres.innerHTML="076 Radio mixmachine";} 
		else  

		if (dag==0 && uur >= 18 && uur < 20) { 
			progNu.innerHTML = "Hits From The Heartland Camiel Janszen"; 
			progStraks.innerHTML="Straks: The Symfo Experience met Ad van Loon";
			progFoto.src="logos/hfthcj.jpg";
			progPres.innerHTML="Camiel Janszen";} 
		else  

		if (dag==0 && uur >= 20 && uur < 22) { 
			progNu.innerHTML = "The Symfo Experience met Ad van Loon"; 
			progStraks.innerHTML="Straks: Non-stop hits";
			progFoto.src="logos/tse.jpg";
			progPres.innerHTML="Ad van Loon";} 
		
		else  {		 
			progNu.innerHTML = "Non-stop hits"; 
			progFoto.src="logos/ns.jpg";
			progPres.innerHTML="076 Radio mixmachine";}
        var t = setTimeout(startTime, 500);    
}

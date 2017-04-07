function startTime() {
		var Datum = new Date(); 
		var dag = Datum.getDay()+1;  
		var uur = Datum.getHours()+1;
        var progNu = document.getElementById('progTitel')
        var progStraks = document.getElementById('progLater')
		var ProgImg = document.getElementById('progFoto')
		var ProgFoto = document.getElementById('progFoto')
		var progUrl = document.getElementById('progUrl')


        	
		if (dag==6 && uur >= 8 && uur < 10) { 
			progNu.innerHTML = "Non-stop hits"; 
            progStraks.innerHTML= "Koffie en Thee met Arie-V";
			progFoto.src="logos/ns.jpg";} 
		else 

		if (dag==0 && uur >= 8 && uur < 10) { 
			progNu.innerHTML = "Non-stop hits"; 
            progStraks.innerHTML= "Koffie en Thee met Arie-V";
			progFoto.src="logos/ns.jpg";} 
		else 			
			
		if (dag==6 && uur >= 10 && uur < 11) { 
			progNu.innerHTML = "Koffie en Thee met Arie-V"; 
            progStraks.innerHTML= "DE HITS GEZONGEN MET van Dongen";
			progFoto.src="logos/ktmav.png";} 
		else  
		
		if (dag==0 && uur >= 10 && uur < 11) { 
			progNu.innerHTML = "Koffie en Thee met Arie-V"; 
            progStraks.innerHTML= "DE HITS GEZONGEN MET van Dongen";
			progFoto.src="logos/ktmav.png";} 
		else  
	
		if (dag==6 && uur >= 11 && uur < 12) { 
			progNu.innerHTML = "DE HITS GEZONGEN MET van Dongen"; 
            progStraks.innerHTML="Typisch Sander";
			progFoto.src="logos/hgmv.jpg";} 
		else  
			
		if (dag==0 && uur >= 11 && uur < 12) { 
			progNu.innerHTML = "DE HITS GEZONGEN MET van Dongen"; 
            progStraks.innerHTML="Typisch Sander";
			progFoto.src="logos/hgmv.jpg";} 
		else  

		if (dag==6 && uur >= 12 && uur < 13) { 
			progNu.innerHTML = "Typisch Sander";
			progStraks.innerHTML="Nac Praat herhaling van donderdag";
			progFoto.src="logos/ts.jpg";}
		else  
			
		if (dag==0 && uur >= 12 && uur < 13) { 
			progNu.innerHTML = "Typisch Sander";
			progStraks.innerHTML="Nac Praat herhaling van donderdag";
			progFoto.src="logos/ts.jpg";}
		else  

		if (dag==6 && uur >= 13 && uur < 14) { 
			progNu.innerHTML = "Nac Praat herhaling van donderdag"; 
			progStraks.innerHTML="Team NL hits van heden";
			progFoto.src="logos/np.jpg";} 
		else  
		
		if (dag==0 && uur >= 13 && uur < 14) { 
			progNu.innerHTML = "Team NL hits van heden"; 
			progStraks.innerHTML="Typisch 80"; 
			progFoto.src="logos/teamnl.jpg";} 
		else  
		
		if (dag==6 && uur >= 14 && uur < 16) { 
			progNu.innerHTML = "Typisch 80"; 
			progStraks.innerHTML="Koen in the Afternoon";
			progFoto.src="logos/t80.jpg";} 
		else  

		if (dag==0 && uur >= 14 && uur < 16) { 
			progNu.innerHTML = "Typisch 80"; 
			progStraks.innerHTML="Koen in the Afternoon";
			progFoto.src="logos/t80.jpg";} 
		else  			

		if (dag==6 && uur >= 16 && uur < 17) { 
			progNu.innerHTML = "Koen in the Afternoon"; 
			progStraks.innerHTML="Nonstop top 40 hits";
			progFoto.src="logos/kita.jpg";
			progUrl.href="p-koenvdh.html";
			progUrl.innerHTML = "meer informatie"} 			
		else  
			
		if (dag==0 && uur >= 16 && uur < 17) { 
			progNu.innerHTML = "Koen in the Afternoon"; 
			progStraks.innerHTML="Nonstop top 40 hits";
			progFoto.src="logos/kita.jpg";
			progUrl.href="p-koenvdh.html"} 			
		else 		

		if (dag==6 && uur >= 17 && uur < 19) { 
			progNu.innerHTML = "Nonstop top 40 hits"; 
			progStraks.innerHTML="Team NL Voor het stappen gaan";
			progFoto.src="logos/ns40.png";} 
		else  

		if (dag==6 && uur >= 19 && uur < 21) { 
			progNu.innerHTML = "Team NL Voor het stappen gaan"; 
			progStraks.innerHTML="Weekeind Kr8 Dance Classics";
			progFoto.src="logos/vhsg.jpg";} 
		else  

		if (dag==6 && uur >= 22 && uur < 24) { 
			progNu.innerHTML = "Weekeind Kr8 Dance Classics"; 
			progStraks.innerHTML="Non-stop hits";
			progFoto.src="logos/wkdc.jpg";} 
		else  

		if (dag==0 && uur >= 17 && uur < 18) { 
			progNu.innerHTML = "Nonstop top 40 hits"; 
			progStraks.innerHTML="Hits From The Heartland Camiel Janszen";
			progFoto.src="logos/ns40.jpg";} 
		else  

		if (dag==0 && uur >= 18 && uur < 20) { 
			progNu.innerHTML = "Hits From The Heartland Camiel Janszen"; 
			progStraks.innerHTML="The Symfo Experience met Ad van Loon";
			progFoto.src="logos/hfthcj.jpg";} 
		else  

		if (dag==0 && uur >= 20 && uur < 22) { 
			progNu.innerHTML = "The Symfo Experience met Ad van Loon"; 
			progStraks.innerHTML="Non-stop hits";
			progFoto.src="logos/tse.jpg";} 
		
		else  {		 
			progNu.innerHTML = "Non-stop hits"; 
			progStraks.innerHTML="Non-stop hits";
			progFoto.src="logos/ns.jpg";}
        var t = setTimeout(startTime, 500);    
}

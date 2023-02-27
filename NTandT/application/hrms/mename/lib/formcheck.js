function checkall(form) {
var formlength=Number(form.length);

var should_be_before_current= 0;
var validate_per_page= 0;
var should_be_after_current= 0;
if(typeof cant_be_empty=="undefined" || typeof novalues=="undefined" || typeof checklength=="undefined" ) {
	if(typeof validator !="undefined") return validator();
	else return true;
}

for(var z=0;z<=formlength-1;z++) { 

	if (form.elements[z].name=='should_before_current') should_be_before_current= 1;
	if (form.elements[z].name=='validate_per_page') validate_per_page= 1;
	if (form.elements[z].name=='should_after_current') should_be_after_current= 1;
}

for(var i=0;i<=formlength-1;i++) { 
//alert(i + " "+form.elements[i].name + " "+ form.elements[i].value+" "+novalues[i]);
 if((form.elements[i].name!='f_hour' && form.elements[i].disabled==true) || form.elements[i].type=='hidden')
    continue;

 if(form.elements[i].type=='checkbox' || form.elements[i].type=='radio')
    continue;


if (form.elements[i].type=='select-one' && form.elements[i].name=='f_hour' && (validate_per_page==0 || (form.validate_per_page.value=='other_requests' && form.transaction_period.checked==true)))
{ 

		var f_hour= document.form.f_hour.value;
		var f_min= document.form.f_min.value;
		var f_AmPm= document.form.f_AmPm.value;
		var t_hour= document.form.t_hour.value;
		var t_min= document.form.t_min.value;
		var t_AmPm= document.form.t_AmPm.value;
	if (f_hour!='--' && f_min!='--' && f_AmPm!='--' && t_hour!='--' && t_min!='--' && t_AmPm!='--') {
		if (f_AmPm==t_AmPm && f_hour==t_hour && f_min==t_min) {
 			alert(my_dictinary[7183]);
			if (form.elements[i].disabled==false) form.elements[i].focus();
			return false;
		} else if (f_AmPm=='PM' && t_AmPm=="AM") {
			alert(my_dictinary[7184]);
			if (form.elements[i].disabled==false) form.elements[i].focus();
			return false;
		} else if (f_AmPm==t_AmPm && f_hour==t_hour && f_min>t_min) {
 			alert(my_dictinary[7184]);
			if (form.elements[i].disabled==false) form.elements[i].focus();
			return false;
		} else if (f_AmPm==t_AmPm && (f_hour%12)>(t_hour%12)) {
			alert(my_dictinary[7184]);
			if (form.elements[i].disabled==false) form.elements[i].focus();
			return false;
		}	
	}
} 

else if(form.elements[i].type=='select-one'){
 if((form.elements[i].value==-1 || form.elements[i].value==0) && cant_be_empty[i]==1)
  {
    alert(my_dictinary[1012]);
    form.elements[i].focus();
    return false;
   }
}

else if((form.elements[i].type=='text') || (form.elements[i].type=='textarea') || (form.elements[i].type=='file')){

//remove separation comma's from number, this step is needed when thousand separator is used in number formatting in employee's financial data & financial transactions. 
 if((novalues[i]==1 || novalues[i]==2 || novalues[i]==3)){
	 form.elements[i].value = (form.elements[i].value).replace(/,/g, ""); 
 }
 
 if(form.elements[i].value=="" && cant_be_empty[i]==1) {
    alert(my_dictinary[1012]);
    form.elements[i].focus();
    return false;
 } else if(form.elements[i].value.indexOf("'",0)!=-1 && form.elements[i].name!='responsibility' && form.elements[i].name!='Working_Conditions' && form.elements[i].name!='qualifications' && (form.elements[i].type!='file' || (form.elements[i].type=='file' && check_file_name(form.elements[i].value)==false))) {
    alert(my_dictinary[2793]);
    form.elements[i].focus();
    return false;
 } else if(form.elements[i].value.indexOf('"',0)!=-1 && form.elements[i].name!='responsibility' && form.elements[i].name!='Working_Conditions' && form.elements[i].name!='qualifications' && (form.elements[i].type!='file' || (form.elements[i].type=='file' && check_file_name(form.elements[i].value)==false))) {
    alert(my_dictinary[2794]);
    form.elements[i].focus();
    return false;
 } else if(isNaN(form.elements[i].value) &&  (novalues[i]==1 || novalues[i]==2 || novalues[i]==3)) 
  {
    alert(my_dictinary[1010]);
    form.elements[i].focus();
    return false;
 } 
 else if(novalues[i]==1 && parseFloat(form.elements[i].value)<0)
   {
    alert(my_dictinary[3903]);
    form.elements[i].select();
    form.elements[i].focus();
    return false;
   }
   else if(novalues[i]==3 && parseFloat(form.elements[i].value)<=0)
   {
    alert(my_dictinary[7737]);
    form.elements[i].select();
    form.elements[i].focus();
    return false;
   }
  else if (typeof novalues[i]!="undefined" && novalues[i]!=0) {
		if ( (form.elements[i].value.indexOf(".",0)!=-1 && form.elements[i].value.substring(0,form.elements[i].value.indexOf('.')).length > checklength[i])
			|| 																																			
			 (form.elements[i].value.indexOf(".",0)==-1 && form.elements[i].value.length > checklength[i])
			) {
		  alert(checklength[i]+' '+my_dictinary[7738]);
		  form.elements[i].select();
		  form.elements[i].focus();
		  return false;
		}
   }
  else if(form.elements[i].value.length > checklength[i]) {
    alert(checklength[i]+' '+my_dictinary[7738]);
    form.elements[i].focus();
    return false;
 } 
 
 else if(form.elements[i].type=='text' && (form.elements[i].name.indexOf("Email",0)!=-1 || form.elements[i].name.indexOf("email",0)!=-1) && Trim(form.elements[i].value)!=""){
   if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(form.elements[i].value)))   {
    alert(my_dictinary[1019]);
    form.elements[i].focus();
    return false;
   }
 } 

  if((form.elements[i].type=='file')){

			   if(extensions_array.length){
					  picture_found=0;
					  extension1 =document.form.elements[i].value;
					  if(extension1!=""){
								  dot_index =extension1.lastIndexOf(".")
								  if(dot_index!=-1)
								     extension1=extension1.substring(dot_index+1, extension1.length );
								  else
								     extension1=my_dictinary[7742];
								  
								  extension1=new String(extension1);
								  if (extension1!=my_dictinary[7742]) extension1=extension1.toLowerCase();
								 for(var extensions_i in extensions_array)
									if(extensions_array[extensions_i]==extension1) {
										picture_found=1;
									}
								  if(picture_found==0){
										   alert(my_dictinary[5868]+extension1)
										   return false;
								  }
					  }
			}
   }

  else if((form.elements[i].name.indexOf("date",0)!=-1) && (form.elements[i].value!=""))
  {
    var my_date=form.elements[i].value;
    var dd=my_date.substr(0,2);
    var mm=my_date.substr(3,2);
    var yy=my_date.substr(6,4);
	if(setup_use_hijri_dates_admin==1) {
			if(!hijriDateValidation(my_date)) return alert_action(form.elements[i],my_dictinary[1020]); 
	}else{
			if(!dateValidation(my_date))      return alert_action(form.elements[i],my_dictinary[1020]); 
	}
	
var checkstr = "0123456789";
var DateField = form.elements[i];
var Datevalue = "";
var DateTemp = "";
var seperator = "/";
var day=dd;
var month=mm;
var year=yy;
var leap = 0;
var err = 0;
var i;
   err = 0;
   DateValue = form.elements[i].value;
   
   for (j = 0; j < DateValue.length; j++) {
	  if (checkstr.indexOf(DateValue.substr(j,1)) >= 0) {
	     DateTemp = DateTemp + DateValue.substr(j,1);
	  }
   }
   DateValue = DateTemp;

   if (err == 0) {
      form.elements[i].value = day + seperator + month + seperator + year;


	if (should_be_before_current==1 && before_current[i]==1 && form.elements[i].value!="") {
		if (!compare_from_to_dates(form.elements[i].value,local_date())) {
			alert(my_dictinary[7743]);
			form.elements[i].select();
			form.elements[i].focus();
			return false; 
		}
	}
	
	if (should_be_after_current==1 && after_current[i]==1 && form.elements[i].value!="") {
		if (!compare_from_to_dates(local_date(),form.elements[i].value)) {
			alert(my_dictinary[8810]);
			form.elements[i].select();
			form.elements[i].focus();
			return false; 
		}
	}

	if (form.elements[i].name=='to_date' || form.elements[i].name=='end_date' || form.elements[i].name=='to_date_synch') {
	if (typeof document.form.start_date!="undefined")
	var start_date= form.start_date.value;
	else if (typeof document.form.need_date!="undefined") 
	var start_date= form.need_date.value;
	else if (typeof document.form.from_date!="undefined") 
	var start_date= form.from_date.value;
	var end_date= form.elements[i].value;
			
	var year1;
	var month1;
	var day1;
 
    year1 = start_date.substr(6,4);	
    month1 = start_date.substr(3,2); if (month1.substr(0,1)=="0") month1= month1.substr(1,1);
    day1 = start_date.substr(0,2); if (day1.substr(0,1)=="0") day1= day1.substr(1,1);
	var start_dateO = new Date(parseInt(year1),parseInt(month1)-1,parseInt(day1));
		
    year1 = end_date.substr(6,4);	
    month1 = end_date.substr(3,2); if (month1.substr(0,1)=="0") month1= month1.substr(1,1);
    day1 = end_date.substr(0,2); if (day1.substr(0,1)=="0") day1= day1.substr(1,1);
	var end_dateO = new Date(parseInt(year1),parseInt(month1)-1,parseInt(day1));

	var start_dateV = start_dateO.valueOf(); 
	var end_dateV = end_dateO.valueOf(); 


	if (end_dateV < start_dateV) { 
     alert(my_dictinary[7724]); 
     form.elements[i].focus(); 
     form.elements[i].select();
     return false; 
   }
  } 
  	  
   }
   
   else {
      alert(my_dictinary[1020]);
      form.elements[i].select();
      form.elements[i].focus();
      return false;
   }
  } 

  
 } 
} 


 if (validate_per_page==1) return check_validation_per_page(form);

} 



function check_validation_per_page(form) {
	switch (form.validate_per_page.value) {
		case 'wives': 
		
		  if (!compare_from_to_dates(form.birth_date.value,form.marry_date.value) && form.birth_date.value!="" && form.marry_date.value!="") return alert_action(form.marry_date,my_dictinary[7744]);
		  if (!compare_from_to_dates(form.emp_birth_date.value,form.marry_date.value) && form.emp_birth_date.value!="" && form.marry_date.value!="") return alert_action(form.marry_date,my_dictinary[7771]);
		  else if (!check_logical_dates(form.emp_birth_date,form.marry_date,form.min_age_marry.value) && form.min_age_marry.value!=0 && form.emp_birth_date.value!="") return alert_action(form.birth_date,my_dictinary[7762]+form.min_age_marry.value+my_dictinary[7761]);
		  else if (!check_logical_dates(form.birth_date,form.marry_date,form.min_age_marry.value) && form.min_age_marry.value!=0 && form.birth_date.value!="") return alert_action(form.birth_date,my_dictinary[7763]+form.min_age_marry.value+my_dictinary[7761]);
		  break;
		case 'sons': 
		
		  if (!compare_from_to_dates(form.marry_date.value,form.birth_date.value) && form.marry_date.value!="" && form.birth_date.value!="") return alert_action(form.birth_date,my_dictinary[7747]);
		  break;
		// case 'other_requests': 
		
		//   if (!compare_from_to_dates(local_date(),form.from_date.value) && form.transaction_period.checked==true) return alert_action(form.from_date,my_dictinary[8811]);
		//   break;
		  
		case 'emp_upgrade': 

		  if (form.basic_salary.value!="" && parseFloat(form.setup_exceed_SS_admin.value)==1 && ((parseFloat(form.salary_upper_limit.value)>0 && parseFloat(form.basic_salary.value)>parseFloat(form.salary_upper_limit.value)) || (parseFloat(form.salary_lower_limit.value)>0 && parseFloat(form.basic_salary.value)<parseFloat(form.salary_lower_limit.value)) )) return alert_action(form.basic_salary,my_dictinary[7775]);
 		  if (form.basic_salary.value!="" && parseFloat(form.setup_exceed_SS_admin.value)==2 && ((parseFloat(form.salary_upper_limit.value)>0 && parseFloat(form.basic_salary.value)>parseFloat(form.salary_upper_limit.value)) || (parseFloat(form.salary_lower_limit.value)>0 && parseFloat(form.basic_salary.value)<parseFloat(form.salary_lower_limit.value)) )) alert(my_dictinary[8809]);
		  if (form.basic_salary.value!="" && parseFloat(form.setup_exceed_budget_admin.value)==1 && ((parseFloat(form.budget_amount.value)>0 && (parseFloat(form.basic_salary.value)-parseFloat(form.old_basic_salary.value)+parseFloat(form.cost_amount.value))>parseFloat(form.budget_amount.value)) )){  if(form.basic_salary.disabled==false) form.basic_salary.focus(); alert(my_dictinary[7778]);return false;}
		  if (form.basic_salary.value!="" && parseFloat(form.setup_exceed_budget_admin.value)==2 && ((parseFloat(form.budget_amount.value)>0 && (parseFloat(form.basic_salary.value)-parseFloat(form.old_basic_salary.value)+parseFloat(form.cost_amount.value))>parseFloat(form.budget_amount.value)) ))alert(my_dictinary[7779]);


		  break;
		  
		  case 'punishments_trans':
		  if(!compare_from_to_dates(form.penalty_date.value,form.vac_end_date.value))
			{	
			alert(my_dictinary[7724]); 
			form.vac_end_date.focus();
			return false; 
			}
			break;
		  
	}
	
	return true;
}


function alert_action(alert_object,alert_msg) {
		alert(alert_msg);
		alert_object.select();
		alert_object.focus();
		return false; 
}


   function check_logical_dates(sent_date,second_date,legal_age) {
		date_to_validate= sent_date.value;
		second_date_value= second_date.value;

		year1 = date_to_validate.substr(6,4);	
		month1 = date_to_validate.substr(3,2); if (month1.substr(0,1)=="0") month1= month1.substr(1,1);
		day1 = date_to_validate.substr(0,2); if (day1.substr(0,1)=="0") day1= day1.substr(1,1);
		var date_object_to_validate = new Date(parseInt(year1),parseInt(month1)-1,parseInt(day1));

		
		if (second_date_value!='' && second_date_value!=' ' && second_date_value!='  ') { 
			year1 = second_date_value.substr(6,4);	
			month1 = second_date_value.substr(3,2); if (month1.substr(0,1)=="0") month1= month1.substr(1,1);
			day1 = second_date_value.substr(0,2); if (day1.substr(0,1)=="0") day1= day1.substr(1,1);
			second_date_object_to_validate = new Date(parseInt(year1),parseInt(month1)-1,parseInt(day1));
		} else {
			second_date_object_to_validate= new Date();
		}
				
		sentDateValue = date_object_to_validate.getTime();
		todayValue = second_date_object_to_validate.getTime();
		diffInMiliSeconds= todayValue - sentDateValue;
		
		msPerDay = 24 * 60 * 60 * 1000; 
		msPerYear= msPerDay * 365 * legal_age;
		
		
		
		if (diffInMiliSeconds>=msPerYear) {
			return true;
		} else {
			return false;
		}
   }
function check_file_name(value)
{
	
          if(value=='')return true;

		  qut_index =value.indexOf("'",value.lastIndexOf("\\"))
		  if(qut_index!=-1)
			 return false
									 
					return true;
   }
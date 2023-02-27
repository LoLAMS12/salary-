function logoff(){
	return false;
	}
function change_lang(lang,is_out){
  	var page_name;
	page_name=top.location.toString();

  page_name = page_name.replace("#", "");

	//console.log(page_name);
	$.get(site_host_path+'MenaME/change.php?change=lang&lang='+lang+'&page_name='+page_name,function (data){
    //alert(page_name)

     window.open(page_name,'_self');
																				
	});
	
}
function show_reset_ext(form)
{
   var vNowYear = gNow.getFullYear();
   var keep_month=0;
   if(document.form.select_month)
	 keep_month=document.form.select_month.selectedIndex;
  // document.form.reset();
   var formlength=Number(form.length);
   for(var i=0;i<=formlength-1;i++)
   { 
 
    if((form.elements[i].type=='text' && (form.elements[i].name.indexOf('date')==-1) ) || (form.elements[i].type=='textarea'))
	  form.elements[i].value="";
     else if((form.elements[i].type=='select-one') && form.elements[i].name.indexOf("year")==-1)
	 {
	   form.elements[i].options[0].selected=true;
	  }
	  else if((form.elements[i].type=='select-one') && form.elements[i].name.indexOf("year")!=-1)
	  {
	    for(var xx=0;xx<Number(form.elements[i].length);xx++)
		  if(form.elements[i].options[xx].value==vNowYear)
		    form.elements[i].options[xx].selected=true;
	   }
   }
   if(document.form.select_month)
	 document.form.select_month.options[keep_month].selected=true;
   if(document.form.section)
	 document.form.section.options.length=1;
   if(document.form.bank_branch)
	 document.form.bank_branch.options.length=1;
   if(document.form.employee_code)
	 document.form.employee_code.value="";
   if(document.form.employee_name_a)
	 document.form.employee_name_a.value="";
   return true;
 }

function show_salary_ext(form) 
{
   document.form.show1.value=1;
   submitForm(document.form);;
   return true;
 }
 
function print_ext(form) 
{
 print_this_window(form);
}
 
function print_ext2(form) 
{
 parent.body.focus();
 window.print()
}
 
function move_transaction_ext(form)
{
   var formlength=Number(document.form.length);
   var no_selected=0;
   for(var i=0;i<=formlength-1;i++)
    { 
     if(document.form.elements[i].type=='checkbox' && document.form.elements[i].checked)
       no_selected++;
	  else if(document.form.elements[i].name=='cal_salary')
       no_selected++;
      }
   if(no_selected>0)
   {
   if(confirm(my_dictinary[1006]))
   {
     document.form.move_trans1.value=1;
     submitForm(document.form);;
     return true;
    }
   else return false;	
   }
   else 
    {
    alert(my_dictinary[1007]);
	return false;
	 }
 }
function move_transaction_ext2(form)
{
   if(confirm(my_dictinary[1008]))
   {
     document.form.move_trans1.value=1;
     submitForm(document.form);;
     return true;
    }
   else return false;	
 }
function move_cal_endemployee_ext(form)
{
   if(checkall(form)==false)
     return false;
   document.form.cal_salary.value=1;
   submitForm(document.form);;
   return true;	
 }
function move_untransaction_ext(form)
{
   if(confirm(my_dictinary[7798]))
   {
     document.form.move_untrans1.value=1;
     submitForm(document.form);;
     return true;
    }
   else return false;	
 }
function onchange_field(nyvalue)
 {
   if(isNaN(myvalue.value))
   {
    alert(my_dictinary[1010]);
    myvalue.value.focus();
    return false;
   }
 }
function search_ext(form) {
   window.open("employees/employees_list.php","employee","width=1000,height=630,scrollbars=no");
  } 
function search_ext2(form) {
	var is_hr=0,is_dm=0,hr_fin=0,is_ta=0;
	if(typeof document.form.is_hr!="undefined") is_hr=1; 
	if(typeof document.form.hr_fin!="undefined") is_hr=2;
	if(typeof document.form.is_dm!="undefined") is_dm=1;
	if(typeof document.form.is_ta!="undefined") is_ta=1;
   window.open("../system_info/employees_list.php?is_hr="+is_hr+'&is_dm='+is_dm+'&is_ta='+is_ta,"employee","width=1000,height=630,scrollbars=no");
  } 

function go_selected_user(employee_code,employee_name)
{
  $('#employee_code').val(employee_code);
  $('#employee_name').val(employee_name);
}

function anuual_converter_open(emp_code,index)
{
 window.open("anuual_converter.php?employee_code="+emp_code+"&index="+index,"anuual_converter","width=370,height=200,scrollbars=auto");
}
function search_ext_focused(form,row) {

  var formlength= Number(document.form.length);
    var pre_selected_employees= "";
	var my_element= "";
       for(var i=0;i<=formlength-1;i++) { 
     	  if (document.form.elements[i].name=='employee_code['+row+']' ) {
				for(var j=0;j<=formlength-1;j++) {
					my_element= document.form.elements[j].name;
				    if (my_element.substr(0,14)=='employee_code[') 
   		   				 pre_selected_employees += document.form.elements[j].value+"-" ; 
						
				}
		
		  }
       }	
 window.open("../employees/employee_search.php?row="+row+"&pre_selected_employees="+pre_selected_employees,"_blank","width=500,height=635,scrollbars=no");	
}
function emp_currency_messages_open(emp_code,index,value,flag,extra)
{
 window.open("emp_currency_messages.php?emp_code="+emp_code+"&index="+index+"&value="+value+"&flag="+flag+"&extra="+extra,"emp_currency_messages","width=500,height=200,scrollbars=auto");
}
function search_ext_job(form) {
   window.open("HR/job_list.php","HR_Job_Descriptions","width=370,height=450,scrollbars=no");
} 

function search_ext_req(form) {
   window.open("HR/job_req_search.php","HR_Job_Descriptions","width=400,height=550,scrollbars=no");
  } 
  
  function search_ext_req2(form) {
   window.open("../HR/job_req_search.php","HR_Job_Descriptions","width=400,height=550,scrollbars=no");
} 

function search_agency(clicker_id,category_type,speciality_type)
{

   window.open("../../../MenaPay/insurance/agency_search.php?clicker_id="+clicker_id+"&category_type="+category_type+"&speciality_type="+speciality_type,"search_agency","width=370,height=450,scrollbars=no");
}

function search_ext_App(form) {
	
   window.open("HR/job_App_search.php","Application","width=400,height=500,scrollbars=no");
} 

function search_ext_App2(form) {
   window.open("../HR/job_App_search.php","Application","width=400,height=500,scrollbars=no");
  } 

    function search_ext3(form,code,major_code,section_code,division_code) {
    	// sahar Bug-4965
    	var year='';
    	if (document.getElementById('year') !== null) {
    		var year=document.getElementById('year').value;
    	}
    	//end
   window.open("../../lib/code_table_search.php?code="+code+"&major_code="+major_code+"&section_code="+section_code+"&division_code="+division_code+"&is_checked="+form+"&year="+year/*document.getElementById('year').value*/,"code_tabel","width=500,height=600,scrollbars=no");
  } 

function search_ext_screening(form,multi_select) {
   window.open('../interviews/interview_search.php?multi_select='+multi_select,'_blank',"width="+(screen.width-8)+", height="+(screen.height-60)+", scrollbars=no");
}

function search_ext_screening_offer(form,multi_select) {
	   window.open(site_host_path+'/'+system_name+'/Interviews/interview_search.php?multi_select='+multi_select+'&calling_page=offer','_blank',"width="+(screen.width-8)+", height="+(screen.height-60)+", scrollbars=no");
}

function search_ext_screening_hire(form,multi_select) {
   window.open('../interviews/interview_search.php?multi_select='+multi_select+'&calling_page=hire','_blank',"width="+(screen.width-8)+", height="+(screen.height-60)+", scrollbars=no");
}

function search_ext_Request(form) {
   window.open("Interviews/Interview_Request_search.php","_blank","width=420,height=500,scrollbars=no");
} 

function search_ext_Request2(form) {
   window.open("../Interviews/Interview_Request_search.php","_blank","width=420,height=500,scrollbars=no");
} 

function search_ext_interview(form) {
   window.open("Interviews/Interview_Master_search.php","_blank","width=420,height=500,scrollbars=no");
} 

function search_ext_letter(form) {
   window.open("HR/hr_letters_search.php","_blank","width=380,height=550,scrollbars=no");
} 

function search_ext_offer(form) {
   window.open("HR/hr_offers_search.php","_blank","width=400,height=550,scrollbars=no");
} 

function search_ext_hiring(form) {
   window.open("HR/hr_hiring_search.php","_blank","width=400,height=550,scrollbars=no");
} 

function go_employees() {
   document.employee_form.action="employees.php";
   submitForm(document.employee_form);
  }
function go_financial_data() 
 {
   document.employee_form.action="financial_data.php";
   submitForm(document.employee_form);;
  }
function go_allownce()
 {
   document.employee_form.action="allownce.php";
   submitForm(document.employee_form);;
  }
function go_vacations()
 {
   document.employee_form.action="vacations.php";
   submitForm(document.employee_form);;
  }
function go_extra_data()
 {
   document.employee_form.action="extra_data.php";
   submitForm(document.employee_form);;
  }
function go_residence()
 {
   document.employee_form.action="residence.php";
   submitForm(document.employee_form);;
  }
 function go_trans_overtime()
 {
   document.employee_form.action="transactions.php";
   submitForm(document.employee_form);;
  }
 function go_trans_hourlyleaves()
 {
   document.employee_form.action="hourlyleaves.php";
   submitForm(document.employee_form);;
  }
 function go_trans_salaryraise()
 {
   document.employee_form.action="salaryraise.php";
   submitForm(document.employee_form);;
  }
 function go_trans_leaves_vacation()
 {
   document.employee_form.action="leaves_vacation.php";
   submitForm(document.employee_form);;
  }
 function go_trans_leaves_compensation()
 {
   document.employee_form.action="leaves_compensation.php";
   submitForm(document.employee_form);;
  }
 function go_trans_leaves_adjustment()
 {
   document.employee_form.action="leaves_adjustment.php";
   submitForm(document.employee_form);;
  }
 function go_trans_loans()
 {
   document.employee_form.action="loans.php";
   submitForm(document.employee_form);;
  }
 function go_trans_otherincomes()
 {
   document.employee_form.action="otherincomes.php";
   submitForm(document.employee_form);;
  }
 function go_trans_otherdeductions()
 {
   document.employee_form.action="otherdeductions.php";
   submitForm(document.employee_form);;
  }
function break_loan_ext(form)
 {
   var formlength=Number(document.form.length);
   var no_selected=0;
   for(var i=0;i<=formlength-1;i++)
    { 
     if(document.form.elements[i].type=='checkbox' && document.form.elements[i].checked)
	  {
	   if(document.form.elements[i+4].value>0 && document.form.elements[i+5].value>0)
         no_selected++;
	   }
      }
   if(no_selected>0)
   {
     document.form.break_loan1.value=1;
     document.form.save1.value=1;
     submitForm(document.form);;
     return true;
   }
   else 
    {
    alert(my_dictinary[1011]);
	return false;
	 }
  }
function break_loan_ext2(loan_code)
 {
     document.form.break_loan2.value=loan_code;
     submitForm(document.form);;
     return true;
  }
  
  
  
function decimal_numbers(original_number, decimals) {
    var result1 = original_number * Math.pow(10, decimals);
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}
function pad_with_zeros(rounded_value, decimal_places) {

    
    var value_string = rounded_value.toString()
    
    
    var decimal_location = value_string.indexOf(".")

    
    if (decimal_location == -1) {
        

        decimal_part_length = 0
        

        value_string += decimal_places > 0 ? "." : ""
    }
    else {

        
        decimal_part_length = value_string.length - decimal_location - 1
    }
    

    var pad_total = decimal_places - decimal_part_length
    
    if (pad_total > 0) {
        

        for (var counter = 1; counter <= pad_total; counter++) 
            value_string += "0"
        }
    return value_string
}
  
  
  
var date_name="";
function update_mydate(date_name1)
{
   date_name=date_name1;
   show_calendar('form.mydate');
 }
function return_date() 
{
 var formlength=Number(document.form.length);
 for(var i=0;i<=formlength-1;i++)
  { 
   if(document.form.elements[i].name==date_name)
      document.form.elements[i].value=document.form.mydate.value;
  }

 }


function clear_employee()
{
	if (typeof document.form.employee_code!="undefined")
	document.form.employee_code.value="";
	if (typeof document.form.employee_name_a!="undefined")
	document.form.employee_name_a.value="";
	
	$('input.employee_name').each(function(index, element) {
  			$(this).val('');
        
    });
 }

function go_requisition_page(page_name) {
   document.req_form.action= page_name;
   submitForm(document.req_form);
}

function go_Application_page(page_name) {
   document.Application_form.action= page_name;
   submitForm(document.Application_form);
}

function go_employee_next_page(page_name) {
   document.employee_form.action= page_name;
   submitForm(document.employee_form);
}

function go_salary_scale_page(page_name) {
   document.sal_form.action= page_name;
   submitForm(document.sal_form);
}

function go_interview_next_page(page_name) {
   document.interview_form.action= page_name;
   submitForm(document.interview_form);
}

function go_training_page(page_name) {
   document.training_form.action= page_name;
   submitForm(document.training_form);
}

function go_train_regist_page(page_name) {
   document.train_regist_form.action= page_name;
   submitForm(document.train_regist_form);
}



function checkall_checkboxes(is_checked,form) {
	var formlength=Number(form.length);
	if(is_checked) { 
	  for(var i=0;i<=formlength-1;i++) { 
		 if(form.elements[i].type=='checkbox')
		     form.elements[i].checked=true;
	  }
	} else { 
	  for(var i=0;i<=formlength-1;i++) { 
		 if(form.elements[i].type=='checkbox')
		     form.elements[i].checked=false;
	  }
	}
}

function local_time() {
	var time = new Date();	
	var hour = time.getHours();
	var minute = time.getMinutes();
	var local_time= '';
	local_time += ((hour > 12) ? hour - 12 : hour);
	local_time += ((minute < 10) ? ":0" : ":") + minute;
	local_time += (hour >= 12) ? my_dictinary[1500] : my_dictinary[1449];
	return local_time;
}

function local_time_log_file() {
    
	var time = new Date();	
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	var local_time= '';
	local_time += ((hour > 12) ? hour - 12 : hour);
	local_time += ((minute < 10) ? ":0" : ":") + minute;

	local_time += (hour >= 12) ? 'PM' : 'AM';
	return local_time;
}

function local_hour_minutes() {
	var time = new Date();	
	var hour = time.getHours();
	var minute = time.getMinutes();
	var time_array= new Array();

	if (hour>12) hour= hour-12;
	if (hour<10) hour= "0"+hour;
	
	switch (minute) {
		case 0: case 1: case 2: case 3: case 4:
			minute= "00";
			break;
		case 5: case 6: case 7: case 8: case 9:
			minute= "05";
			break;
		case 10: case 11: case 12: case 13: case 14:
			minute= "10";
			break;
		case 15: case 16: case 17: case 18: case 19:
			minute= "15";
			break;
		case 20: case 21: case 22: case 23: case 24:
			minute= "20";
			break;												
		case 25: case 26: case 27: case 28: case 29:
			minute= "25";
			break;												
		case 30: case 31: case 32: case 33: case 34:
			minute= "30";
			break;												
		case 35: case 36: case 37: case 38: case 39:
			minute= "35";
			break;												
		case 40: case 41: case 42: case 43: case 44:
			minute= "40";
			break;												
		case 45: case 46: case 47: case 48: case 49:
			minute= "45";
			break;												
		case 50: case 51: case 52: case 53: case 54:
			minute= "50";
			break;
		case 55: case 56: case 57: case 58: case 59:
			minute= "55";
			break;												
	}
	time_array[0]= hour;
	time_array[1]= minute;
	time_array[2]= (hour>=12)?"PM":"AM";
	return time_array;
}


function go_change() {
 if (document.form.checkbox_all.checked) {
		document.form.from_date.value= "";	
		document.form.to_date.value= "";
		document.form.trans_type[0].selected= true;
		if($('[name='+'current'+'],#'+'current').length)
           $('[name=current],#current').attr('checked','checked');

	}
}
function go_uncheck() {
	if (document.form.from_date.value!="" || document.form.to_date.value!="" || ( typeof document.form.trans_type!="undefined" &&  document.form.trans_type.selectedIndex!=0) || ( typeof document.form.department!="undefined" &&  document.form.department.selectedIndex!=0) || ( typeof document.form.section!="undefined" &&  document.form.section.selectedIndex!=0) || ( typeof document.form.division!="undefined" &&  document.form.division.selectedIndex!=0) || (typeof document.form.manager_code!="undefined" && document.form.manager_code.selectedIndex!=0)) 
    document.form.checkbox_all.checked=false;
}

function go_change_no_type() {
 if (document.form.checkbox_all.checked) {
		document.form.from_date.value= "";	
		document.form.to_date.value= "";
		if($('[name='+'current'+'],#'+'current').length)
          $('[name=current],#current').attr('checked','checked');
	}
}
function go_uncheck_no_type() {
	if (document.form.from_date.value!="" || document.form.to_date.value!="") 
		document.form.checkbox_all.checked=false;
}

function go_change_vac_balance() {
 if (document.form.checkbox_all.checked) {
		document.form.trans_type[0].selected= true;
		document.form.year[0].selected= true;
		document.form.current_year.checked= false;	
		if($('[name='+'current'+'],#'+'current').length)
 	      $('[name=current],#current').attr('checked','checked');

	}
}
function go_uncheck_vac_balance() {
	if (document.form.trans_type.selectedIndex!=0 || document.form.year.selectedIndex!=0 || document.form.current_year.checked==true) 
		document.form.checkbox_all.checked=false;
}

function change_current(year,cur_year) {
   if (year.selectedIndex!=cur_year) document.form.current_year.checked= false; else document.form.current_year.checked= true;
}

function change_current_month(month,cur_month) {
	if(typeof document.form.current_month!="undefined" )
   if (month!=cur_month ) document.form.current_month.checked= false; else document.form.current_month.checked= true;
}

function go_requisition_page(page_name) {
   document.req_form.action= page_name;
   submitForm(document.req_form);
}

function go_interview_next_page(page_name) {
   document.interview_form.action= page_name;
   submitForm(document.interview_form);
}



function selectagain_country()
  {
   document.form.city_code.options.length=1;
   j=1;
	for (var i=0 ; i<=xi ; i++) 
	{ 
	   if (parent_id[i]==document.form.country_code.options[document.form.country_code.selectedIndex].value)
	    { 
		  var option0 = new Option(NamesArray[i], id[i]);
  		  eval("document.form.city_code.options[j]=option0");
          document.form.city_code.options[j].value=id[i];
		  document.form.city_code.options[j].text=NamesArray[i];
		  document.form.city_code.options[j].selected;
		  j++;
		  }                    
	}
}
 

	function compare_from_to_dates(start_date,end_date) {
		if(start_date!=undefined && end_date!=undefined){
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
	
	
		if (end_dateV < start_dateV) 
		  return false; 
		else
		  return true; 
		}
   }

 function save_appraisal_emp_objectives(form) {
 if(survey_list.validator()==false)
   return false ;
   
    var formlength=Number(survey_list.document.form.length);
    for(var i=0;i<=formlength-1;i++) {
 		
	if (survey_list.document.form.elements[i].type=='text' && survey_list.document.form.elements[i].name.indexOf('weight_grade',0)!=-1 && survey_list.document.form.elements[i-1].checked) {
	  
	  if (survey_list.document.form.elements[i].value=="" || survey_list.document.form.elements[i].value==" " || survey_list.document.form.elements[i].value=="  ") {
			alert(my_dictinary[1012]);
			survey_list.document.form.elements[i].select();
			survey_list.document.form.elements[i].focus();
			return false;
		}
		else if (isNaN(survey_list.document.form.elements[i].value)) {
			alert(my_dictinary[1010]);
			survey_list.document.form.elements[i].select();
			survey_list.document.form.elements[i].focus();
			return false;
		}
		else if (parseFloat(survey_list.document.form.elements[i].value)<0) {
			alert(my_dictinary[3903]);
			survey_list.document.form.elements[i].select();
			survey_list.document.form.elements[i].focus();
			return false;
		}

		
			if (parseFloat(survey_list.document.form.elements[i].value)>100) {
				alert(my_dictinary[7792]);
				survey_list.document.form.elements[i].select();
				survey_list.document.form.elements[i].focus();
				return false;
		}
		
	} 
   } 
	
		if (document.form.page_desc.value=='obj_factors') {
		
		  var weight_sum= 0;
		  var w= 0;
		  var count= 0
		  for (var i=0;i<=formlength-1;i++)  
			if (survey_list.document.form.elements[i].name.indexOf('weight_grade',0)!=-1 && survey_list.document.form.elements[i-1].checked) {
				w= parseFloat(survey_list.document.form.elements[i].value);
				if (isNaN(w)) w= 0;
				weight_sum= weight_sum + w;
				
				count= count + 1;
			}
						
		  if (weight_sum!=100 && count>0) {
		  	alert(my_dictinary[7793]); 	
			return false;
		  }	
		} else if (document.form.page_desc.value=='objectives') {
			
          var sum=0;
          var summation_error=0;
            
				survey_list.$('[group=factors]').each(function()
				{
					sum=0;
					factor_id=$(this).attr('factor');
					survey_list.$('[factor_question='+factor_id+']').each(function()
					{
						if(survey_list.$('[Checkindex='+$(this).attr('index')+']').prop('checked')==true)
						{
							//sum+= parseFloat(eval($(this).val()));
              sum= parseFloat(sum)+parseFloat(eval($(this).val()));
              if (typeof eval("survey_list.document.form.setup_hostelries_round_admin")=="undefined") 
              {
                sum=sum.toFixed(3);
              }else{
                var setup_hostelries_round_admin=survey_list.document.form.setup_hostelries_round_admin.value;
                sum=decimal_numbers(sum,setup_hostelries_round_admin);
                }
						}
				
					});
					if (sum!=100) {
					
						summation_error=1;
						return false;
					}	
				});
			
			if (summation_error!=0) {
			
				alert(my_dictinary[7794]);
				return false;
			}	
		}
	
   	survey_list.document.form.save1.value= 1;	
    submitForm(survey_list.document.form);
 
}
function selectagain()
  {
if(typeof document.form.section=="undefined" )  return;
if(typeof document.form.section!="undefined" )   document.form.section.options.length=1;
if(typeof document.form.division!="undefined" )   document.form.division.options.length=1;
if(typeof document.form.units!="undefined" )   document.form.units.options.length=1;
if(typeof document.form.sub_section!="undefined" )   document.form.sub_section.options.length=1;
if(typeof document.form.sub_division!="undefined" )   document.form.sub_division.options.length=1;
if(typeof document.form.sub_unit!="undefined" )    document.form.sub_unit.options.length=1;
if(typeof document.form.office!="undefined" )   document.form.office.options.length=1;
if(typeof document.form.team!="undefined" )    document.form.team.options.length=1;
   j=1;
	for (var i=1 ; i<=xi ; i++) 
	{ 
	   if (parent_id[i]==document.form.department.options[document.form.department.selectedIndex].value)
	    { 
		  var option0 = new Option(name[i], id[i]);
  		  eval("document.form.section.options[j]=option0");
          document.form.section.options[j].value=id[i];
		  document.form.section.options[j].text=name[i];
		  document.form.section.options[j].selected;
		  j++;
		  }                    
	}
}
function selectagain_section() {
if(typeof document.form.section=="undefined" )  return;
if(typeof document.form.section!="undefined" ) $('select[name=section]').html($('select[name=section] option:first-child'))
if(typeof document.form.division!="undefined" )   $('select[name=division]').html($('select[name=division] option:first-child'))
if(typeof document.form.units!="undefined" )   $('select[name=units]').html($('select[name=units] option:first-child'))
if(typeof document.form.sub_section!="undefined" )  $('select[name=sub_section]').html($('select[name=sub_section] option:first-child'))
if(typeof document.form.sub_division!="undefined" )  $('select[name=sub_division]').html($('select[name=sub_division] option:first-child'))
if(typeof document.form.sub_unit!="undefined" )   $('select[name=sub_unit]').html($('select[name=sub_unit] option:first-child'))
if(typeof document.form.office!="undefined" )  $('select[name=office]').html($('select[name=office] option:first-child'))
if(typeof document.form.team!="undefined" )    $('select[name=team]').html($('select[name=team] option:first-child'))
 var  j=1;
	for (var i=1 ; i<=xi ; i++) { 
	   if (parent_id[i]==document.form.department.options[document.form.department.selectedIndex].value) {
		  var option0 = new Option(NamesArray[i], id[i]);
  		  eval("document.form.section.options[j]=option0");
          document.form.section.options[j].value=id[i];
		  document.form.section.options[j].text=NamesArray[i];
		  document.form.section.options[j].selected;
		  j++;
		  }                    
	}
}

function selectagain_division()
  {
if(typeof document.form.division!="undefined" )   document.form.division.options.length=1;
if(typeof document.form.units!="undefined" )   document.form.units.options.length=1;
if(typeof document.form.sub_section!="undefined" )   document.form.sub_section.options.length=1;
if(typeof document.form.sub_division!="undefined" )   document.form.sub_division.options.length=1;
if(typeof document.form.sub_unit!="undefined" )    document.form.sub_unit.options.length=1;
if(typeof document.form.office!="undefined" )   document.form.office.options.length=1;
if(typeof document.form.team!="undefined" )    document.form.team.options.length=1;
   j=1;
	for (var i=1 ; i<=xj ; i++) 
	{ 
	   if (parent_id_2[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id[i]==document.form.section.options[document.form.section.selectedIndex].value)
	    { 
		  var option0 = new Option(name_2[i], id_2[i]);
  		  eval("document.form.division.options[j]=option0");
          document.form.division.options[j].value=id_2[i];
		  document.form.division.options[j].text=name_2[i];
		  document.form.division.options[j].selected;
		  j++;
		  }                    
	}
}

function selectagain_unit()
  {
if(typeof document.form.units!="undefined" )   document.form.units.options.length=1;
if(typeof document.form.sub_section!="undefined" )   document.form.sub_section.options.length=1;
if(typeof document.form.sub_division!="undefined" )   document.form.sub_division.options.length=1;
if(typeof document.form.sub_unit!="undefined" )    document.form.sub_unit.options.length=1;
if(typeof document.form.office!="undefined" )   document.form.office.options.length=1;
if(typeof document.form.team!="undefined" )    document.form.team.options.length=1;

   j=1;
	for (var i=1 ; i<=xj ; i++) 
	{ 
	   if (parent_id_3[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id_2[i]==document.form.section.options[document.form.section.selectedIndex].value && division_parent_id[i]==document.form.division.options[document.form.division.selectedIndex].value)
	    { 
		  var option0 = new Option(name_3[i], id_3[i]);
  		  eval("document.form.units.options[j]=option0");
          document.form.units.options[j].value=id_3[i];
		  document.form.units.options[j].text=name_3[i];
		  document.form.units.options[j].selected;
		  j++;
		  }                    
	}
}
function selectagain_sub_section()
  {
	  
   document.form.sub_section.options.length=1;
   document.form.sub_division.options.length=1;
   document.form.sub_unit.options.length=1;
   document.form.office.options.length=1;
   document.form.team.options.length=1;

  var j=1;
	for (var i=1 ; i<=xl ; i++) 
	{ 
	   if (parent_id_4[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id_3[i]==document.form.section.options[document.form.section.selectedIndex].value && division_parent_id_2[i]==document.form.division.options[document.form.division.selectedIndex].value && unit_parent_id[i]==document.form.units.options[document.form.units.selectedIndex].value )
	    { 
		  var option0 = new Option(name_4[i], id_4[i]);
  		  eval("document.form.sub_section.options[j]=option0");
          document.form.sub_section.options[j].value=id_4[i];
		  document.form.sub_section.options[j].text=name_4[i];
		  document.form.sub_section.options[j].selected;
		  j++;
		  }                    
	}
}
function selectagain_sub_division()
  {
   document.form.sub_division.options.length=1;
   document.form.sub_unit.options.length=1;
   document.form.office.options.length=1;
   document.form.team.options.length=1;

  var j=1;
	for (var i=1 ; i<=xm ; i++) 
	{ 
	   if (parent_id_5[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id_4[i]==document.form.section.options[document.form.section.selectedIndex].value && division_parent_id_3[i]==document.form.division.options[document.form.division.selectedIndex].value && unit_parent_id_2[i]==document.form.units.options[document.form.units.selectedIndex].value && sub_section_parent_id[i]==document.form.sub_section.options[document.form.sub_section.selectedIndex].value)
	    { 
		  var option0 = new Option(name_5[i], id_5[i]);
  		  eval("document.form.sub_division.options[j]=option0");
          document.form.sub_division.options[j].value=id_5[i];
		  document.form.sub_division.options[j].text=name_5[i];
		  document.form.sub_division.options[j].selected;
		  j++;
		  }                    
	}
}
function selectagain_sub_unit()
  {
   document.form.sub_unit.options.length=1;
   document.form.office.options.length=1;
   document.form.team.options.length=1;
  var j=1;
	for (var i=1 ; i<=xn ; i++) 
	{ 
	   if (parent_id_6[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id_5[i]==document.form.section.options[document.form.section.selectedIndex].value && division_parent_id_4[i]==document.form.division.options[document.form.division.selectedIndex].value && unit_parent_id_3[i]==document.form.units.options[document.form.units.selectedIndex].value && sub_section_parent_id_2[i]==document.form.sub_section.options[document.form.sub_section.selectedIndex].value && sub_division_parent_id[i]==document.form.sub_division.options[document.form.sub_division.selectedIndex].value)
	    { 
		  var option0 = new Option(name_6[i], id_6[i]);
  		  eval("document.form.sub_unit.options[j]=option0");
          document.form.sub_unit.options[j].value=id_6[i];
		  document.form.sub_unit.options[j].text=name_6[i];
		  document.form.sub_unit.options[j].selected;
		  j++;
		  }                    
	}
}
function selectagain_office()
  {
   document.form.office.options.length=1;
   document.form.team.options.length=1;
  var j=1;
	for (var i=1 ; i<=xo ; i++) 
	{ 
	   if (parent_id_7[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id_6[i]==document.form.section.options[document.form.section.selectedIndex].value && division_parent_id_5[i]==document.form.division.options[document.form.division.selectedIndex].value && unit_parent_id_4[i]==document.form.units.options[document.form.units.selectedIndex].value && sub_section_parent_id_3[i]==document.form.sub_section.options[document.form.sub_section.selectedIndex].value && sub_division_parent_id_2[i]==document.form.sub_division.options[document.form.sub_division.selectedIndex].value && sub_unit_parent_id[i]==document.form.sub_unit.options[document.form.sub_unit.selectedIndex].value)
	    { 
		  var option0 = new Option(name_7[i], id_7[i]);
  		  eval("document.form.office.options[j]=option0");
          document.form.office.options[j].value=id_7[i];
		  document.form.office.options[j].text=name_7[i];
		  document.form.office.options[j].selected;
		  j++;
		  }                    
	}
}
function selectagain_team()
  {
	  
   document.form.team.options.length=1;
  var j=1;
	for (var i=1 ; i<=xp ; i++) 
	{ 
	   if (parent_id_8[i]==document.form.department.options[document.form.department.selectedIndex].value && section_parent_id_7[i]==document.form.section.options[document.form.section.selectedIndex].value && division_parent_id_6[i]==document.form.division.options[document.form.division.selectedIndex].value && unit_parent_id_5[i]==document.form.units.options[document.form.units.selectedIndex].value && sub_section_parent_id_4[i]==document.form.sub_section.options[document.form.sub_section.selectedIndex].value && sub_division_parent_id_3[i]==document.form.sub_division.options[document.form.sub_division.selectedIndex].value && sub_unit_parent_id_2[i]==document.form.sub_unit.options[document.form.sub_unit.selectedIndex].value && office_parent_id[i]==document.form.office.options[document.form.office.selectedIndex].value)
	    { 
		  var option0 = new Option(name_8[i], id_8[i]);
  		  eval("document.form.team.options[j]=option0");
          document.form.team.options[j].value=id_8[i];
		  document.form.team.options[j].text=name_8[i];
		  document.form.team.options[j].selected;
		  j++;
		  }                    
	}
}


function go_emp_data(hr_host_path,emp_code,comp_no,bran_no,lang) {
	window.open(hr_host_path+"verify_user.php?a="+emp_code+"&c="+comp_no+"&b="+bran_no+"&l="+lang+"&a_s="+document.form.a_s.value+"&sp=file_employee","new");
}

  function createRequestObject(){
	
	var request_o; 
	var browser = navigator.appName; 
	if(browser == "Microsoft Internet Explorer"){

		request_o = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		request_o = new XMLHttpRequest();
	}
	return request_o; 
}

function in_array(element,array)
{
  for(var i in array)
  {
	if(array[i] == element)
	return true;
  }
  return false;
}
function open_page(page,wide,high,target,form){
   if(form==null) form=document.window_form;
   if(target==null) target="mypage"+wide;
   var tempAction=form.action;
   var mywindow=window.open("about:blank",target,"width="+wide+",height="+high+",scrollbars=yes,dependent=yes,toolbar=0,menubar=0,resizable=1"); 
   
   form.action=page;
   form.target=target;
   submitForm(form);
   $(form).removeAttr('target');
   form.action=tempAction;
}

function delete_ext(form)
{
   var formlength=Number(document.form.length);
   var no_selected=0;
   var emp_no_selected=0;
   for(var i=0;i<=formlength-1;i++)
    { 
     if(document.form.elements[i].type=='checkbox' && document.form.elements[i].checked)
	      no_selected++;
	 }
	 
   if(no_selected>0)
   {
   if(confirm(my_dictinary[7718]))
   {
     document.form.delete1.value=1;
	 var formlength=Number(form.length);
	 for(var i=0;i<=formlength-1;i++)  
	 	if (form.elements[i].name=='local_date_log'){
		document.form.local_date_log.value=local_date();
		document.form.local_time_log.value=local_time_log_file();		
	 	}
     submitForm(document.form);;
     return true;
    }
   else return false;	
   }
   else 
    {
    alert(my_dictinary[1004]);
	return false;
	 }
}
	function compare_dates(start_date,end_date) {
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

	if (end_dateV == start_dateV) 	return  0; 
	if (end_dateV < start_dateV) 	return  -1; 
	if (start_dateV < end_dateV ) 	return  1; 
   }
   

function show_org_chart(){
	window.open(site_host_path+system_name+"MSS/online_request/org_chart.php","org_chart","width="+(screen.width-8)+", height="+(screen.height-60)+",scrollbars=no");
}


function dropdown_menu_resize(object)
{
	var time_counter=0;
	var select_list_width=0;
	
	if(object.runtimeStyle.behavior.toLowerCase()=="none"){return 0;}
		object.runtimeStyle.behavior="none";

	if(object.type!='select-one')
	return 0;
		
	if(time_counter==0)
	{
		if(object.attachEvent){object.attachEvent('onblur',list_detectKey)}else{object.onblur=list_detectKey}
		if(object.attachEvent){object.attachEvent('onmousedown',list_detectKey)}else{object.onmousedown=list_detectKey}
		if(object.attachEvent){object.attachEvent('onchange',list_detectKey)}else{object.onchange=list_detectKey}
	}


	function list_detectKey(object) 
	{
		
		   theevent=event.type;
		   if(time_counter==0)
		   {
			   select_list_width=event.srcElement.offsetWidth;
			   time_counter++;
		   }
			switch(theevent)
			{
				case  'mousedown': open_select(event.srcElement);	
				break;
				case 'blur' : close_select(event.srcElement);	
				break;
				case 'change' : close_select(event.srcElement);	
				break;
				default : return 0;
			}
	}
	
	function close_select(object)
	{
		object.style.width=select_list_width;
		object.style.position='static';
		object.parentNode.vAlign=event.srcElement.parentNode.vAlign;
		return 0;
	}
	function open_select(object)
	{
		if(object.scrollWidth > select_list_width)
		{
			object.style.width=object.scrollWidth+20;
			object.style.position='absolute';
			object.parentNode.vAlign='top';
			object.parentNode.style.height=object.offsetHeight+'px';
		}
		return 0;
	}
	return 0;
}
function delete_row(){
var tbl = document.getElementById('myTable');
var index;
var flag=0;
var row=0;
var formlength=Number(document.form.length);
     for(var i=1;i<=formlength-1;i++)   
    		if(document.form.elements[i].name.indexOf("checkbox[",0)!=-1){
            document.form.elements[i].id=row++;
     }

     for(var i=1;i<=formlength-1;i++)   
            if(document.form.elements[i].name.indexOf("checkbox[",0)!=-1  && document.form.elements[i].checked==true){
			flag=1;
			index=document.form.elements[i].id;
 			break; }
   if(flag==1){	
     tbl.deleteRow(index);
     delete_row();
   }
 if(document.form.check_all.checked==true)
   document.form.check_all.checked=false;
   
 if(typeof document.form.data_load_page !='undefined')
 {
	var page_name = document.form.data_load_page.value;
	switch(page_name) 
	{
	  case 'leave': change2(); break;
	  case 'vacation': do_sum(); break;
	  case 'loans': do_sum(); break;
	  case 'overtime': change2(); break;
	  case 'deduction': sum_free_amount_f();sum_compensation_amount(); break;
	  case 'income': sum_free_amount_f();sum_compensation_amount(); break;
	  case 'benefit': do_sum(); break;
	  case 'raise': change2(); break;
    } 
  }
}
function checkall_checkboxes_transaction(is_checked,form) {
	var formlength=Number(form.length);
	if(is_checked) { 
	  for(var i=0;i<=formlength-1;i++) { 
		 if(form.elements[i].type=='checkbox' && form.elements[i].name.indexOf("checkbox",0)!=-1 && form.elements[i].disabled==false)
		     form.elements[i].checked=true;
	  }
	} else { 
	  for(var i=0;i<=formlength-1;i++) { 
		 if(form.elements[i].type=='checkbox'  && form.elements[i].name.indexOf("checkbox",0)!=-1 && form.elements[i].disabled==false)
		     form.elements[i].checked=false;
	  }
	}
}
function go_selected_code(system_code,code) {

switch (code) {
	
case '142':
 if (typeof document.form.training_request_type!="undefined")
 {
		  document.form.training_request_type.value=system_code;
 }break;
case '137':
 if (typeof document.form.goverment_cat!="undefined")
 {
		  document.form.goverment_cat.value=system_code;
 }
		  break;
case '21':
 if (typeof document.form.position!="undefined")
 {
		  document.form.position.value=system_code;
 }
		  break;
case '45':
		 if (typeof document.form.Project!="undefined")
		 {
			document.form.Project.value=system_code;
		 }else if(typeof document.form.project_id!="undefined")
		 {
			 document.form.project_id.value=system_code;
		 }
		  
		   break;
case '44':
		  document.form.classification.value=system_code;
		   break;
case '43':
		 if (typeof document.form.degree2!="undefined")
		{
		document.form.degree2.value=system_code;	
		}else if (typeof document.form.degree!="undefined")
	  	{
		  document.form.degree.value=system_code;
		}
		break; 
case '46':
		  document.form.FDimension.value=system_code;
		  if(typeof document.form.do_not_clear =="undefined")
		  clear_employee();
		   break;
case '47':
		  document.form.SDimension.value=system_code;
		  if (typeof document.form.employee_code!="undefined" && typeof document.form.do_not_clear =="undefined")
		   clear_employee();
		   break;
case '70':
		if (typeof document.form.site!="undefined")
		{
		  document.form.site.value=system_code;
		if (typeof document.form.employee_code!="undefined" && typeof document.form.do_not_clear =="undefined")
		  clear_employee();
		}else if (typeof document.form.site_filter!="undefined")
		{
		  document.form.site_filter.value=system_code;
		}
		   break;
case '41':
		if (typeof document.form.department!="undefined")
		{
		  	document.form.department.value=system_code;
			if (typeof document.form.section!="undefined" ) selectagain_section();
			if (typeof document.form.division!="undefined" ) selectagain_division();
			if (typeof document.form.employee_code!="undefined" && typeof document.form.do_not_clear =="undefined")
			clear_employee(); 
		}else if (typeof document.form.department_filter!="undefined"){
				document.form.department_filter.value=system_code;
				selectagain();
		}
			 break;
case '42':
if (typeof document.form.section!="undefined")
		{
			document.form.section.value=system_code;
			if (typeof document.form.employee_code!="undefined" && typeof document.form.do_not_clear =="undefined")
			clear_employee(); 
			if (typeof document.form.division!="undefined")
			selectagain_division();
		}else if (typeof document.form.section_filter!="undefined"){
				document.form.section_filter.value=system_code;
				selectagain1();
		}
			 break;
case '71':
if (typeof document.form.division!="undefined")
		{
			document.form.division.value=system_code;
			selectagain_unit(); 
			if (typeof document.form.employee_code!="undefined" && typeof document.form.do_not_clear =="undefined")
			clear_employee();
		}else if (typeof document.form.division_filter!="undefined"){
			document.form.division_filter.value=system_code;
			selectagain2(); 
		}
			 break;
			 
case '72':
if (typeof document.form.units!="undefined")
		{
			document.form.units.value=system_code;
	if (typeof document.form.sub_section!="undefined")
			selectagain_sub_section();
			if (typeof document.form.employee_code!="undefined" && typeof document.form.do_not_clear =="undefined")
			clear_employee();
			
		}else  if (typeof document.form.units_filter!="undefined"){
			document.form.units_filter.value=system_code;
		}
			 break;
case '73':
			document.form.birth_place.value=system_code;
 			break;	
case '22':
			document.form.relegion.value=system_code;
			 break;
case '23':
			document.form.nationality.value=system_code;
			 break;
case '65':															
			document.form.medical_status.value=system_code;
			 break;
case '53':																
if (typeof document.form.skill_type!="undefined")							
{
			document.form.skill_type.value=system_code;
}else if (typeof document.form.skill_filter!="undefined")
{
	document.form.skill_filter.value=system_code;
}else if (typeof document.form.skills_filter!="undefined")
{
	document.form.skills_filter.value=system_code;
}
			break;
case '54': 															
			document.form.school.value=system_code;
			break;
case '55': 															
			document.form.major.value=system_code;
			break;
case '87': 															
			document.form.contract_type.value=system_code;
			break;
case '136': 															
			document.form.action_plan.value=system_code;
			break;
			
case '56': 																	
			if (typeof document.form.edu_degree!="undefined")
			{	
			document.form.edu_degree.value=system_code;				
			}else 	if (typeof document.form.degree!="undefined"){
			document.form.degree.value=system_code;
			}
			break;
case '61': 				
			if (typeof document.form.course_attended!="undefined")
			{																
			document.form.course_attended.value=system_code;
			}else if (typeof document.form.course!="undefined")
			{
	
			document.form.course.value=system_code;

			if(document.form.course.value=='')
			{
				alert(my_dictinary[9319]);
				document.form.course.value=-1;
			}
			
			if (typeof document.form.change_train!="undefined")
			change_train(this.value);
			
			}else if (typeof document.form.course_filter!="undefined")
			{
	
			document.form.course_filter.value=system_code;

			if(document.form.course_filter.value=='')
			{
				alert(my_dictinary[9319]);
				document.form.course_filter.value=-1;
			}
			
			if (typeof document.form.change_train!="undefined")
			change_train(this.value);
			
			}
			
			break;
case '80': 															
			document.form.assets_code.value=system_code;
			break;
case '52': 															
			if (typeof document.form.type!="undefined")
			{						
			document.form.type.value=system_code;
			}else if(typeof document.form.document_type!="undefined")
			{
				document.form.document_type.value=system_code;
			}
			break;
case '13': 															
			document.form.bank_code.value=system_code;
			selectagain();
			break;
case '14': 															
			document.form.bank_branch.value=system_code;
			break;
case '33': 															
			document.form.leave_type.value=system_code;
			break;
case '69': 															
			document.form.trans_filter.value=system_code;
			return go_trans(document.form.trans_filter.value);
			break;
case '60': 															
			document.form.interview_template.value=system_code;
			break;
case '68':
			document.form.evaluation_type.value=system_code;		
			break;
case '64':
if (typeof document.form.cost_serial!="undefined")
{																
		document.form.cost_serial.value=system_code;
}																
			break;
case '75':
if (typeof document.form.certificate!="undefined")
{																
		document.form.certificate.value=system_code;
}
			
else if (typeof document.form.certificate_id!="undefined")
{																
		document.form.certificate_id.value=system_code;
}																
			break;

case '77':
if (typeof document.form.scholarship_source!="undefined")
{																
		document.form.scholarship_source.value=system_code;
}																
			break;
case '57':
			if (typeof document.form.course_type!="undefined")
			{																
					document.form.course_type.value=system_code;
					if (typeof document.form.course!="undefined")
					selectagain_cousre();
			}																
						break;
case '12':
			if (typeof document.form.saving_code!="undefined")
			{																
					document.form.saving_code.value=system_code;
			}																
						break;
case '11':
			if (typeof document.form.insurance_code!="undefined")
			{																
					document.form.insurance_code.value=system_code;
			}																
						break;
case '82':
			if (typeof document.form.penalty_id!="undefined")
			{																
					document.form.penalty_id.value=system_code;
			}																
						break;
						
case '96':
			if (typeof document.form.program_code!="undefined")
			{																
					document.form.program_code.value=system_code;
			}																
						break;
case '97':
			if (typeof document.form.level_code!="undefined")
			{																
					document.form.level_code.value=system_code;
			}																
						break;
case '84':
			if (typeof document.form.job_family!="undefined")
			{																
					document.form.job_family.value=system_code;
			}																
						break;
case '99':
			if (typeof document.form.host_code!="undefined")
			{																
					document.form.host_code.value=system_code;
			}																
						break;						
case '104':																
			
			if (typeof document.form.skill_class_type!="undefined")							
			{
						document.form.skill_class_type.value=system_code;
			}else if (typeof document.form.skill_class_filter!="undefined")
			{
				document.form.skill_class_filter.value=system_code;
				selectagain_skill();
			}else if(typeof document.form.skill_type_filter!="undefined")
			{
				document.form.skill_type_filter.value=system_code;
				selectagain_skill_code();
			}
			break;
case '225':																
			if(typeof document.form.check_out_reason!="undefined")
			{
			document.form.check_out_reason.value=system_code;
			}
			else if(typeof document.form.check_out_reason_new!="undefined")
			{
			document.form.check_out_reason_new.value=system_code;
			}
			break;		
			
case '98':
			if (typeof document.form.transaction_internal_type!="undefined")
			{																
					document.form.transaction_internal_type.value=system_code;
			}																
						break;
						
case '106': 
		if (typeof document.form.trainee_type!="undefined")
					{																
							document.form.trainee_type.value=system_code;
					}																
								break;

case '107': 
		if (typeof document.form.sponser_type!="undefined")
					{																
							document.form.sponser_type.value=system_code;
					}																
								break;
								
case '67': 
				if(typeof document.form.termination_reason!="undefined")
				{
				document.form.termination_reason.value=system_code;	
				}
				break;
				
case '88': 
				if(typeof document.form.agenda_type!="undefined")
				{
				document.form.agenda_type.value=system_code;	
				}
				break;
case '89': 
				if(typeof document.form.agenda_condition!="undefined")
				{
				document.form.agenda_condition.value=system_code;	
				}
				break;
				
case '114': 
				if(typeof document.form.certificate_type_code!="undefined")
				{
				document.form.certificate_type_code.value=system_code;
				selectagain_certificate();
				}
				break;



case '117': 
if(typeof document.form.ticket_route!="undefined")
{

$("[name=ticket_route],#ticket_route").val(system_code);

}
break;
case '118': 
				if(typeof document.form.ticket_agent!="undefined")
				{
				$("[name=ticket_agent],#ticket_agent").val(system_code);
				}
				break;

case '120': 
				if(typeof document.form.ticket_airline!="undefined")
				{
				$("[name=ticket_airline],#ticket_airline").val(system_code);
				}
				break;

case '121': 
				if(typeof document.form.emp_rotation_type!="undefined")
				{
				$("[name=emp_rotation_type],#emp_rotation_type").val(system_code);
				}
				break;
				
case '122': 
				if(typeof document.form.potentials!="undefined")
				{
				$("[name=potentials],#potentials").val(system_code);
				}
				break;
case '123': 
				if(typeof document.form.sub_section!="undefined")
				{
				document.form.sub_section.value=system_code;
				selectagain_sub_division();
				}
				break;
case '124': 
				if(typeof document.form.sub_division!="undefined")
				{
				document.form.sub_division.value=system_code;
				selectagain_sub_unit();
				}
				break;
case '125': 
				if(typeof document.form.sub_unit!="undefined")
				{
				document.form.sub_unit.value=system_code;
				selectagain_office();
				}
				break;
case '126': 
				if(typeof document.form.office!="undefined")
				{
				document.form.office.value=system_code;
				selectagain_team();
				}
				break;
case '127': 
				if(typeof document.form.team!="undefined")
				{
				document.form.team.value=system_code;
				}
				break;
case '128': 
				if(typeof document.form.skill_classification_filter!="undefined")
				{
				document.form.skill_classification_filter.value=system_code;
				selectagain_skill_type();
				}
				break;
				
case '115': 
				if(typeof document.form.trip_expense_code!="undefined")
				{
				$("[name=trip_expense_code],#trip_expense_code").val(system_code);
				}
				break;
				
case '131': 
				if (typeof document.form.applicant_source!="undefined")
				{
				document.form.applicant_source.value=system_code;	
				}
				break;
case '134': 
				if(typeof document.form.feedback_type!="undefined")
				{
				document.form.feedback_type.value=system_code;
				}
				break;
case '135': 
				if(typeof document.form.termination_reason!="undefined")
				{
				document.form.termination_reason.value=system_code;
				}
				break;
case '147': 															
			document.form.faculty.value=system_code; //faculty
			break;
			case '148':
			if(typeof document.form.certificate_rate_code!="undefined"){
				document.form.certificate_rate_code.value=system_code;
				}
			break;
case '149': 	
			if(typeof document.form.certificate_cat_code!="undefined"){
				document.form.certificate_cat_code.value=system_code;
				}
			break;
case '94': 
				if(typeof document.form.STB_code!="undefined")
				{
				document.form.STB_code.value = system_code;
				}
				break;	
				
case '222': 
				if(typeof document.form.overtime_expenses!="undefined")
				{
				document.form.overtime_expenses.value = system_code;
				}
				break;	

				
}
if(typeof document.form.feedback_report!="undefined" && code!='134')
check_hide(system_code);


}
function search_ext_code(form,code) {
	var loan_type=''
	var setup=0;
	if(code=='37' && typeof document.form.feedback_report!="undefined")
	 loan_type=form.page_type.value;
	 
	 if(code=='-1' || code=='-2')
	 setup=1
if(setup){
if(code=='-1')
  window.open("../../lib/country_search.php?setup="+setup,"PAY_CODE_TABLE","width=400,height=500,scrollbars=no");
if(code=='-2')
  window.open("../../lib/city_search.php?setup="+setup,"PAY_CODE_TABLE","width=400,height=500,scrollbars=no");

}
else

major_code=section_code=division_code=division_code=-99;

 window.open("../../lib/code_table_search.php?code="+code+"&loan_type="+loan_type+"&major_code="+major_code+"&section_code="+section_code+"&division_code="+division_code,"PAY_CODE_TABLE","width=500,height=600,scrollbars=no");
} 
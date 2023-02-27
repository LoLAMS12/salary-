var inputChangeBeforeSave=0;
var formSaveDisabled=0;
var chain = ['department','section','division','units','sub_section','sub_division','sub_unit','office','team'];
// added by Ahmad Qasem to ensure that the document loaded 
$(document).ready(function(e) {

	 site_host_path=parent.$('#site_host_path_input').val();
	 system_language=parent.$('#system_language_input').val();
	 system_company=parent.$('#system_company_input').val();
	 system_branch=parent.$('#system_branch_input').val();
	 is_system_name=parent.$('#system_name_input').val();
	 is_system_name_ta=parent.$('#is_system_name_ta').val();
	 is_system_freemium=parent.$('#is_system_freemium').val();
	 system_name=parent.$('#system_name').val();
	 is_lite=parent.$('#lite_input').val();
	 HRMS_localDate=parent.$('#HRMS_localDate').val();
	 setup_use_hijri_dates_admin=parent.$('#setup_use_hijri_dates_admin').val(); 
	  
	 shared_path   = site_host_path +'DB/Include/Shared/';
	 element = document.createElement("input");
	 base_url = site_host_path+system_name;
     $('input').attr('autocomplete','off');
	  $('form').attr('novalidate','novalidate'); // this attribute was added to stop IE10 from autovalidating some input fields
   	 //anti_firebug(site_host_path);
	// added by A.qasem 13052015 for codeignitor Pagination / new
	$('input.newRecord:first').focus();		
	$('td.pagingationContainer a').click(function(e) {
	    parent.Show_LoadingBox();
	});
	if(is_system_name == 'is_MenaME'){
		$('.custom-collapse-btn').click(function(e){
	    	e.preventDefault();
	    	e.stopPropagation();
	        $('.custom-collapse').slideToggle(function(){
	            if ($(".custom-collapse").is(":visible")){
	                $(".custom-collapse-btn img").addClass('flip')
	            } else {
	                $(".custom-collapse-btn img").removeClass('flip')
	            }
	        });
	    });

	    $(document).on('change','.custom-file-input',function(e){
			//get the file name
			if(e.target.files[0]){
				var fileName = e.target.files[0].name;
				//replace the "Choose a file" label
				$(this).next('.custom-file-label').html(fileName);
			}
	    })

	}
    
});



$(window).ready(function(){
		//check for any inputChangeBeforeSave value
		        $(".TabsTableTag .ActiveMenuLink").click(function (){
            //$('#Main_menu').trigger('mouseleave');
            //parent.$('.sub_menu_box').css({'display':'none'});
          Show_LoadingBox();
        });
		 checkForChangeBeforeExit();

});
	
	 // RULE: valid_date
	function dateValidation(inputVal) {
		if($.trim(inputVal) == '') {
			return true;
		}
		
		var validCharacters = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
		
		if(!validCharacters.test(inputVal)) {
			return false;
		} else {
			var validDateFormat = /^([0-9]{2})[\/|-]([0-9]{2})[\/|-]([0-9]{4})$/;
			if(!validDateFormat.test(inputVal)) {
				return false;
			}
			return true;
		}
	}
	
	// RULE: valid_hijri_date
	function hijriDateValidation(inputVal) {
		if($.trim(inputVal) == '') {
			return true;
		}
		
		var validCharacters = /^([1-9]|(0|1|2)[0-9]|30)[\.\-\/]([1-9]|1[0-2]|0[1-9])[\.\-\/](1[3|4][0-9]{2})$/
		var day=Number(inputVal.substring(0,2));
		var month=Number(inputVal.substring(3,5));
		if(day==30 && month==2) return false;
		if(!validCharacters.test(inputVal)) {
			return false;
		} else {
			return true;
		}
	}

	function compare_from_to_months(start_date,end_date) {
	var year1;
	var month1;
	var day1;
	var year2;
	var month2;
	var day2;
 
    year1 = start_date.substr(6,4);	
    month1 = start_date.substr(3,2); if (month1.substr(0,1)=="0") month1= month1.substr(1,1);
    day1 = '01'; if (day1.substr(0,1)=="0") day1= day1.substr(1,1);
	var start_dateO = new Date(parseInt(year1),parseInt(month1)-1,parseInt(day1));

    year2 = end_date.substr(6,4);	
    month2 = end_date.substr(3,2); if (month2.substr(0,1)=="0") month2= month2.substr(1,1);
    day2 = end_date.substr(0,2); if (day2.substr(0,1)=="0") day2= day2.substr(1,1);
	var end_dateO = new Date(parseInt(year2),parseInt(month2)-1,parseInt(day2));

	var start_dateV = start_dateO.valueOf(); 
	var end_dateV = end_dateO.valueOf(); 


	if (end_dateV < start_dateV) 
	  return false; 
	else
	  return true;   
   }
   
function detectKey(obj) 
{ 
	//if($('body').hasClass("searchPopupBody") || $('body').hasClass("popupPagesBody")) {return true;}
	var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);

	
	if(typeof(is_lite)=="undefined" || is_lite == null )
	{
		is_lite=0;
	}


	//alert(typeof document.form.disable_detectKey)
//if( typeof document.form=='undefined' || typeof document.form.disable_detectKey !="undefined"){return false;}
	
	if(typeof jQuery != "undefined"){
	    the_event = isIE ? event : obj;
	}else{
		the_event = event;
	}
    k = the_event.keyCode;

    if (the_event.ctrlKey && $('[name=submit_login_validation],#submit_login_validation').length == 0)
	{
    	var path=location.href.replace(/(.+\w\/)(.+)/,"/$2");
     	 if (path=='/print_report') {
     		 return false;
     	 }

	   if(k=='90' && is_system_name!='is_MenaME'){ // Z
		   if(typeof document.form.Condition !="undefined"){
		   var str=document.form.Condition.value;
		   str=str.substr(0,str.length-2);
		   document.form.Condition.value=str;
		   }
		   
	   }
	   if(k=='83' && is_system_name!='is_MenaME') // S
	   {
		
		if (is_system_name_ta!='is_Ta' && is_system_freemium != 1) {
			if(isIE){
				 try{top.menu.save.click();} catch(e){}
			}else{
			 	$(top.menu.document).find('img[name=save]').parent(0).click();
			}
		}
		else
			save_ext(document.form);

		  return false;
	   }
	   else if(k=='68' && is_system_name!='is_MenaME') // D
	   {
		if(isIE){
			 try{top.menu.delete1.click();} catch(e){}
		}else{
		 	$(top.menu.document).find('img[name=delete1]').parent(0).click();
		}
		 return false;
	   }
     else if(k=='78' && is_system_name!='is_MenaME') // N
	   {
		if(isIE){
			 try{top.menu.new1.click();} catch(e){}
		}else{
		 	$(top.menu.document).find('img[name=new1]').parent(0).click();
		}

		 return false;
	   } 
	else if(k=='65' && is_system_name!='is_MenaME') // A
	   {
		   if(($('body').attr('class') =='popupPagesBody'	|| parent.$('body').attr('class') =='popupPagesBody')
				|| ($('body').attr('class') =='searchPopupBody'	|| parent.$('body').attr('class') =='searchPopupBody'))
			return false;	
				
		if(isIE){
			 try{top.menu.search1.click();} catch(e){}
		}else{
		 	$(top.menu.document).find('img[name=search1]').parent(0).click();
		}

		 return false;
	  } 
	}
	
	else if(k=='121' && $('[name=submit_login_validation],#submit_login_validation').length == 0 && is_system_name!='is_MenaME' && is_system_name!='is_Mena360' && is_system_name_ta!='is_Ta')
	  { // Y
		
       show_fast_inquiry();		
  	   return false;
     } 
 	  else if(is_lite==0 && k=='120' && $('[name=submit_login_validation],#submit_login_validation').length == 0 && is_system_name!='is_MenaME' && is_system_name!='is_Mena360' && is_system_name_ta!='is_Ta')
	  { // X
       show_employee_cost();		
  	   return false;
	   } 
	   
	   else if(is_lite==0 && k=='119' && is_system_name!='is_Mena360' && is_system_name_ta!='is_Ta')
	   {// w
		 show_org_chart();
	   }
	   else if(is_lite==0 && k=='118' && is_system_name!='is_MenaME' && is_system_name!='is_Mena360' && is_system_name_ta!='is_Ta')
	   {// v
		 show_emp_calendar();
	   }
	 else if(k=='13'){// enter
		
	   if($('[name='+'submit_login_validation'+'],#'+'submit_login_validation').length){
		   CheckLoginForm(document.form);
		   }
		
	 }
	 else if(k=='113' && is_system_name!='is_MenaME') {// q
		 	window.open($('#helpPageCat').val());	
	 }
	
	logoff();
}

document.onkeydown = detectKey;
function Trim(STRING){
return $.trim(STRING);
}


function logoff()
{
	return true; 	
}

function include_dictionary(site_host_path,system_language,system_company,system_branch,is_system_name){
		var shared_path   = site_host_path +'DB/Include/Shared/';
	document.write('<script src="' +shared_path + 'dictionary.php?system_language='+system_language+'&system_company='+system_company+'&system_branch='+system_branch+'&is_system_name='+is_system_name+'"></script>');
   }

function exit_frame(){
    document.documentElement.style.display = 'none' ; 
   if( self == top ) {
        document.documentElement.style.display = 'block' ; 
    } else {
        top.location = self.location ; 
    }
}
function submitForm(form){
     form.submit();
}
function anti_firebug(site_host_path){
if(window.console && (typeof window.console.firebug!='undefined' || typeof window.console.exception!='undefined' )){
parent.document.location.href=site_host_path+'DB/ErrorMsgs/firebug_enabled.php';
}

}
function add(name,type) {

		var forms=document.getElementsByTagName('form');
		if(type==null) type='hidden'
			for(var i in forms){
			if(typeof forms[i].name=='undefined') continue;
			
				var element = document.createElement("input");
					element.setAttribute("type", type);
					element.setAttribute("name", name);
					element.setAttribute("id", name);
					if(typeof forms[i].appendChild!='undefined')
					forms[i].appendChild(element);
					
			}
	}


function hierarchy_selectagain(obj,index)
{

if(typeof obj.id!='undefined' )
{
	objName=obj.name;
	matched = obj.id.match(/([a-zA-Z_]*)_\d/);
}
else
{
	objName=obj.attr('name');
	if(typeof obj.attr('id') !== typeof undefined && obj.attr('id') !== false)
	matched = obj.attr('id').match(/([a-zA-Z_]*)_\d/);
	else
	matched =null;
}

if(matched == null ) return false;


var current_chain = matched[1];


if($.inArray(current_chain , chain)==-1) return false;

starting_index = $.inArray(current_chain , chain);
	for(var i = starting_index ; i < chain.length ; i++){
		obj_name = chain[i];
		next_obj_name = chain[i+1];
		if(get_by_id('position_'+index)) selectagain_position_dep(index);
		if(!get_by_id(next_obj_name+'_'+index)){return false;}
		
			if(obj.name==get_by_id(obj_name+'_'+index).name || (typeof (obj.name) == 'undefined' && obj.attr('name')==$("#"+obj_name+'_'+index).attr('name')))
			{
				empty_drops(next_obj_name ,index);
					obj_name = chain[i];
					next_obj_name = chain[i+1];
				if(obj.value > 0) 
				{
					h_arr = get_chain_arr(obj_name,index);
						obj_name = chain[i];
						next_obj_name = chain[i+1];
					for(var j in h_arr)
					{ 
						var option1= new Option(h_arr[j]['system_desp'],h_arr[j]['system_code']);
						
						get_by_id(next_obj_name+'_'+index).options.add(option1);
					}
					$(get_by_id(next_obj_name+'_'+index)).trigger('change');
				    
					
				}


			}
	}
}


function get_chain_arr(last_chain , index){
		endding_index = $.inArray(last_chain , chain);
		var tmp_arr = null;
		
		for(var i = 0 ; i < endding_index + 1; i++){
			obj_name = chain[i];
			next_obj_name = chain[i+1];
			
			if(tmp_arr == null){
				if(	!get_by_id(obj_name+'_'+index) 	|| get_by_id(obj_name+'_'+index).value<=0 ) break ;
				tmp_arr = hierarchy_array[get_by_id(obj_name+'_'+index).value][next_obj_name];	
			}else{ 
			
			if(	!get_by_id(obj_name+'_'+index) 	|| get_by_id(obj_name+'_'+index).value<=0 ) break ;
				tmp_arr = tmp_arr[get_by_id(obj_name+'_'+index).value][next_obj_name];	
			}
		}
		return  tmp_arr;
}

function empty_drops(first_chain , index){

		starting_index = $.inArray(first_chain , chain);
		for(var i = starting_index ; i < chain.length ; i++){
			obj_name = chain[i];
			if(get_by_id(obj_name+'_'+index)) 
				if(get_by_id(obj_name+'_'+index).options.length>0 && ( get_by_id(obj_name+'_'+index).options[0].value<=0)  )
					get_by_id(obj_name+'_'+index).options.length=1;
				else get_by_id(obj_name+'_'+index).options.length=0;
		}
}




function get_by_id(name){
	if($('#'+name).length)
		return document.getElementById(name);
	else if (document.getElementById(name) != null)
		if (document.getElementById(name).length)
			return document.getElementById(name);
	else
		return 0;
}	
function search_hierarchy(clicker_id,clicker_index,code,major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code,team_code,is_nother_branch,source_type,types_txt,is_Related_BT_types,ExtraParameters)
{

  	source_type = typeof source_type!== 'undefined' ? source_type : 0;
  	types_txt = typeof types_txt !== 'undefined' ? types_txt : '';
  	is_Related_BT_types = typeof is_Related_BT_types !== 'undefined' ? is_Related_BT_types : 0;
  	is_nother_branch = typeof is_nother_branch !== 'undefined' ? is_nother_branch : -99;

  	ExtraParameters = typeof ExtraParameters !== 'undefined' ? ExtraParameters : '';
  	var IncludeTAStyle = 0;
  	
	major=-99;
	section=-99;
	division=-99;
	unit=-99;
	sub_section=-99;
	sub_division=-99;
	sub_unit=-99;
	office=-99;
	team=-99;

    if(major_code		!=null   	&& major_code   		!= -100)major=major_code.value;
	if(section_code		!=null 		&& section_code 		!= -100)section=section_code.value;
	if(division_code	!=null		&& division_code    	!= -100)division=division_code.value;
	if(unit_code		!=null		&& unit_code   			!= -100)unit=unit_code.value;
	if(sub_section_code !=null		&& sub_section_code   	!= -100)sub_section=sub_section_code.value;
	if(sub_division_code!=null		&& sub_division_code   	!= -100)sub_division=sub_division_code.value;
	if(sub_unit_code	!=null		&& sub_unit_code   		!= -100)sub_unit=sub_unit_code.value;
	if(office_code		!=null		&& office_code   		!= -100)office=office_code.value;
	if(team_code		!=null		&& team_code   			!= -100)team=team_code.value;
	
    if(major_code==null)skip_next_one=1;
	if(section_code==null)skip_next_one=1;
	if(division_code==null)skip_next_one=1;
	if(unit_code==null)skip_next_one=1;
	if(sub_section_code==null)skip_next_one=1;
	if(sub_division_code==null)skip_next_one=1;
	if(sub_unit_code==null)skip_next_one=1;
	if(office_code==null)skip_next_one=1;
	if(team_code==null)skip_next_one=1;
	skip_next_one=0;

    if(major_code 			== -100)			major			='';
    if(section_code 		== -100)			section 		='';
    if(division_code 		== -100)			division		='';
    if(unit_code 			== -100)			unit			='';
    if(sub_section_code  	== -100)			sub_section 	='';
    if(sub_division_code 	== -100)			sub_division	='';
    if(sub_unit_code 		== -100)			sub_unit		='';
    if(office_code 			== -100)			office			='';
    if(team_code 			== -100)			team			='';


	// if(major		==-1)			major=-99;
	// if(section		==-1)			section=-99;
	// if(division		==-1)			division=-99;
	// if(unit			==-1)			unit=-99;
	// if(sub_section	==-1)			sub_section=-99;
	// if(sub_division ==-1)			sub_division=-99;
	// if(sub_unit		==-1)			sub_unit=-99;
	// if(office		==-1)			office=-99;
	// if(team			==-1)			team=-99;
	
	//////////////////////////////////fill activity and job_card //////////////////////////
	// get the index of project || activity || jod_card
	if($('#main_project_list_1').val()!=undefined){
		if(code == 162 && $('#main_project_list_1').val()!=undefined)
			major=$('#main_project_list_1').val();

		if(code == 163 && $('#main_activity_list_1').val()!=undefined){
			major=$('#main_project_list_1').val();
			section=$('#main_activity_list_1').val();
		}
	}else if(code == 162 || code == 163 || code == 45){
		id = clicker_id.split('_').slice(-1)[0];
		if(code == 162 && $('#project_code_'+id).val()!=undefined)
			major=$('#project_code_'+id).val();

		if(code == 163 && $('#project_code_'+id).val()!=undefined){
			major=$('#project_code_'+id).val();
			section=$('#activity_code_'+id).val();
		}
		
		if(code == 163 && $('#activity_1').val()!=undefined){
			major=$('#overtime_cost_center_1').val();
			section=$('#activity_1').val();
		}
	}
	if(code == 162 && $('#overtime_cost_center_1').val()!=undefined)
		major=$('#overtime_cost_center_1').val();
		
	if(code == 162 && $('#Project_1').val()!=undefined && $('#overtime_cost_center_1').val() == undefined)//set overtime_cost_center condition for transaction report
		major=$('#Project_1').val();
	if(code == 163 && $('#activity_1').val()!=undefined && $('#overtime_cost_center_1').val() == undefined){ 
		//set overtime_cost_center condition for transaction report
		major=$('#Project_1').val();
		section=$('#activity_1').val();
	}
    if($('#system_name_input').val()=='is_MenaME' ){
		if($('#department_'+clicker_index).val() == -1 && code == 42){
			section=-1;
		}
    }
	//////////////////////////////////fill activity and job_card //////////////////////////	
	positions_related=0;
	if(typeof setup_positions_related!="undefined") 
	   if(setup_positions_related[clicker_index]) 	positions_related=1;
	
	related_to_manager_permisssion=0;
	if($('#related_to_manager_permisssion').val()) 
	   related_to_manager_permisssion=$('#related_to_manager_permisssion').val();
	
	if(is_system_name_ta=='is_Ta')
		IncludeTAStyle = 1;

	if($('#system_name_input').val()=='is_MenaME')
		if(is_nother_branch == '-99')
			window.open(site_host_path+'/'+system_name+"lib/code_table_search.php?code="+code+"&clicker_id="+clicker_id+"&clicker_index="+clicker_index+"&major_code="+major+"&section_code="+section+"&division_code="+division+"&unit_code="+unit+"&sub_section_code="+sub_section+"&sub_division_code="+sub_division+"&sub_unit_code="+sub_unit+"&office_code="+office+"&team_code="+team+"&positions_related="+positions_related+"&skip_next_one="+skip_next_one+"&rel_mang_perm="+related_to_manager_permisssion+"&source_type="+source_type+"&types_txt="+types_txt+"&is_Related_BT_types="+is_Related_BT_types+"&IncludeTAStyle="+IncludeTAStyle +''+ExtraParameters,"code_tabel","width=500,height=600,scrollbars=no");
		else 
			window.open(site_host_path+'/'+system_name+"lib/code_table_search.php?code="+code+"&clicker_id="+clicker_id+"&is_nother_branch2="+is_nother_branch+"&clicker_index="+clicker_index+"&major_code="+major+"&section_code="+section+"&division_code="+division+"&unit_code="+unit+"&sub_section_code="+sub_section+"&sub_division_code="+sub_division+"&sub_unit_code="+sub_unit+"&office_code="+office+"&team_code="+team+"&positions_related="+positions_related+"&skip_next_one="+skip_next_one+"&rel_mang_perm="+related_to_manager_permisssion+"&source_type="+source_type+"&types_txt="+types_txt+"&is_Related_BT_types="+is_Related_BT_types+"&IncludeTAStyle="+IncludeTAStyle +''+ExtraParameters,"code_tabel","width=500,height=600,scrollbars=no");
	else 

		if(checkOpenerExist())
  		{
			window.open(site_host_path+'/'+system_name+"employees/code_table_search.php?opener=1&code="+code+"&clicker_id="+clicker_id+"&is_nother_branch2="+is_nother_branch+"&clicker_index="+clicker_index+"&major_code="+major+"&section_code="+section+"&division_code="+division+"&unit_code="+unit+"&sub_section_code="+sub_section+"&sub_division_code="+sub_division+"&sub_unit_code="+sub_unit+"&office_code="+office+"&team_code="+team+"&positions_related="+positions_related+"&skip_next_one="+skip_next_one+"&IncludeTAStyle="+IncludeTAStyle +''+ExtraParameters,"code_tabel","width=500,height=600,scrollbars=no");
  		}
  		else
		top.Show_MenaBox(site_host_path+'/'+system_name+"employees/code_table_search.php?code="+code+"&clicker_id="+clicker_id+"&is_nother_branch2="+is_nother_branch+"&clicker_index="+clicker_index+"&major_code="+major+"&section_code="+section+"&division_code="+division+"&unit_code="+unit+"&sub_section_code="+sub_section+"&sub_division_code="+sub_division+"&sub_unit_code="+sub_unit+"&office_code="+office+"&team_code="+team+"&positions_related="+positions_related+"&skip_next_one="+skip_next_one+"&IncludeTAStyle="+IncludeTAStyle +''+ExtraParameters,"code_tabel",500,550);

}
function select_hierarchy(clicker_id,index,sys_code,code,major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code)
{
	switch(code){
		case '41': // department
		select_current_hierarchy('department_'+index,index,sys_code,code);
		break;
		case '42': // Section
		if(select_hierarchy('department_'+index,index,major_code,'41',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('section_'+index,index,sys_code,code);
		break;
		case '71': // Division
		if(select_hierarchy('section_'+index,index,section_code,'42',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('division_'+index,index,sys_code,code);
		break;
		case '72': // Unit
		if(select_hierarchy('division_'+index,index,division_code,'71',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('units_'+index,index,sys_code,code);
		break;
		case '123': // Sub Section 
		if(select_hierarchy('units_'+index,index,unit_code,'72',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('sub_section_'+index,index,sys_code,code);
		break;
		case '124': // Sub Division
		if(select_hierarchy('sub_section_'+index,index,sub_section_code,'123',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('sub_division_'+index,index,sys_code,code);
		break;
		case '125': // Sub Unit
		if(select_hierarchy('sub_division_'+index,index,sub_division_code,'124',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('sub_unit_'+index,index,sys_code,code);
		break;
		case '126': // Office
		if(select_hierarchy('sub_unit_'+index,index,sub_unit_code,'125',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('office_'+index,index,sys_code,code);
		break;
		case '127': // Team
		if(select_hierarchy('office_'+index,index,office_code,'126',major_code,section_code,division_code,unit_code,sub_section_code,sub_division_code,sub_unit_code,office_code))
		select_current_hierarchy('team_'+index,index,sys_code,code);
		break;
		default :
		select_current_hierarchy(clicker_id,index,sys_code,code);
	}

	  
	  if(typeof select_hierarchy_default_function!="undefined")select_hierarchy_default_function(clicker_id,index,sys_code,code);
	  return true;
}
function select_current_hierarchy(clicker_id,index,sys_code,code){
	if(!get_by_id(clicker_id)) return;

	var type =  $(get_by_id(clicker_id)).attr('advanceSearch');
	 if(typeof type!="undefined")
	 	{
	 		
	 		 add_ajax_search_pos(sys_code,clicker_id,'1');
	 		 return;
	 	}

	var len=get_by_id(clicker_id).options.length;

	for (var i=0 ; i<len ; i++) 
	{
		if(get_by_id(clicker_id).options[i].value==sys_code)
		  {
		   get_by_id(clicker_id).value=sys_code;
		   break;
	      }
	}

	  
	  $(get_by_id(clicker_id)).trigger('change');
}

function selectagain_position_dep(index)
  {



    if(!setup_positions_related[index]) return;

	get_by_id('position_'+index).options.length=1;
    j=1;
	var department=0,section=0,division=0,unit=0,sub_section=0,sub_division=0,sub_unit=0,office=0,team=0;
	if(get_by_id('department_'+index)) department=get_by_id('department_'+index).value;
	if(get_by_id('section_'+index))section=get_by_id('section_'+index).value;
	if(get_by_id('division_'+index))division=get_by_id('division_'+index).value;
	
	if(get_by_id('units_'+index))unit=get_by_id('units_'+index).value;
	else if(get_by_id('unit_'+index))unit=get_by_id('unit_'+index).value;
	
	if(get_by_id('sub_section_'+index))sub_section=get_by_id('sub_section_'+index).value;
	if(get_by_id('sub_division_'+index))sub_division=get_by_id('sub_division_'+index).value;
	if(get_by_id('sub_unit_'+index))sub_unit=get_by_id('sub_unit_'+index).value;
	if(get_by_id('office_'+index))office=get_by_id('office_'+index).value;
	if(get_by_id('team_'+index))team=get_by_id('team_'+index).value;
  
    if(department==-1)department=0;
	if(section==-1)section=0;
	if(division==-1)division=0;
	if(unit==-1)unit=0;
	if(sub_section==-1)sub_section=0;
	if(sub_division==-1)sub_division=0;
	if(sub_unit==-1)sub_unit=0;
	if(office==-1)office=0;
	if(team==-1)team=0;


	var hirarchy_path = '' + department + '_' + section + '_' + division + '_' + unit + '_' + sub_section + '_' + sub_division +
	                    '_' + sub_unit + '_' + office + '_' + team + ''; 

	if(typeof(array_pos[hirarchy_path]) != 'undefined')
	{	
		for(key in array_pos[hirarchy_path])
		{
			var option0 = new Option(array_pos[hirarchy_path][key], key);
			eval("get_by_id('position_'+index).options[j]=option0");
			get_by_id('position_'+index).options[j].value=key;
			get_by_id('position_'+index).options[j].text=array_pos[hirarchy_path][key];
			get_by_id('position_'+index).options[j].selected;
			j++;
		}
	}
	
	else
	{	
		select_position_last(index);	
	}

	
}

function select_position_last(index)
{
	var pos_id = 0;
	var pos_name = "";
	var hirarchy_path ="";
	
	var department=0,section=0,division=0,unit=0,sub_section=0,sub_division=0,sub_unit=0,office=0,team=0;
	if(get_by_id('department_'+index)) department=get_by_id('department_'+index).value;
	if(get_by_id('section_'+index))section=get_by_id('section_'+index).value;
	if(get_by_id('division_'+index))division=get_by_id('division_'+index).value;
	
	if(get_by_id('units_'+index))unit=get_by_id('units_'+index).value;
	else if(get_by_id('unit_'+index))unit=get_by_id('unit_'+index).value;
	
	if(get_by_id('sub_section_'+index))sub_section=get_by_id('sub_section_'+index).value;
	if(get_by_id('sub_division_'+index))sub_division=get_by_id('sub_division_'+index).value;
	if(get_by_id('sub_unit_'+index))sub_unit=get_by_id('sub_unit_'+index).value;
	if(get_by_id('office_'+index))office=get_by_id('office_'+index).value;
	if(get_by_id('team_'+index))team=get_by_id('team_'+index).value;

    if(department==-1)department=0;
	if(section==-1)section=0;
	if(division==-1)division=0;
	if(unit==-1)unit=0;
	if(sub_section==-1)sub_section=0;
	if(sub_division==-1)sub_division=0;
	if(sub_unit==-1)sub_unit=0;
	if(office==-1)office=0;
	if(team==-1)team=0;

	
	
	 var hirarchy_path_team =  department + '_' + section + '_' + division + '_' + unit + '_' + sub_section + '_' + sub_division +
	                              '_' + sub_unit + '_' + office + '_0' ; 
	var hirarchy_path_office =  department + '_' + section + '_' + division + '_' + unit + '_' + sub_section + '_' + sub_division +
	                              '_' + sub_unit + '_0_0' ; 
	var hirarchy_path_sub_un = 	department + '_' + section + '_' + division + '_' + unit + '_' + sub_section + '_' + sub_division  + '_0_0_0' ; 
	var hirarchy_path_sub_div = department + '_' + section + '_' + division + '_' + unit + '_' + sub_section + '_0_0_0_0' ; 
	var hirarchy_path_sub_sec =department + '_' + section + '_' + division + '_' + unit + '_0_0_0_0_0' ; 
	var hirarchy_path_unit 	  =  department + '_' + section + '_' + division+ '_0_0_0_0_0_0' ; 
	var hirarchy_path_div 	  = department + '_' + section  + '_0_0_0_0_0_0_0' ; 
	var hirarchy_path_section = department + '_0_0_0_0_0_0_0_0' ;
	
	


     if(typeof(array_pos[hirarchy_path_section]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_section;
	 }
	 if(typeof(array_pos[hirarchy_path_div]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_div;
	 }
	 if(typeof(array_pos[hirarchy_path_unit]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_unit;
	 }
	if(typeof(array_pos[hirarchy_path_sub_sec]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_sub_sec;
	 }
	 if(typeof(array_pos[hirarchy_path_sub_div]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_sub_div;
	 }
	 if(typeof(array_pos[hirarchy_path_sub_un]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_sub_un;
	 }
	 if(typeof(array_pos[hirarchy_path_office]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_office;
	 }
	 if(typeof(array_pos[hirarchy_path_team]) != 'undefined')
	 {
		hirarchy_path = hirarchy_path_team;
	 }
	

	var hirarchy_array = new Array();
	if(typeof(array_pos[hirarchy_path]) != 'undefined')
	{	
		for(key in array_pos[hirarchy_path])
		{
			var option0 = new Option(array_pos[hirarchy_path][key], key);
			eval("get_by_id('position_'+index).options[j]=option0");
			get_by_id('position_'+index).options[j].value=key;
			get_by_id('position_'+index).options[j].text=array_pos[hirarchy_path][key];
			get_by_id('position_'+index).options[j].selected;
			j++;
		}
	}
	
}



function unserialize(data){ 
    
    var error = function (type, msg, filename, line){throw new window[type](msg, filename, line);};
    var read_until = function (data, offset, stopchr){
        var buf = [];
        var chr = data.slice(offset, offset + 1);
        var i = 2;
        while (chr != stopchr) {
            if ((i+offset) > data.length) {
                error('Error', 'Invalid');
            }
            buf.push(chr);
            chr = data.slice(offset + (i - 1),offset + i);
            i += 1;
        }
        return [buf.length, buf.join('')];
    };
    var read_chrs = function (data, offset, length){
        var buf;
        
        buf = [];
        for(var i = 0;i < length;i++){
            var chr = data.slice(offset + (i - 1),offset + i);
            buf.push(chr);
        }
        return [buf.length, buf.join('')];
    };
    var _unserialize = function (data, offset){
        var readdata;
        var readData;
        var chrs = 0;
        var ccount;
        var stringlength;
        var keyandchrs;
        var keys;
 
        if(!offset) offset = 0;
        var dtype = (data.slice(offset, offset + 1)).toLowerCase();
        
        var dataoffset = offset + 2;
        var typeconvert = new Function('x', 'return x');
        
        switch(dtype){
            case "i":
                typeconvert = new Function('x', 'return parseInt(x)');
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case "b":
                typeconvert = new Function('x', 'return (parseInt(x) == 1)');
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case "d":
                typeconvert = new Function('x', 'return parseFloat(x)');
                readData = read_until(data, dataoffset, ';');
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 1;
            break;
            case "n":
                readdata = null;
            break;
            case "s":
                ccount = read_until(data, dataoffset, ':');
                chrs = ccount[0];
                stringlength = ccount[1];
                dataoffset += chrs + 2;
                

                readData = read_chrs(data, dataoffset+1, parseInt(stringlength));
                chrs = readData[0];
                readdata = readData[1];
                dataoffset += chrs + 2;
                if(chrs != parseInt(stringlength) && chrs != readdata.length){
                    error('SyntaxError', 'String length mismatch');
                }
            break;
            case "a":
                readdata = {};
                
                keyandchrs = read_until(data, dataoffset, ':');
                chrs = keyandchrs[0];
                keys = keyandchrs[1];
                dataoffset += chrs + 2;
                
                for(var i = 0;i < parseInt(keys);i++){
                    var kprops = _unserialize(data, dataoffset);
                    var kchrs = kprops[1];
                    var key = kprops[2];
                    dataoffset += kchrs;
                    
                    var vprops = _unserialize(data, dataoffset);
                    var vchrs = vprops[1];
                    var value = vprops[2];
                    dataoffset += vchrs;
                    
                    readdata[key] = value;
                }
                
                dataoffset += 1;
            break;
            default:
    			if(data.substr(offset-1, 1)=="i")
    					{
    						 typeconvert = new Function('x', 'return parseInt(x)');
    						readData = read_until(data, dataoffset, ';');
    						chrs = readData[0];
    						readdata = readData[1];
    						dataoffset += chrs + 1;
    						 break;
    					}
                    error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
                break;
            }
        return [dtype, dataoffset - offset, typeconvert(readdata)];
    };
    return _unserialize(data, 0)[2];
}
function pop_employee_search(index,params)
{	
	// alert(index);
	if(typeof params =="undefined")
	var  params = '';


	if(checkOpenerExist())
	window.open(site_host_path+'/'+system_name+"employees/employees_list.php?opener=1&clicker_id="+index+params,"employee","width=800,height=675,scrollbars=no");
	else
	top.Show_MenaBox(site_host_path+'/'+system_name+"employees/employees_list.php?clicker_id="+index+params,'',800,675);
}


function set_searched_user_info(emp_code,emp_name,branch_code,index)
{
	$("#employee_code_"+index).val(emp_code);
	$("#employee_name_"+index).val(emp_name);
	
	$(get_by_id('employee_code_'+index)).trigger('change');
	
	return true;
}
    
function set_time()
{
	$('#timing_s').html(parseInt($('#timing_s').html())+1);
	
	if(parseInt($('#timing_s').html())==60)
	{
	$('#timing_i').html(parseInt($('#timing_i').html())+1);
	$('#timing_s').html('0');
	}

	if(parseInt($('#timing_i').html())==60)
	{
	$('#timing_h').html(parseInt($('#timing_h').html())+1);
	$('#timing_i').html('0');
	}
}

function disable_enter_TA(obj){
	var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
	
	if(typeof jQuery != "undefined"){
	    the_event = isIE ? event : obj;
	}else{
		the_event = event;
	}
    k = the_event.keyCode;
	   if(k=='13') return false;
	   else detectKey(obj);
}

function My_showModalDialog(src,title,width,height,hide_close)
{
	
	width =  parseInt(width)+30;
	height =  parseInt(height)+30;

	//if(dialog_properties== null) dialog_properties='';
	if (is_system_freemium == 1) {
	   parent.freemium_Show_MenaBox(src,title,width,height,hide_close);
    }else{
    	parent.Show_MenaBox(src,title,width,height,hide_close);
    }
}

// this function adds the thousand separator to the givin number
function thousand_separate_js( sValue ){
	var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})');
	while(sRegExp.test(sValue)) {
		sValue = sValue.replace(sRegExp, '$1,$2');
	}
	return sValue;
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

// This function adds one day to a given date
function add_day(date){
	var year = Number(date.substr(6,4));	
	var month = Number(date.substr(3,2)); // if (month.substr(0,1)=="0") month1= month.substr(1,1);
	var day = Number(date.substr(0,2)); //if (day.substr(0,1)=="0") day= day.substr(1,1);

	if (month == 2){
		if ((year % 4) == 0){
			if 	(day == 29){ 	day = 1; month = 3;	}
			else day += 1;
		}
		else{
			if 	(day == 28){ 	day = 1; month = 3;	}
			else day += 1;
		}
	} else if (month == 4 || month == 6 || month == 9 || month == 11){
		if 	(day == 30){ 	day = 1; month += 1;}
		else day += 1;

	} else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
		if 	(day == 31){ 
			day = 1; 
			if (month == 12) {month = 1; year += 1; }
			else month += 1;
		}
		else day += 1;
	}

	if (day < 10) day = "0" + day;

	if (month < 10) month = "0" + month;
	
	var	next_date = day + "/" + month + "/" + year;	

	if (month <= 0 || day <= 0)
		next_date = "";	

	return next_date;
}

// This function adds one year to a given date
function add_year(date){
	
	if (!is_date(date)) // date is invalid
		return "";
	
	var year = Number(date.substr(6,4));	
	var month = Number(date.substr(3,2));
	var day = Number(date.substr(0,2));
	
	var next_year = year + 1;

	if (month == 2){
		if 	(day == 29 || day == 28) day = 27;
		else if (day == 1) { day = 31; month = 1;}
		else day -= 1;
	} else {
		if 	(day == 1){
			day = 31; 
			if (month == 5 || month == 7  || month == 10 || month == 12){
				day = 30; 
			}
			else if (month == 3){
				if (next_year % 4 == 0)	day = 29; else day = 28;
			}
			
			if (month == 1){ month = 12; next_year = year; }
			else month -= 1;
		}
		else day -= 1;

	}
		
	if (day < 10) day = "0" + day;

	if (month < 10) month = "0" + month;
	var	next_date = day + "/" + month + "/" + next_year;	
	return next_date;
}

//this function to add n times year to the date
function add_years(date,times)
{
	for(var i=1;i<=times;i++)
		{
		date=add_year(date);
		}
	    return date;
}

// this function check if the givin string is in date format
function is_date(date){
	var year = Number(date.substr(6,4));	
	var month = Number(date.substr(3,2));
	var day = Number(date.substr(0,2));

	if (isNaN(year) || isNaN(month) || isNaN(day))
		return false;

	if (date.length != 10)
		return false;
	if (month > 12)
		return false;
	if (month == 2 && ((year % 4 == 0 && day > 29) || (year % 4 != 0 && day > 28)))
		return false;
	if (day > 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12))
		return false;
	if (day > 30 && (month == 4 || month == 6 || month == 9 || month == 11))
		return false;
	
	return true;
}


function days_between(start_date,end_date) {

	if(!compare_from_to_dates(start_date, end_date))
		return 0;

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

	// The number of milliseconds in one day
	var ONE_DAY = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	var start_date_ms = start_dateO.getTime();
	var end_date_ms = end_dateO.getTime();

	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(end_date_ms - start_date_ms);

	// Convert back to days and return
	return (Math.round(difference_ms/ONE_DAY) + 1);	
}


	function compare_dates_month(start_date,end_date) {
	var year1;
	var month1;
	var day1;
	var year11;
	var month11;
	var day11;
    year1 = start_date.substr(6,4);	
    month1 = start_date.substr(3,2); if (month1.substr(0,1)=="0") month1= month1.substr(1,1);
    day1 = start_date.substr(0,2); if (day1.substr(0,1)=="0") day1= day1.substr(1,1);
	var start_dateO = new Date(parseInt(year1),parseInt(month1)-1,parseInt(day1));
		
    year11 = end_date.substr(6,4);	
    month11 = end_date.substr(3,2); if (month11.substr(0,1)=="0") month11= month11.substr(1,1);
    day11 = end_date.substr(0,2); if (day11.substr(0,1)=="0") day11= day11.substr(1,1);
	var end_dateO = new Date(parseInt(year11),parseInt(month11)-1,parseInt(day11));

	var start_dateV = start_dateO.valueOf(); 
	var end_dateV = end_dateO.valueOf(); 

	if (end_dateV == start_dateV) 	return  0; 
	if (end_dateV < start_dateV || (month11==month1 && year11==year1)) 	return  -1; 
	if (start_dateV < end_dateV ) 	return  1; 

   }
   
   function download_page(file_path,page_name_cat,enlarge,emp_code){
	   top.Show_MenaBox(site_host_path+'/'+system_name+'/lib/download_file.php?type=2&file='+file_path+'&page_categ='+page_name_cat+'&emp_code='+emp_code+'&enlarege='+enlarge,'_blank',250,90);
   }

   
   function download_page_window(file_path,page_name_cat,enlarge,emp_code){
		window.open(site_host_path+'/'+system_name+'/lib/download_file.php?type=1&file='+file_path+'&page_categ='+page_name_cat+'&emp_code='+emp_code+'&enlarege='+enlarge,'_blank',"width="+(200)+", height="+(10)+", noresize=no ,maximize=1");
	}

   function download_page_direct(file_path,page_name_cat,enlarge,emp_code){
		window.open(site_host_path+'/'+system_name+'/lib/download_file.php?type=1&file='+file_path+'&page_categ='+page_name_cat+'&emp_code='+emp_code+'&enlarege='+enlarge+'&encfile=1','_parent',"width="+(200)+", height="+(10)+", noresize=no ,maximize=1");
	}

/* this function to check all related checkboxs -------------------------------------- Start */
function checkRelatedCheckBox(groupClass,itemsClass,documentName)
{
	if(documentName!='')
		documentName.$("."+itemsClass).prop('checked', $('.'+groupClass).is(':checked'));
	else
		$("."+itemsClass+':not(:disabled)').prop('checked', $('.'+groupClass).is(':checked'));
}
/* this function to check all related checkboxs --------------------------------------  End  */


function local_date() {
	return $('#HRMS_localDate').val();
	
  }

/* 
Created: 13/11/2012 PM
Main: Check the input value into Select control [Loop through all select in your form].
Requirment: Every select should have ID attribute
*/

function validate_select_input(class_name)
{
	var is_valid = false;
	var index = 0;
	var select_counter = 0;
	var arr_valid = Array();
	var arr_object_to_set_selected=Array();
	var select_class =class_name!=''? 'select.'+class_name:'select';
	$(select_class).each(function(){
		index = 0;
		var selected_loan_type = $(this).val();
		$('option', this).each(function() {

			if(($(this).val()==selected_loan_type && index>0) || ((selected_loan_type=='-99' || selected_loan_type=='') && index==0))
			{
				// Item Is Exist
				is_valid= true;
			}
			index++;
	  })
	  arr_object_to_set_selected[select_counter] = $(this);
	  arr_valid[select_counter] = is_valid;
	  is_valid = false;
	  select_counter++;
	});
	
	// Check If there's at least one item not exist
	is_valid = true;
	for(var i=0;i<arr_valid.length;i++)
	{
		if(!arr_valid[i])
		{
			alert(my_dictinary[10316]);
			is_valid = false;
			arr_object_to_set_selected[i].select();
			var object_id = arr_object_to_set_selected[i].attr('id');
			// Clear and set first item in Select Control
			$("#"+object_id+" option").eq(0).attr('selected', 'selected');
			$("#"+object_id+" option").eq(0).val(-99);
			$("#"+object_id+" option").eq(0).text('');
			
			break;
		}
	}
	return is_valid;
	
}

/* this function to validate_select_input -------------------------------------- End */


/* ### Loading Image JS Scripts ---------------------------------------------------------------------- Start ###*/
if(typeof(top.login_show)=='undefined') top.login_show=0;
function Show_LoadingBox()
{
     sys_name = system_name.replace("/", "");
    var Is_Ta=0;
    if (is_system_name_ta == 'is_Ta')
          Is_Ta=1;

	if (typeof my_dictinary !== 'undefined') {
		var text = my_dictinary[9822];
		var gif_name = 'loadingAnimation.gif';
		if(Is_Ta != 0){
			text = my_dictinary[9822];
			gif_name = 'loading.gif';
			newdiv = '<div id="LoadingImageDiv" class="ReportLoadingImageDiv">'+
				 '<div class="LoadingCentralBox">'+
				 '<div class="LoadingImageBox">'+
				 '<img src="'+site_host_path+'DB/skins/light/'+gif_name+'" border="0">'+
				 '<br><br>'+text+'<br><br>'+
				 '</div>'+
				 '</div></div>';
		}
		if(is_system_freemium != 0){
			text = my_dictinary[9822];
			gif_name = 'freemiumewait.gif';
			newdiv = '<div id="LoadingImageDiv" class="ReportLoadingImageDiv">'+
				 '<div class="LoadingCentralBox">'+
				 '<div class="LoadingImageBox">'+
				 '<img src="'+site_host_path+'DB/skins/light/'+gif_name+'" border="0">'+
				 '<br><br>'+text+'<br><br>'+
				 '</div>'+
				 '</div></div>';
		}
		if(sys_name.toLowerCase()=='mename')
		{
			newdiv = '<div id="LoadingImageDiv" class="ReportLoadingImageDiv">'+
				 '<div class="LoadingCentralBox">'+
				 '<div class="LoadingImageBox">'+
				 '<div class= "d-flex  justify-content-center loading-data pt-4"><div class="spinner-border text-info  align-self-center" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only">Loading...</span></div></div>'+
				 '</div>'+
				 '</div></div>';
		}
		else{
		newdiv = '<div id="LoadingImageDiv" class="ReportLoadingImageDiv">'+
				 '<div class="LoadingCentralBox">'+
				 '<div class="LoadingImageBox">'+
				 '<br><br>'+text+'<br><br>'+
				 '<img src="'+site_host_path+'DB/skins/light/'+gif_name+'" border="0">'+
				 '</div>'+
				 '</div></div>';
				 }
		$("body").append(newdiv); 
	}
}
  function Remove_LoadingBox()
{ 
	//top.login_show=0;
	$(".ReportLoadingImageDiv").remove() ;
	$('.Main_overlay').trigger('click');
}
/* ### Loading Image JS Scripts ----------------------------------------------------------------------  End  ###*/

/* ### Show_MenaBox ---------------------------------------------------------------------- Start ###
*/

if(typeof(menaBoxVar)=='undefined')
menaBoxVar=0;


function Show_MenaBox(src,title,width,height,hide_scroll,Is_Ta,hide_close)
{


	if(typeof(Is_Ta)=='undefined')
          Is_Ta=0;

	if(typeof(hide_close)=='undefined')
          hide_close=0;


    if (is_system_name_ta!='is_Ta')
    	Is_Ta=0;
    else
    	Is_Ta=1;


	widthx =  parseInt(width)+42;
	heightx =  parseInt(height)+43;
	removeBox="";
	
	if( heightx >=top.$(document).height())
	{
		heightx = top.$(document).height()-10;
		height = top.$(document).height()-35;
	}
	
	if(src.indexOf('?') !=-1)
	 	src+='&dontRunMenuCode=1';
	else
	{
		removeBox="onclick='Remove_MenaBox();'";
		src+='?dontRunMenuCode=1';
	}

	
	 close_str='<IMG class="close_button" id="change" src="'+site_host_path+'DB/skins/Light/popup/close_button.png" onclick="Remove_MenaBox()">';
	 if(hide_close==1)
	 {
	 	removeBox="";
	 	close_str="";
	 }
	
	if (Is_Ta == 1)
		src+='&IncludeTAStyle=1';

	if(top.login_show==1) return;

	if(Is_Ta==0){
		newdiv = '<div class="MenaBox_overlay" '+removeBox+'></div>'+
		'<div  id="MenaBox_div" >'+
		'<div class="MenaBox_div_container" style="width:'+widthx+'px; height:'+heightx+'px; top:-'+(heightx / 2)+'px; left:-'+(widthx/2)+'px;">'+
		//'<div class="MenaBox_div_header">'+title+'</div>'+
		close_str+
		'<TABLE dir="ltr" id="sub_menu_table"  height="'+height+'px" border="0" cellpadding="0" cellspacing="0">'+
		'  <tr valign="bottom">'+
		'	<td valign="bottom" width="11px" height="12px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_01.png) repeat-x;"></td>'+
		'	<td height="12px" align="center" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_02.png) repeat-x;"></td>'+
		'	<td width="11px" height="12px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_03.png) repeat-x;" ></td>'+
		'  </tr>'+
		'  <tr>'+
		'	<td width="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_04.png) repeat-y;"></td>'+
		'	<td class="MainMenuPopUpBody">'+
		//'		'+title+
		'		<iframe style="height:'+(height-21)+'px; width:'+width+'px;" allowtransparencyx="true" scrolling="'+hide_scroll+'"  frameborder="NO" style="background-color:none" src="'+src+'" id="MenaBox_iframe" name="MenaBox_iframe" ></iframe>'+
		'	</td>'+
		'	<td width="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_05.png) repeat-y;"></td>'+
		'  </tr>'+
		'  <tr>'+
		'	<td width="11px" height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_06.png) repeat-x;"></td>'+
		'	<td height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_07.png) repeat-x;"></td>'+
		'	<td width="11px" height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_08.png) repeat-x;"></td>'+
		'  </tr>'+
		'</table></div></div>';
    }
    else{
		newdiv = '<div class="MenaBox_overlay" '+removeBox+'></div>'+
		'<div  id="MenaBox_div" >'+
		'<div class="MenaBox_div_container" style="width:'+widthx+'px; height:'+heightx+'px; top:-'+(heightx / 2)+'px; left:-'+(widthx/2)+'px;">'+
		//'<div class="MenaBox_div_header">'+title+'</div>'+
		close_str+
		'<TABLE dir="ltr" id="sub_menu_table"  height="'+height+'px" border="0" cellpadding="0" cellspacing="0">'+
		// '  <tr valign="bottom">'+
		// '	<td valign="bottom" width="11px" height="12px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_01.png) repeat-x;"></td>'+
		// '	<td height="12px" align="center" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_02.png) repeat-x;"></td>'+
		// '	<td width="11px" height="12px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_03.png) repeat-x;" ></td>'+
		// '  </tr>'+
		'  <tr>'+
		// '	<td width="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_04.png) repeat-y;"></td>'+
		'	<td class="MainMenuPopUpBody">'+
		//'		'+title+
		'		<iframe style="height:100%; width:'+width+'px;" allowtransparencyx="true" scrolling="'+hide_scroll+'"  frameborder="NO" style="background-color:none" src="'+src+'" id="MenaBox_iframe" name="MenaBox_iframe" ></iframe>'+
		'	</td>'+
		// '	<td width="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_05.png) repeat-y;"></td>'+
		'  </tr>'+
		// '  <tr>'+
		// '	<td width="11px" height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_06.png) repeat-x;"></td>'+
		// '	<td height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_07.png) repeat-x;"></td>'+
		// '	<td width="11px" height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_08.png) repeat-x;"></td>'+
		// '  </tr>'+
		'</table></div></div>';
	}

	$("body").append(newdiv); 
	$('#security_lock_img').css('src',"");
	$('#security_lock_img').css('filter',"progid: DXImageTransform. Microsoft. AlphaImageLoader (src='images/security_lock.png', sizingMethod='crop')");
	//top.login_show=1;
	top.menaBoxVar=1;
	
	$('#MenaBox_iframe').on('load',function(){ 
    $(this).contents().find('body').css('background', '#FFF');
	});
}


function freemium_Show_MenaBox(src,title,width,height,hide_close,hide_scroll,bgcolor)
{	 
removeBox="";

	if(typeof(hide_close)=='undefined')
          hide_close=0;

    	if(src.indexOf('?') !=-1)
	 	src+='&dontRunMenuCode=1';
	else
	{
		removeBox="onclick='Remove_MenaBox();'";
		src+='?dontRunMenuCode=1';
	}

	if(typeof(bgcolor)=='undefined')
        var class_name= '';
    else
    	var class_name= 'bg_MenaBox_div';
    	

img_emp = '';	
close_str='<IMG class="close_button" id="change" src="'+site_host_path+'DB/skins/Light/popup/close-freemium.png" onclick="Remove_MenaBox()">';
	 if(hide_close==1)
	 {
	 	removeBox="";
	 	close_str="";
	 }


	newdiv = '<div class="MenaBox_overlay" '+removeBox+'></div>'+
	'<div  id="MenaBox_div" >'+
	'<div class="MenaBox_div_container freemium_MenaBox_div '+class_name+'" style="width:'+width+'px;border-radius: 0px;padding: 0px; height:'+height+'px; top:-'+(height / 2)+'px; left:-'+(width/2)+'px;">'+img_emp+
	close_str +
	

	'		<iframe style="height:'+(height)+'px; width:'+width+'px;" allowtransparencyx="true" scrolling="'+hide_scroll+'"  frameborder="NO" style="background-color:none" src="'+src+'" id="MenaBox_iframe" name="MenaBox_iframex" ></iframe>'+'</div></div>';

	$("body").append(newdiv); 
	$('#security_lock_img').css('src',"");
	$('#security_lock_img').css('filter',"progid: DXImageTransform. Microsoft. AlphaImageLoader (src='images/security_lock.png', sizingMethod='crop')");
	//top.login_show=1;
	top.menaBoxVar=1;

}


function New_Show_MenaBox(src,title,width,height,hide_close,hide_scroll)
{	 
removeBox="";

    var Is_Ta=0;
	if (typeof(is_system_name_ta) !='undefined' && is_system_name_ta =='is_Ta')
    	Is_Ta=1;


    	if(src.indexOf('?') !=-1)
	 	src+='&dontRunMenuCode=1';
	else
	{
		removeBox="onclick='Remove_MenaBox();'";
		src+='?dontRunMenuCode=1';
	}


	if (Is_Ta == 1)
		src+='&IncludeTAStyle=1';

	
close_str='<IMG class="close_button" id="change" src="'+site_host_path+'DB/skins/Light/popup/exite.png" onclick="Remove_MenaBox()">';

if (is_system_freemium == 1)
		close_str='<IMG class="close_button" id="change" src="'+site_host_path+'DB/skins/Light/popup/close-freemium.png" onclick="Remove_MenaBox()">';


	newdiv = '<div class="MenaBox_overlay" '+removeBox+'></div>'+
	'<div  id="MenaBox_div" >'+
	'<div class="MenaBox_div_container" style="width:'+width+'px;background-color: #fff;border-radius: 0px;padding: 0px; height:'+height+'px; top:-'+(height / 2)+'px; left:-'+(width/2)+'px;">'+
	close_str +
	

	'		<iframe style="height:'+(height)+'px; width:'+width+'px;" allowtransparencyx="true" scrolling="'+hide_scroll+'"  frameborder="NO" style="background-color:none" src="'+src+'" id="MenaBox_iframe" name="MenaBox_iframex" ></iframe>'+'</div></div>';

	$("body").append(newdiv); 
	$('#security_lock_img').css('src',"");
	$('#security_lock_img').css('filter',"progid: DXImageTransform. Microsoft. AlphaImageLoader (src='images/security_lock.png', sizingMethod='crop')");
	//top.login_show=1;
	top.menaBoxVar=1;

}


function Remove_MenaBox()
{
	
	$('#MenaBox_iframe').attr('src','');
	//top.login_show=0;
	top.menaBoxVar=0;
	$("#security_TB_overlay").hide() ;
	$(".MenaBox_overlay, #MenaBox_div").remove() ;
}





menaInnerBoxCounter=1;
if(typeof(menaInnerBoxVar)=='undefined')
menaInnerBoxVar=0;

function Show_MenaInnerBox(src,title,width,height)
{
	widthx =  parseInt(width)+42;
	heightx =  parseInt(height)+43;
	removeInnerBox="";
    
    var Is_Ta=0;
	if (typeof(is_system_name_ta) !='undefined' && is_system_name_ta =='is_Ta')
    	Is_Ta=1;
	
	menaInnerBoxCounter++;
	
	if( heightx >=$(document).height())
	{
		heightx = $(document).height()-10;
		height = $(document).height()-35;
	}

	if(src.indexOf('?') !=-1)
	 	src+='&dontRunMenuCode=1&menaInnerBoxCounter='+menaInnerBoxCounter;
	else
	{
		removeInnerBox="onclick='Remove_MenaInnerBox("+menaInnerBoxCounter+");'";
		src+='?dontRunMenuCode=1&menaInnerBoxCounter='+menaInnerBoxCounter;
	}

	if (Is_Ta == 1)
		src+='&IncludeTAStyle=1';
	
	if(top.login_show==1) return;

	newdiv = '<div counter="'+menaInnerBoxCounter+'" class="MenaInnerBox_overlay" '+removeInnerBox+'></div>'+
	'<div counter="'+menaInnerBoxCounter+'"  id="MenaInnerBox_div" >'+
	'<div counter="'+menaInnerBoxCounter+'" class="MenaInnerBox_div_container" style="width:'+widthx+'px; height:'+heightx+'px; top:-'+(heightx / 2)+'px; left:-'+(widthx/2)+'px;">'+
	//'<div class="MenaInnerBox_div_header">'+title+'</div>'+
	'<IMG class="close_button" id="change" src="'+site_host_path+'DB/skins/Light/popup/close_button.png" onclick="Remove_MenaInnerBox('+menaInnerBoxCounter+');">'+
	'<TABLE dir="ltr" id="sub_menu_table"  height="'+height+'px" border="0" cellpadding="0" cellspacing="0">'+
	'  <tr>'+
	'	<td class="MainMenuPopUpBody">'+
	//'		'+title+
	'		<iframe name="MenaInnerBox_iframe" style="height:'+(height-21)+'px; width:'+width+'px;" allowtransparencyx="true" scrolling="auto"  frameborder="NO" style="background-color:none" src="'+src+'" id="MenaInnerBox_iframe" ></iframe>'+
	'	</td>'+
	'  </tr>'+
	'</table></div></div>';

	$("body").append(newdiv); 
	$('#security_lock_img').css('src',"");
	$('#security_lock_img').css('filter',"progid: DXImageTransform. Microsoft. AlphaImageLoader (src='images/security_lock.png', sizingMethod='crop')");
	//top.login_show=1;
	top.menaInnerBoxVar=1;
}

function Remove_MenaInnerBox(counter)
{
	try
	{
		$('#MenaInnerBox_div[counter="'+counter+'"] #MenaInnerBox_iframe').attr('src','');
		//top.login_show=0;
		top.menaInnerBoxVar=0;
		$("#security_TB_overlay").hide() ;
		
		$(".MenaInnerBox_overlay[counter="+counter+"], #MenaInnerBox_div[counter="+counter+"]").remove() ;
	}
	catch(ex) {}
}

function Show_MenaMsgs(content,title,width,height)
{
	widthx =  parseInt(width)+42;
	heightx =  parseInt(height)+43;
	removeInnerBox="";
	
	menaInnerBoxCounter++;
	
	if( heightx >=$(document).height())
	{
		heightx = $(document).height()-10;
		height = $(document).height()-35;
	}

	removeInnerBox="onclick='Remove_MenaMsgs("+menaInnerBoxCounter+");'";
	
	
	if(top.login_show==1) return;

	newdiv = '<div counter="'+menaInnerBoxCounter+'" class="MenaInnerBox_overlay" '+removeInnerBox+'></div>'+
	'<div counter="'+menaInnerBoxCounter+'"  id="MenaInnerBox_div" >'+
	'<div counter="'+menaInnerBoxCounter+'" class="MenaInnerBox_div_container" style="width:'+widthx+'px; height:'+heightx+'px; top:-'+(heightx / 2)+'px; left:-'+(widthx/2)+'px;">'+
	//'<div class="MenaInnerBox_div_header">'+title+'</div>'+
	'<IMG class="close_button" id="change" src="'+site_host_path+'DB/skins/Light/popup/close_button.png" onclick="Remove_MenaInnerBox('+menaInnerBoxCounter+');">'+
	'<TABLE dir="ltr" id="sub_menu_table"  height="'+height+'px" border="0" cellpadding="0" cellspacing="0">'+
	'  <tr valign="bottom">'+
	'	<td valign="bottom" width="11px" height="12px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_01.png) repeat-x;"></td>'+
	'	<td height="12px" align="center" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_02.png) repeat-x;"></td>'+
	'	<td width="11px" height="12px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_03.png) repeat-x;" ></td>'+
	'  </tr>'+
	'  <tr>'+
	'	<td width="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_04.png) repeat-y;"></td>'+
	'	<td class="MainMenuPopUpBody" style="height:'+(height-21)+'px; width:'+width+'px;">'+
	//'		'+title+
	content+
	'	</td>'+
	'	<td width="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_05.png) repeat-y;"></td>'+
	'  </tr>'+
	'  <tr>'+
	'	<td width="11px" height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_06.png) repeat-x;"></td>'+
	'	<td height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_07.png) repeat-x;"></td>'+
	'	<td width="11px" height="11px" style="background:url('+site_host_path+'DB/skins/Light/popup/popup_08.png) repeat-x;"></td>'+
	'  </tr>'+
	'</table></div></div>';

	$("body").append(newdiv); 
	$('#security_lock_img').css('src',"");
	$('#security_lock_img').css('filter',"progid: DXImageTransform. Microsoft. AlphaImageLoader (src='images/security_lock.png', sizingMethod='crop')");
	//top.login_show=1;
	top.menaInnerBoxVar=1;
}

function Remove_MenaMsgs(counter)
{
	try
	{
		$('#MenaInnerBox_div[counter="'+counter+'"] #MenaInnerBox_iframe').attr('src','');
		//top.login_show=0;
		top.menaInnerBoxVar=0;
		$("#security_TB_overlay").hide() ;
		
		$(".MenaInnerBox_overlay[counter="+counter+"], #MenaInnerBox_div[counter="+counter+"]").remove() ;
	}
	catch(ex) {}
}




function open_notification_committee(notification_type)
{
      top.Show_MenaBox(site_host_path+system_name+"system_info/notifications_committee.php?notification_type="+notification_type,'Notification_Committee',750,480,'no');
}
function select_committee_member(index,committee_type)
{
	 window.open(site_host_path+system_name+"system_info/select_committee_members.php?committee_type="+committee_type.val()+"&index="+index, "Select_Committee_Member", "width=500,height=635,scrollbars=no");
}

var zxcTO;

function Scroll(id,dis,pos){
 $('#'+id).scrollTop($('#'+id).scrollTop()+dis)
 if (pos){$('#'+id).scrollTop()=pos; }
 else {zxcTO=setTimeout( function(){ Scroll(id,dis); },10); }
}
function getCalculationErrorDescArray(){
log_desc={};
//$(document).ready(function(e) {
	log_desc[-2]=my_dictinary[13260]
	log_desc[-1]=my_dictinary[3229]
	log_desc[1]=my_dictinary[3232]
	log_desc[2]=my_dictinary[3231]
	log_desc[3]=my_dictinary[3230]
	log_desc[4]=my_dictinary[3340]
	log_desc[5]=my_dictinary[2058]
	log_desc[6]=my_dictinary[3805]
	log_desc[7]=my_dictinary[3762]
	log_desc[8]=my_dictinary[3763]
	log_desc[9]=my_dictinary[3845]
	log_desc[10]=my_dictinary[4365]
	log_desc[11]=my_dictinary[4541]
	log_desc[12]=my_dictinary[7451]
	log_desc[13]=my_dictinary[9022]
	log_desc[14]=my_dictinary[9225]
	log_desc[15]=my_dictinary[10513]
	log_desc[16]=my_dictinary[10543]
	log_desc[17]=my_dictinary[10542]
	log_desc[18]=my_dictinary[10575]
	log_desc[19]=my_dictinary[10578]
	log_desc[20]=my_dictinary[587]
	log_desc[21]=my_dictinary[6895]
	log_desc[22]=my_dictinary[7859]	
	log_desc[23]=my_dictinary[12379]	
	log_desc[24]=my_dictinary[13252]	
	log_desc[25]=my_dictinary[13253]
	log_desc[26]=my_dictinary[54269]

//});	
return log_desc;
}
/* ### Show_MenaBox ----------------------------------------------------------------------  End  ###*/

/******************************* Start check for any inputChangeBeforeSave value ***********************/
function checkForChangeBeforeExit()
{
top.document.inputChangeBeforeSave=inputChangeBeforeSave; 

if (typeof $('#MenuSaveButton').attr('enabled') != "undefined")
{top.document.formSaveDisabled=$('#MenuSaveButton').attr('enabled');}
//
$('body input , body select , body textarea').change(function(e) {
	if(top.document.formSaveDisabled==0)
	{
	top.document.inputChangeBeforeSave=1;	
	inputChangeBeforeSave=1;
	}
});

$('a').click(function() {
 if(formSaveDisabled!=0 ||  $(this).parent().attr('id')=='MenuButtonsContainer')
	return true;
 
  if(typeof $(this).attr('href') !="undefined" && $(this).attr('href').length>1)
  if($(this).attr('href').indexOf("javascript")==-1 || 
  ($(this).attr('href').indexOf("javascript")!=-1 && $(this).parents("div").hasClass("TabsTableTag"))
  )
	if(inputChangeBeforeSave==1 || top.document.inputChangeBeforeSave==1)
	{
	 var conMessage = confirm(my_dictinary[10855]);	
		if (conMessage == false)
		  {
		  	 
		  	 	Remove_LoadingBox();
			
			 return false;
		  }
	}
});
		
}
/******************************* END check for any inputChangeBeforeSave value ***********************/
  function reset_hierarchy()
 {
	 /** function that should be called upon changing an employee code on a form
	 to reset all the hierarchy filters 
	 -- I tested this code without adding a code to remove any other selected options and it worked ***/

 $("[name=site] option:first").attr('selected','selected');
  $("[name=department] option:first").attr('selected','selected');
  $("[name=section] option:first").attr('selected','selected');
  $("[name=sub_section] option:first").attr('selected','selected');
  $("[name=FDimension] option:first").attr('selected','selected');
  $("[name=SDimension] option:first").attr('selected','selected');
  
  $("[name=division] option:first").attr('selected','selected');
  $("[name=sub_division] option:first").attr('selected','selected');
  $("[name=units] option:first").attr('selected','selected');
  $("[name=sub_unit] option:first").attr('selected','selected');

  $("[name=team] option:first").attr('selected','selected');
  $("[name=office] option:first").attr('selected','selected');

  $("[name=classification] option:first").attr('selected','selected');
  $("[name=degree] option:first").attr('selected','selected');
  $("[name=Project] option:first").attr('selected','selected');
 
 }
 // add new option
function addOption(selectbox,text,value,is_selected )
{
	selectbox.append("<option value='"+value+"'>"+text+"</option>");

	if(is_selected!=null) 	selectbox.val(value);
}
// remove all options
function removeAllOptions(selectbox)
{
	selectbox.children().remove();
}
// remove selected option
function removeOptions(selectbox)
{
var i;
for(i=selectbox.options.length-1;i>=0;i--)
{
if(selectbox.options[i].selected)
selectbox.remove(i);
}
}
///////////////////////////////
function check_select(object,value){


var length=object.length;
var select_all=0;
	for (var i=0 ; i<=length-1 ; i++) 
	{ 
	   //if (document.form.penalty_id.options[document.form.penalty_id.selectedIndex].value=-1)
      if(object.options[i].selected==true && object.options[i].value==-1)
	 	select_all=1;
	  }
	  
	  if(select_all=1 && value==-1)
	  {
		for (var i=0 ; i<=length-1 ; i++) 
		{ 
		 object.options[i].selected=true;
		
		}
		object.options[0].selected=true;
	  }

    
   
}

//function to fill subtypes list
function change_request(type,subtype_list_id){

removeAllOptions($("#"+subtype_list_id)); // empty the sub trans type drop down
addOption($("#"+subtype_list_id), my_dictinary[484],-1,true);// add the all option
  switch(type){
    case '23'://training_request
	if(typeof training_request_type!="undefined") fill_list(training_request_type,subtype_list_id);
	break;
    case '7':// Vacations Type
    case '39':// Vacations Resumption
	if(typeof vacations_type!="undefined") fill_list(vacations_type,subtype_list_id);
	break;
    case '21':// Vacations Requist Type
	if(typeof vacations_request_type!="undefined") fill_list(vacations_request_type,subtype_list_id);
	break;
    case '17':// Vacations Requist Type
	if(typeof change_location_types!="undefined") fill_list(change_location_types,subtype_list_id);
	break;
    case '66':// Vacations Requist Type
	if(typeof change_location_types!="undefined") fill_list(change_location_types,subtype_list_id);
	break;

    case '9':// Leave Type
	if(typeof leaves_type!="undefined") fill_list(leaves_type,subtype_list_id);
	break;
    case '19':// Leave Requist Type
	if(typeof leaves_request_type!="undefined") fill_list(leaves_request_type,subtype_list_id);
	break;
    case '38':// Other Requests
	if(typeof misce_requests_array!="undefined") fill_list(misce_requests_array,subtype_list_id);
	break;
    case '10':// Overtime
	if(typeof overtime_type!="undefined") fill_list(overtime_type,subtype_list_id);
	break;
    case '42':// Overtime Request
	if(typeof overtime_request_type!="undefined") fill_list(overtime_request_type,subtype_list_id);
	break;
    case '4':// loan 
	if(typeof loan_type !="undefined") fill_list(loan_type,subtype_list_id);
	break;
    case '22':// loan request
	if(typeof loan_request !="undefined") fill_list(loan_request,subtype_list_id);
	break;
    case '36':// Employee Transfar
	if(typeof branch_array !="undefined") fill_list(branch_array,subtype_list_id);
	break;
    case '48':// compound vacation request
	if(typeof compound_vac_type !="undefined") fill_list(compound_vac_type,subtype_list_id);
	break;
    case '6'://Vacation compensation
	if(typeof compensation_vac_type_array !="undefined") fill_list(compensation_vac_type_array,subtype_list_id);
	break;
    case '49': // Performance Aprraisal Request
	if(typeof Appraisal_request_type !="undefined") fill_list(Appraisal_request_type,subtype_list_id);
	break;
    case '58': // Performance Aprraisal Request
	if(typeof Appraisal_request_type !="undefined") fill_list(Appraisal_request_type,subtype_list_id);
	break;
    case '78': // Performance Aprraisal Request
	if(typeof Appraisal_objection_request !="undefined") fill_list(Appraisal_objection_request,subtype_list_id);
	break;	
    case '33': // Business Trip request
    case '41': // Business Trip
    case '40': // Business Trip resumbtion
	case '79': // Business Trip resumption Request
	if(typeof business_trips_types !="undefined") fill_list(business_trips_types,subtype_list_id);
	break;
	case '57'://Financial Claim Request
	if(typeof fin_claim_types!="undefined") fill_list(fin_claim_types,subtype_list_id);
	break;
	case '70'://NonPayroll Transactions
	case '101'://Non-Payroll Benefit Transactions 
	case '102':
	if(typeof nonPayroll_types!="undefined") fill_list(nonPayroll_types,subtype_list_id);
	break;
	
	case '83'://PF loan Requests
	if(typeof PF_loan_request!="undefined") fill_list(PF_loan_request,subtype_list_id);
	break;
	
	case '89'://Allowance Request		
	case '90'://Allowance Request
	case '91'://Allowance Request
	case '98'://Allowance Request
	case '35':
	case '1' :
		if(typeof allowance_request!="undefined") fill_list(allowance_request,subtype_list_id);
		break;
		
		
	case '30':
	case '72':		
	case '73':
	case '74':
		if(typeof training_types_array!="undefined") fill_list(training_types_array,subtype_list_id);
		break;	
		
	case '80':
	case '81':		
	case '82':

		if(typeof invest_plan_request!="undefined") fill_list(invest_plan_request,subtype_list_id);
		break;		
		
	case '56':

		if(typeof change_contract_request!="undefined") fill_list(change_contract_request,subtype_list_id);
		break;	
		
	case '96'://object_transaction_request
		if(typeof object_transaction_request!="undefined") fill_list(object_transaction_request,subtype_list_id);
		break;

	case '97'://Benefit Commitment
		if(typeof benefit_commitment_request!="undefined") fill_list(benefit_commitment_request,subtype_list_id);
		break;
	
	case '15': // employees Upgrade
	case '62': // employees Upgrade request
		if(typeof employees_upgrade_request!="undefined") fill_list(employees_upgrade_request,subtype_list_id);
		break;
	case '100': // disciplinary actions
		if(typeof disciplinary_actions!="undefined") fill_list(disciplinary_actions,subtype_list_id);
		break;
	case '115': // disciplinary actions
		if(typeof ME_disciplinary_actions_request!="undefined") fill_list(ME_disciplinary_actions_request,subtype_list_id);
		break;


  }
}


function fill_list(request_array,subtype_list_id){
     
	
     for(var i in request_array){
	    addOption($("#"+subtype_list_id), request_array[i], i);
	 }

}
function checkOpenerExist()
{
	var pattern = /MSIE\s([\d]+)/;
	var ua = navigator.userAgent;
	var matched = ua.match(pattern);
	if( (
		    ((navigator.userAgent.indexOf('Chrome')!=-1 && (opener!=null || parent.opener!=null))
			|| (navigator.userAgent.indexOf('Firefox')!=-1 && opener!=null)
			|| (navigator.userAgent.indexOf('safari')!=-1 && navigator.userAgent.indexOf('Chrome')==-1 && (typeof(opener)!="undefined" || typeof(parent.opener)!="undefined"))
			|| (matched && (typeof(opener)!="undefined" || typeof(parent.opener)!="undefined"))
			|| (navigator.userAgent.indexOf('.NET')!=-1 && (typeof(opener)!="undefined" || typeof(parent.opener)!="undefined"))
			|| (navigator.userAgent.indexOf('.MSIE')!=-1 && (typeof(opener)!="undefined" || typeof(parent.opener)!="undefined")))
			&& (
				($('body').attr('class') =='popupPagesBody'	|| parent.$('body').attr('class') =='popupPagesBody')
				|| ($('body').attr('class') =='searchPopupBody'	|| parent.$('body').attr('class') =='searchPopupBody')
				)
		)
		|| (typeof(top.menaBoxVar)!='undefined' && top.menaBoxVar==1) )
	{
		return true;
	}
	else
	{
		return false;
	}
}

function closepopUpWin()
{
	if(top.menaBoxVar==0)
	window.close();
	else
	top.Remove_MenaBox();
}

function closeInnerpopUpWin()
{
	parent.Remove_MenaInnerBox($('#menaInnerBoxCounter').val());
}

function secondment_details(employee_code)
{
		window.open(site_host_path+system_name+"transactions/secondment_transactions_details.php?employee_code="+employee_code,"Secondment","width=750,height=350,scrollbars=auto");
	
}
function open_PF_slices(slices_type, system_code)
{
	if(typeof(system_code)=='undefined')
	system_code = -1;
	window.open(site_host_path+system_name+"system_info/pf_slices.php?slices_type="+slices_type+"&system_code="+system_code,"PF_Slices","width=750,height=350,scrollbars=auto");
}

function select_user(userID,notuseed,input_id)
 { 

  $('#'+input_id).val(userID);
  
 }
 
 function number_format(number, decimals){
	 
	decimals = decimals || 0;
	
	number = parseFloat(number);
	var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
	var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber;
	var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
	var formattedNumber = "";

	while(numbersString.length > 3){
		formattedNumber += ',' + numbersString.slice(-3)
		numbersString = numbersString.slice(0,-3);
	}

	return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? ('.' + decimalsString) : '');
}
function unformating_number(number){

	var numlenght=Number(number.length);
	for (var i = 0; i <= numlenght; i=i+3) {
	   number =	number.replace(",","");
	}
	return number;
}



function thousand_separate(number,decimal_places,thousand_seperate_hr)
{     
	
	if(number == 0) return decimal_numbers(number,decimal_places);
	
  	    if (thousand_seperate_hr!=1)
			return number;
		 else
			return number_format(number,decimal_places);

}

function add_month(start_date) {
	
	var year1;
	var month1;
	var day1;

    year1 = start_date.substr(6,4);	
    month1 = start_date.substr(3,2); 
    day1 = start_date.substr(0,2); 

	var sdate = new Date(parseInt(year1),parseInt(month1),parseInt(day1));	
	
my_day=sdate.getDate();
if(my_day<10)my_day="0"+my_day;
my_month=(sdate.getMonth()+1);
if(my_month<10)my_month="0"+my_month;

	return   my_day+ "/" + (my_month) + "/" + sdate.getFullYear();
	
	
}
if(typeof window.btoa == "undefined"){
	function btoa($str){
		var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
		return Base64.encode($str);
	}
}

function Show_security_login(ConfirmLock)
{
    
    var IncludeTAStyle = 0;
	if(is_system_name_ta=='is_Ta')
		IncludeTAStyle = 1;
	
	if(top.login_show==1 && $("#security_TB_overlay").length && $("#security_TB_overlay").css('display')=='block'
		&& $("#security_TB_overlay").width()==$("body").width() && $("#security_TB_overlay").height()==$("body").height()) return;

	//alert('Show_security_login' +top.login_show);

	$('[name=systemLockIframe]').attr('src','');
	$("#security_TB_overlay").remove();

	$("body").append('<div id="security_TB_overlay">'
					+'	<div class="security_div" id="security_div">'
					+'		<div class="security_div_container">'
					+'			<iframe name="systemLockIframe" frameborder="NO" style="background-color:none" src="" id="security_iframe"></iframe>'
					+'		</div>'
					+'	</div>'
					+'</div>');

	$("#security_TB_overlay").css('width','100%');
	$("#security_TB_overlay").css('height','100%');

	$("#security_TB_overlay").show(); 
	
	
	$('[name=systemLockIframe]').attr('src',site_host_path+'/'+system_name+'/system_lock.php?ConfirmLock='+ConfirmLock+'&IncludeTAStyle='+IncludeTAStyle)
	
	top.login_show=1;
}

function Remove_security_login()
{

	if(callbackcon()) return false;


	top.login_show=0;
	$('[name=systemLockIframe]').attr('src','');
	$("#security_TB_overlay").remove();
	try {zero_time();}	catch (e) {}
}

$(document).ready(function(e) {

	$(document).keydown(function (){
		try {zero_time();} 
		catch (e)
		{
			try {window.parent.zero_time();}
			catch (e)
			{
				try {window.opener.zero_time();}
				catch (e)
				{
					try {parent.zero_time();}
					catch (e)
					{
						try {opener.zero_time();} catch (e){}
					}
				}
			}
		}
	});
	
	$(document).click(function (){
		try {zero_time();} 
		catch (e)
		{
			try {window.parent.zero_time();}
			catch (e)
			{
				try {window.opener.zero_time();}
				catch (e)
				{
					try {parent.zero_time();}
					catch (e)
					{
						try {opener.zero_time();} catch (e){}
					}
				}
			}
		}
	});
});

console.log = function() {}

function callbackcon()
{
    var stack;
    try
    {
       // Throwing the error for Safari's sake, in Chrome and Firefox
       // var stack = new Error().stack; is sufficient.
       throw new Error();
    }
    catch (e)
    {
        stack = e.stack;
    }
    if (!stack)
        return false;

    
    if (stack.indexOf('at <anonymous>:1:1')>0) return true;   // Chrome console
    if (stack.indexOf('at eval code')>0) return true;   // ie
    if (stack.indexOf('@debugger eval code:1:1')>0) return true;   // firefox
    if (stack.indexOf('_evaluateOn')>0) return true;   // safari


    return false;
}


$(document).ready(function(e) {
$( "#password64,#password,.passwords" ).focus(function() {
  	if(($(this).val()).length >0){
	$(this).css('font-family','passwords');
	$(this).css('font-weight','bold');
	}else{
	$(this).css('font-family','tahoma');
	$(this).css('font-weight','normal');


	}
});
//change by farouk daina zain login
$('#password64,#password,.passwords').keydown(function() {	
	if(($(this).val()).length >0){
	$(this).css('font-family','passwords');
	$(this).css('font-weight','bold');
	}else{
	$(this).css('font-family','tahoma');
	$(this).css('font-weight','normal');


	}
});
	$('#password64,#password,.passwords').keyup(function() {	
	if(($(this).val()).length >0){
	$(this).css('font-family','passwords');
	$(this).css('font-weight','bold');
	}else{
	$(this).css('font-family','tahoma');
	$(this).css('font-weight','normal');


	}
});

		$('#password64,#password,.passwords').focusout(function() {	
	if(($(this).val()).length >0){
	$(this).css('font-family','passwords');
	$(this).css('font-weight','bold');
	
	}else{
	$(this).css('font-family','tahoma');
	$(this).css('font-weight','normal');


	}
});
	function IeVersion() {
    //Set defaults
    var value = {
        IsIE: false,
        TrueVersion: 0,
        ActingVersion: 0,
        CompatibilityMode: false
    };

    //Try to find the Trident version number
    var trident = navigator.userAgent.match(/Trident\/(\d+)/);
    if (trident) {
        value.IsIE = true;
        //Convert from the Trident version number to the IE version number
        value.TrueVersion = parseInt(trident[1], 10) + 4;
    }

    //Try to find the MSIE number
    var msie = navigator.userAgent.match(/MSIE (\d+)/);
    if (msie) {
        value.IsIE = true;
        //Find the IE version number from the user agent string
        value.ActingVersion = parseInt(msie[1]);
    } else {
        //Must be IE 11 in "edge" mode
        value.ActingVersion = value.TrueVersion;
    }

    //If we have both a Trident and MSIE version number, see if they're different
    if (value.IsIE && value.TrueVersion > 0 && value.ActingVersion > 0) {
        //In compatibility mode if the trident number doesn't match up with the MSIE number
    
        value.CompatibilityMode = value.TrueVersion != value.ActingVersion;
    }
    return value;
}

var ie = IeVersion();
if(ie.CompatibilityMode==true){
	// alert(site_host_path);
	// window.location.href('a');
	$('body').html('');
	$('body').html('<div style="WIDTH: 100%; BACKGROUND: black; COLOR: red; text-align: center;padding-top:20%;height:100%;font-family:tahoma"><h2>You Should  Turn Off Compatibility View <br><br> Please Turn Off Compatibility View');
	$('body').css('margin',0);
}



$('#loading-login').hide();

});


function local_date() {
	
	var time = new Date();
	var intDay = time.getDate();  
	var intMonth = time.getMonth();
	var intYear = time.getFullYear();
		if (intDay<10) intDay= "0" + intDay;
		intMonth= parseInt(intMonth) + 1;
		if (intMonth<10) intMonth= "0" + intMonth;


	var local_date= intDay+'/'+intMonth+'/'+intYear;
	return local_date;
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

var msgCounter =0;

function Show_MenaAlert(msg,height_modal,width_modal)
{ 


               Counter= ++top.msgCounter;

               width=600;
               height=379;



  var content = 
            '<div class="MoskMedium500 header-alert" >'+my_dictinary[12858]+'!</div>'+
            '<div class="colorc8d2db text-family msg-alert">'+msg+
            '</div>'+
              '<div style="vertical-align:middle !important;padding-top:50px;" class="d-flex justify-content-between">'+
            '</div>';


				close_str='<Div class="close_button" id="change" onclick="Remove_MenaAlert('+Counter+')">X</div>';

				newdiv = '<div class="MenaBox_overlay_alert z-index-99999" msgCounter='+Counter+'></div>'+
				'<div  id="MenaBox_div_aler" msgCounter='+Counter+' >'+
				'<div class="MenaBox_div_container warningPopUpbk opacity_alert" style=" top:-'+(height / 2)+'px; left:-'+(width/2)+'px;height:'+height_modal+'px;width:'+width_modal+'px">'+'<div class="alert-body body_message">'+
				content+'</div>'
				+'<button type="button" class="Logininputbutton buttonDelete size12  colorff8110 button-alert" onclick="Remove_MenaAlert('+Counter+')">'+my_dictinary[1023]+'</button>'
				+'</div></div>';

               $("body").append(newdiv); 

               //window.stop();

}


function Remove_MenaAlert(Counter)
{
               $("[msgCounter="+Counter+']').remove() ;
}


function succes_message(modal_title,text_header,text_modal,footer_modal,name_emp,emp_id,modal_frame_height,widt_POP,modal_size,type_message)
{

	///////////// if type_message = 1 mean employee
	///////////// if type_message = 2 mean transaction

	var content ="<div class='modal fade' id='createVacationRequestModal' tabindex='-1' role='dialog' aria-labelledby='createVacationRequestLabel' aria-hidden='true'>";
        content +="<div class='modal-dialog modal-"+modal_size+" warningPopUpbk' role='document' id='modalRequest' style='"+widt_POP+modal_frame_height+"'>";
        content +="<div class='modal-content body_message'>";
        content +="<div class='modal-body'>";
        content +="<div class='colorWhite size38 MoskMedium500'>"+modal_title+"</div>";
        // content +="<div class='d-flex' style='width:16%;text-align:right !important'><span><hr class='val-bar' style='background-color: #FF8110'></span>&nbsp;<span><hr class='val-bar'  style='background-color: #FF8110'></span>&nbsp;<span class='val'>100%</span></div>";
        content +="<div class='size23 text-family colorff8110' style='padding-top:20px'>"+text_header+"</div>";


		if(type_message == 1){
		    content +="<div class='colorc8d2db text-family size16'>";
		    content +=text_modal;
		    content +="</br><span class='text-familyBold colorWhite'>"+name_emp+"</span>";
		    content +="&nbsp;"+my_dictinary[53905]+" "+emp_id;
		    content +="</div>";
		}

		if(type_message == 2){
		    content +="<div class='colorc8d2db text-family size16'>";
		    content +=text_modal+" "+name_emp;
		    content +="</div>";
		}
        content +="<div style='vertical-align:middle !important;padding-top:50px; padding-bottom:20px;' class='d-flex justify-content-between'>";
        content +="<div style=' width:61%; padding-top:5px' class='text-family size12 colorWhite'>"+footer_modal+"</div>";
        content +="<div> <button type='button' class='buttonDelete size12  colorff8110' onclick='close_modal()'>"+my_dictinary[53903]+"</button></div></div></div></div></div></div>";
        $("body").append(content); 
        show_modal();
        //$("#createVacationRequestModal").modal();

}


function confirm_msg(msg,type,name_function)
{    

   if(typeof(type)=='undefined'){
   	type = 0;
   }

   if(typeof(name_function)=='undefined'){
   	name_function = 'delete_data()';
   }

   var name_frame = "body_frame."+name_function;
   if (type == 1) {
   	name_frame = "MenaBox_iframex."+name_function;
   }     

   Counter= ++top.msgCounter;     

   width=600;
   height=379;



  var content = 
            '<div class="MoskMedium500 header-alert" >'+my_dictinary[6134]+'!</div>'+
            '<div class="colorc8d2db text-family msg-alert">'+msg+
            '</div>'+
              '<div style="vertical-align:middle !important;padding-top:50px; padding-bottom:20px;" class="d-flex justify-content-between">'+
            '</div>';


				close_str='<Div class="close_button" id="change" onclick="Remove_MenaAlert('+Counter+')">X</div>';

				newdiv = '<div class="MenaBox_overlay_alert z-index-99999" msgCounter='+Counter+'></div>'+
				'<div  id="MenaBox_div_aler" msgCounter='+Counter+' >'+
				'<div class="MenaBox_div_container warningPopUpbk opacity_alert warningPopUpbkConfirm" style=" top:-'+(height / 2)+'px; left:-'+(width/2)+'px;width:613px !important;background-color: rgba(29,29,27);">'+'<div class="alert-body body_message">'+
				content+'</div>'
				+'<div class="d-flex justify-content-end button-delete-confirm">'
				+'<button type="button" class="Logininputbutton buttonDelete size12  colorff8110 mr-4 ml-4" onclick="'+name_frame+';Remove_MenaAlert('+Counter+')">'+my_dictinary[1023]+'</button>'
				+'<button type="button" class="Logininputbutton buttonDelete size12  colorff8110" onclick="Remove_MenaAlert('+Counter+')">'+my_dictinary[2518]+'</button>'
				+'</div></div></div>';

               top.$("body").append(newdiv); 

}

function show_modal(){
	$("#createVacationRequestModal").modal();
}


function close_modal(){
  $( "#createVacationRequestModal" ).remove();
  $( ".modal-backdrop" ).remove();
}


$(window).ready(function(){
if (is_system_freemium == 1) {

(function(proxied) {
  window.alert = function() {
               var message = (!arguments[0]) ? 'null': arguments[0];
               var height  = (!arguments[1]) ? '277px': arguments[1];
               var width   = (!arguments[2]) ? '600': arguments[2];
    top.Show_MenaAlert(message,height,width);
    //top.Show_MenaAlert(message);
  };
})();

}
});
	


// JavaScript Document Designed by Sudheesh S [9786819939]

function ab(){alert("sucess");}
function value(){	var s_dept=document.getElementById("dep");	var s_value=s_dept.options[s_dept.selectedIndex].text;	var r_dept=document.getElementById("regulation");var r_value=r_dept.options[r_dept.selectedIndex].text;	document.getElementById("dep_modal").innerHTML="Dept:"+s_value+" "+"Regulation:"+r_value;}
//Calculate GPa

function gpa(){var c_s1=document.getElementById("s1_c");var g_s1=document.getElementById("s1_g");var s1c_value=c_s1.options[c_s1.selectedIndex].value; var s1g_value=g_s1.options[g_s1.selectedIndex].value;var s1c=parseFloat(s1c_value) * parseFloat(s1g_value) ; var c_s2=document.getElementById("s2_c");var g_s2=document.getElementById("s2_g");var s2c_value=c_s2.options[c_s2.selectedIndex].value;	 var s2g_value=g_s2.options[g_s2.selectedIndex].value;var s2c=parseFloat(s2c_value) * parseFloat(s2g_value) ; var c_s3=document.getElementById("s3_c");var g_s3=document.getElementById("s3_g");var s3c_value=c_s3.options[c_s3.selectedIndex].value; var s3g_value=g_s3.options[g_s3.selectedIndex].value;var s3c=parseFloat(s3c_value) * parseFloat(s3g_value) ; var c_s4=document.getElementById("s4_c");var g_s4=document.getElementById("s4_g");var s4c_value=c_s4.options[c_s4.selectedIndex].value; var s4g_value=g_s4.options[g_s4.selectedIndex].value;var s4c=parseFloat(s4c_value) * parseFloat(s4g_value) ; var c_s5=document.getElementById("s5_c");var g_s5=document.getElementById("s5_g");var s5c_value=c_s5.options[c_s5.selectedIndex].value; var s5g_value=g_s5.options[g_s5.selectedIndex].value;var s5c=parseFloat(s5c_value) * parseFloat(s5g_value) ; var c_s6=document.getElementById("s6_c");var g_s6=document.getElementById("s6_g");var s6c_value=c_s6.options[c_s6.selectedIndex].value; var s6g_value=g_s6.options[g_s6.selectedIndex].value;var s6c=parseFloat(s6c_value) * parseFloat(s6g_value) ; var c_l1=document.getElementById("l1_c");var g_l1=document.getElementById("l1_g");var l1c_value=c_l1.options[c_l1.selectedIndex].value; var l1g_value=g_l1.options[g_l1.selectedIndex].value;var l1c=parseFloat(l1c_value) * parseFloat(l1g_value) ; var c_l2=document.getElementById("l2_c");	var g_l2=document.getElementById("l2_g");var l2c_value=c_l2.options[c_l2.selectedIndex].value; var l2g_value=g_l2.options[g_l2.selectedIndex].value;var l2c=parseFloat(l2c_value) * parseFloat(l2g_value) ; var c_l3=document.getElementById("l3_c");	var g_l3=document.getElementById("l3_g");var l3c_value=c_l3.options[c_l3.selectedIndex].value; var l3g_value=g_l3.options[g_l3.selectedIndex].value;var l3c=parseFloat(l3c_value) * parseFloat(l3g_value) ; var c_l4=document.getElementById("l4_c");var g_l4=document.getElementById("l4_g");var l4c_value=c_l4.options[c_l4.selectedIndex].value; var l4g_value=g_l4.options[g_l4.selectedIndex].value;var l4c=parseFloat(l4c_value) * parseFloat(l4g_value) ; if(s1c_value == 'NA' || s2c_value == 'NA'|| s3c_value == 'NA'|| s4c_value == 'NA'|| s5c_value == 'NA'|| s6c_value == 'NA'|| l1c_value == 'NA'|| l2c_value == 'NA'|| l3c_value == 'NA'|| l4c_value == 'NA'){document.getElementById("total").innerHTML='NA';}
else if(s1g_value == '0' || s2g_value == '0'|| s3g_value == '0'|| s4g_value == '0'|| s5g_value == '0'|| s5g_value == '0'|| l1g_value == '0'|| l2g_value == '0'|| l3g_value == '0'|| l4g_value == '0'){document.getElementById("total").innerHTML='NA';}
else if(s1g_value == 'ab' || s2g_value == 'ab'|| s3g_value == 'ab'|| s4g_value == 'ab'|| s5g_value == 'ab'|| s5g_value == 'ab'|| l1g_value == 'ab'|| l2g_value == 'ab'|| l3g_value == 'ab'|| l4g_value == 'ab'){document.getElementById("total").innerHTML='NA';}
else if(s1g_value == 'wh' || s2g_value == 'wh'|| s3g_value == 'wh'|| s4g_value == 'wh'|| s5g_value == 'wh'|| s5g_value == 'wh'|| l1g_value == 'wh'|| l2g_value == 'wh'|| l3g_value == 'wh'|| l4g_value == 'wh'){document.getElementById("total").innerHTML='NA';}
else if(s1g_value == 'w' || s2g_value == 'w'|| s3g_value == 'w'|| s4g_value == 'w'|| s5g_value == 'w'|| s5g_value == 'w'|| l1g_value == 'w'|| l2g_value == 'w'|| l3g_value == 'w'|| l4g_value == 'w'){document.getElementById("total").innerHTML='NA';}else{var gpa_sum=s1c+s2c+s3c+s4c+s5c+s6c+l1c+l2c+l3c+l4c;var credit_sum=parseFloat(s1c_value)+parseFloat(s2c_value)+parseFloat(s3c_value)+parseFloat(s4c_value)+parseFloat(s5c_value)+parseFloat(s6c_value)+parseFloat(l1c_value)+parseFloat(l2c_value)+parseFloat(l3c_value)+parseFloat(l4c_value);	var total_sum=gpa_sum/credit_sum;document.getElementById("total").innerHTML='GPA :'+total_sum.toFixed(2);	
}}
	
function cgpa_calc(){
	
	var s_dept=document.getElementById("dep");
	var s_value=s_dept.options[s_dept.selectedIndex].text;	
	var r_dept=document.getElementById("regulation");
	var r_value=r_dept.options[r_dept.selectedIndex].value;
	
	
	var g11=document.getElementById("cr1").value;
	var g21=document.getElementById("cr2").value;
	var g31=document.getElementById("cr3").value;
	var g41=document.getElementById("cr4").value;
	var g51=document.getElementById("cr5").value;
	var g61=document.getElementById("cr6").value;
	var g71=document.getElementById("cr7").value;
	var g81=document.getElementById("cr8").value;
	
if(g11 === ""){g11=0;}else if(g21 === ""){g21=0;}else if(g31 === ""){g31=0;}else if(g41 === ""){g41=0;}else if(g51 === ""){g51='0';}else if(g61 === ""){g61='0';}else if(g71 === ""){g71='0';}else if(g81 === ""){g81='0';}
	var g1=parseFloat(g11);
	var g2=parseFloat(g21);
	var g3=parseFloat(g31);
	var g4=parseFloat(g41);
	var g5=parseFloat(g51);
	var g6=parseFloat(g61);
	var g7=parseFloat(g71);
	var g8=parseFloat(g81);
	
	
	if(g11 === ""){g11='0';}else if(g21 === ""){g21='0';}else if(g31 === ""){g31='0';}else if(g41 === ""){g41='0';}else if(g51 === ""){g51=0;}else if(g61 === ""){g61=0;}else if(g71 === ""){g71=0;}else if(g81 === ""){g81=0;}
	
if(r_value == '2014'){
	if(s_value == 'Civil Engineering'){
		var arr = [22,22,24,25,26,24,23,21];
		document.getElementById("gpc1").innerHTML=arr[0];
		document.getElementById("gpc2").innerHTML=arr[1];
		document.getElementById("gpc3").innerHTML=arr[2];
		document.getElementById("gpc4").innerHTML=arr[3];
		document.getElementById("gpc5").innerHTML=arr[4];
		document.getElementById("gpc6").innerHTML=arr[5];
		document.getElementById("gpc7").innerHTML=arr[6];
		document.getElementById("gpc8").innerHTML=arr[7];
		var total=0;
		for(var i in arr) { total += arr[i]; }
		
		var cr_total=g1*arr[0]+g2*arr[1]+g3*arr[2]+g4*arr[3]+g5*arr[4]+g6*arr[5]+g7*arr[6]+g8*arr[7];
		
		var cgpa_t=cr_total/total;
		
		document.getElementById("total_cgpa").innerHTML=cgpa_t.toFixed(2);
		
		}
	else if(s_value =='Computer Science and Engineering'){}
	else if(s_value =='Chemical Engineering'){}
    else if(s_value =='Electronics and Communication Engineering'){}
    else if(s_value =='Electrical Engineering'){}
    else if(s_value =='Electronics and Instrumentation Engineering'){}
    else if(s_value =='information Technology'){}
    else if(s_value =='Food Tecnology'){}
    else if(s_value =='Mechanical Engineering'){}
    else if(s_value =='Mechatronics'){}
    else if(s_value =='Master of Business Administration'){}
    else if(s_value =='Master of Computer Application'){}
	}
	
else if(r_value == '2011'){
	if(s_value =='Civil Engineering'){}
	else if(s_value =='Computer Science and Engineering'){}
	else if(s_value =='Chemical Engineering'){}
    else if(s_value =='Electronics and Communication Engineering'){}
    else if(s_value =='Electrical Engineering'){}
    else if(s_value =='Electronics and Instrumentation Engineering'){}
    else if(s_value =='information Technology'){}
    else if(s_value =='Food Tecnology'){}
    else if(s_value =='Mechanical Engineering'){}
    else if(s_value =='Mechatronics'){}
    else if(s_value =='Master of Business Administration'){}
    else if(s_value =='Master of Computer Application'){}
	}
else if(r_value == '2009'){
	if(s_value =='Civil Engineering'){}
	else if(s_value =='Computer Science and Engineering'){}
	else if(s_value =='Chemical Engineering'){}
    else if(s_value =='Electronics and Communication Engineering'){}
    else if(s_value =='Electrical Engineering'){}
    else if(s_value =='Electronics and Instrumentation Engineering'){}
    else if(s_value =='information Technology'){}
    else if(s_value =='Food Tecnology'){}
    else if(s_value =='Mechanical Engineering'){}
    else if(s_value =='Mechatronics'){}
    else if(s_value =='Master of Business Administration'){}
    else if(s_value =='Master of Computer Application'){}
	}
	

	
}
    

function aa(){
	alert('a');
	}

$(document).ready(function(){
  $("#stress-survey").submit(function(event){

  var symptomsChecked = []
  $("input:checkbox[name=symptoms]:checked").each(function(){
    symptomsChecked.push($(this).val());
  });

  var curesChecked = []
  $("input:checkbox[name=cure]:checked").each(function(){
    curesChecked.push($(this).val());
  });

if (symptomsChecked.length > curesChecked.length){
  alert("Seek Professional Help")
}
else if (symptomsChecked.length < curesChecked.length){
  alert("Keep up the great work!")
}else alert("You are Neutral")

  event.preventDefault();
  });
});

document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  
  if(day === "tuesday" || day === "thursday"){
    document.getElementById("placeToSee").innerHTML = "Class day!"
  }else if(day === "saturday" || day === "sunday"){
     document.getElementById("placeToSee").innerHTML = "Weekend!"
  }else if(day === "wednesday"){
      document.getElementById("placeToSee").innerHTML = "Hump Day!"
  }else{
     document.getElementById("placeToSee").innerHTML = "Boring."
  }

}
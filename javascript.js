var genText = document.getElementById('generator');
var btnAdd = document.getElementById('add')
var btnSubtract = document.getElementById('subtract')
var input = document.querySelector('input')

function myCopyFunction() {
  genText.select();
  genText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  console.log("Copy Success!")
}

btnAdd.addEventListener('click', () =>{
  input.value = parseInt(input.value) + 1;
}); 

btnSubtract.addEventListener('click', () =>{
  input.value = parseInt(input.value) - 1;
}); 

function generate() {
  genText.value = `<div class="accordion" id="accordion${input.value}">
  <div class="card">
    <h4><button class="card-header collapsed" data-toggle="collapse" data-target="#accordion1_content1" aria-expanded="false" aria-controls="accordion1_content1" id="headingOne">
      
    </button></h4>
    <div id="accordion1_content1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion1">
      <div class="card-body">
  
      </div>
    </div>
  </div>
  <div class="card">
  <h4><button class="card-header collapsed" data-toggle="collapse" data-target="#accordion1_content2" aria-expanded="false" aria-controls="accordion1_content2" id="headingTwo">
    
  </button></h4>
  <div id="accordion1_content2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
    <div class="card-body">
      
    </div>
  </div>
  </div>
  <div class="card">
  <h4><button class="card-header collapsed" data-toggle="collapse" data-target="#accordion1_content3" aria-expanded="false" aria-controls="accordion1_content3" id="headingThree">
        
      </button></h4>
      <div id="accordion1_content3" class="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
        <div class="card-body">
          
        </div>
      </div>
    </div>
  </div>
  `
}
var genText = document.getElementById('generator');
var genClipText = document.getElementById('generatorClip');
var teacherText = document.getElementById('generatorTeacher');
var btnAdd = document.getElementById('add')
var btnSubtract = document.getElementById('subtract')
var input = document.querySelector('input')

function myCopyFunction() {
  genText.select();
  genText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function myCopyFunction1() {
  genClipText.select();
  genClipText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}


btnAdd.addEventListener('click', () => {
  input.value = parseInt(input.value) + 1;
});

btnSubtract.addEventListener('click', () => {
  input.value = parseInt(input.value) - 1;
});

function generate() {
  genText.value = `<div class="accordion" id="accordion${input.value}">
  <div class="card">
    <h4><button class="card-header collapsed" data-toggle="collapse" data-target="#accordion${input.value}_content1" aria-expanded="false" aria-controls="accordion${input.value}_content1" id="heading${input.value}One">
      
    </button></h4>
    <div id="accordion${input.value}_content1" class="collapse" aria-labelledby="heading${input.value}One" data-parent="#accordion${input.value}">
      <div class="card-body">
  
      </div>
    </div>
  </div>
  <div class="card">
  <h4><button class="card-header collapsed" data-toggle="collapse" data-target="#accordion${input.value}_content2" aria-expanded="false" aria-controls="accordion${input.value}_content2" id="heading${input.value}Two">
    
  </button></h4>
  <div id="accordion${input.value}_content2" class="collapse" aria-labelledby="heading${input.value}Two" data-parent="#accordion${input.value}">
    <div class="card-body">
      
    </div>
  </div>
  </div>
  <div class="card">
  <h4><button class="card-header collapsed" data-toggle="collapse" data-target="#accordion${input.value}_content3" aria-expanded="false" aria-controls="accordion${input.value}_content3" id="heading${input.value}Three">
        
      </button></h4>
      <div id="accordion${input.value}_content3" class="collapse" aria-labelledby="heading${input.value}Three" data-parent="#accordion${input.value}">
        <div class="card-body">
          
        </div>
      </div>
    </div>
  </div>
  `
}

function generateClip() {
  genClipText.value = `<p><a class="btn btn-primary" data-toggle="collapse" href="#collapse${input.value}" role="button"
  aria-expanded="false" aria-controls="collapse${input.value}">href</a></p>
 <div class="collapse" id="collapse${input.value}">
   <div class="card card-body">

   </div>
 </div>`
}

function generateTeacher() {
  var text = "";
  var charset = "abcde";

  text += charset.charAt(Math.floor(Math.random() * charset.length));
  console.log(text)

  teacherText.value = `<div class="teachernote_${text}">
  <p class="sr-only">Note to teachers: See your teacher guide for collaboration tools, ideas and suggestions.</p>
</div>`
}
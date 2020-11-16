<template>
  <div>
    <Header />
    <h3 class="my-5">Form validation</h3>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-1">
          <form ref="formValidation" class="formValidation" action="" method="" style="width:100%;">
            <input type="text" class="name field mb-3" name="name" placeholder="name"><br>
            <input type="tel" ref="tel field" class="tel field mb-3" name="tel" placeholder="tel"><br>
            <input type="email" ref="email field" class="email field mb-3" name="email" placeholder="email"><br>
            <textarea ref="textarea field" class="textarea field mb-3" id="" rows="5" name="text" placeholder="text here..."></textarea><br>
            <input type="submit" ref="btn" class="btn btn-primary" value="Send" @click="ClickValidation()">
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Contacts',
  components: {
    Header,
    Footer
  },
  methods: {
    func() {
      console.log("work")
    },

    checkValidation (field, reg_exp, err_text) {
      let err = document.createElement('p');
      if(!field.value.match(reg_exp)) {
        err.style.color = 'red';
        err.className = "error";
        if(field.value == "") {
          err_text = 'Поле ' + "'"+field.name+"'" +' не должно быть пустым';
        }
          err.innerHTML = err_text;
          field.style.border = 1+"px solid red";
      } 
      field.parentElement.insertBefore(err, field);
    },

    ClickValidation () {
      // event.preventDefault();
      let errors = form.querySelectorAll('.error');
      for (var i = 0; i < errors.length; i++) {
        errors[i].remove();
        fields[i].style.border = "";
      }
      
      checkValidation(this.$refs.name, /^[a-zA-Z,а-яА-я]{3,10}$/, "Поле "+ "'"+this.$refs.name.name+"'" +" должно содержать только латиницу или кирилицу, миним. кол-во символов:3, максим. кол-во 10");
      
      checkValidation(this.$refs.tel, /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/, "Поле "+ "'"+this.$refs.tel.name+"'" +" должно быть в формате +7(000)000-0000");

      checkValidation(this.$refs.mail, /^([a-z]{1,10}|[a-z]{2}\-[a-z]{1,10}|[a-z]{2}\.[a-z]{1,10})\@[a-z]{4}\.[a-z]{2}$/, "Поле "+ "'"+this.$refs.mail.name+"'" +" должно быть в формате mymail@mail.ru или my.mail@mail.ru или my-mail@mail.ru");

      checkValidation(this.$refs.message, /^[а-яА-я \.]|\b[^\$({"]+[a-zA-Z \.]$/, "Поле "+ "'"+message.name+"'" +" не должно содержать спец символов или цифр");
    }
  }
}


// let form = document.querySelector('.formValidation');
// let name = form.querySelector('.name');
// let tel = form.querySelector('.tel');
// let mail = form.querySelector('.email');
// let message = form.querySelector('.textarea');
// let btn = form.querySelector('.btn');
// let fields = form.querySelectorAll('.field');

// function checkValidation(field, reg_exp, err_text) {
//   let err = document.createElement('p');
//   if(!field.value.match(reg_exp)) {
//       err.style.color = 'red';
//     err.className = "error";
//     if(field.value == "") {
//       err_text = 'Поле ' + "'"+field.name+"'" +' не должно быть пустым';
//     }
//       err.innerHTML = err_text;
//       field.style.border = 1+"px solid red";
//   } 
//   field.parentElement.insertBefore(err, field);
// }

// btn.onclick = function(event) {
//   event.preventDefault();
//   let errors = form.querySelectorAll('.error');
//   for (var i = 0; i < errors.length; i++) {
//     errors[i].remove();
//     fields[i].style.border = "";
//   }
  
//   checkValidation(name, /^[a-zA-Z,а-яА-я]{3,10}$/, "Поле "+ "'"+name.name+"'" +" должно содержать только латиницу или кирилицу, миним. кол-во символов:3, максим. кол-во 10");
  
//   checkValidation(tel, /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/, "Поле "+ "'"+tel.name+"'" +" должно быть в формате +7(000)000-0000");

//   checkValidation(mail, /^([a-z]{1,10}|[a-z]{2}\-[a-z]{1,10}|[a-z]{2}\.[a-z]{1,10})\@[a-z]{4}\.[a-z]{2}$/, "Поле "+ "'"+mail.name+"'" +" должно быть в формате mymail@mail.ru или my.mail@mail.ru или my-mail@mail.ru");

//   checkValidation(message, /^[а-яА-я \.]|\b[^\$({"]+[a-zA-Z \.]$/, "Поле "+ "'"+message.name+"'" +" не должно содержать спец символов или цифр");

// };
</script>

<style>
  .row, .field {
    width: 100%;
  }
  .btn {
    width: 50%;
  }
</style>
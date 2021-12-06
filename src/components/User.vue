<template>
  <div class="wrap">
    <form class="form">
        <h3 class="heading">Thông tin nhân viên!</h3>
        <div class="form-group">
                <label for="fullname" class="form-label">Họ tên</label>
                <input v-model="fullname" name="fullname" type="text" class="form-control">
        </div>
        <div class="form-group">
                <label for="position" class="form-label">Chức vụ</label>
                <input v-model="position" name="position" type="text" class="form-control">
        </div>
        <div class="form-group">
                <label for="tel" class="form-label">SĐT</label>
                <input v-model="tel" name="tel" type="text" class="form-control">
        </div>
        <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" name="email" type="text" class="form-control">
        </div>
         <div class="form-group">
                <label for="avt" class="form-label">Ảnh</label>
                <input v-on:change="handleUploadImage" type="file" />
        </div>
    </form>
    <div class="display">
        <div class="display-logo">
            <img src="../assets/logo.png" width="50px" alt="" class="logo">
        </div>
        <div class="display-body">
            <div class="avt">
                <img class="avt-img" :src="base64URLs" alt="">
            </div>
            <h4 class="display-body-name">{{fullname}}</h4>
            <p class="display-body-position">{{position}}</p>
        </div>
        <div class="display-contact">
            <p class="display-contact-phone">{{tel}}</p>
            <p class="display-contact-email">{{email}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  fullname: 'User',
  data() {
    return {
      base64URLs: "",
      fullname: "",
      position: "",
      tel: "",
      email: "",
    }
  },
   methods: {
    ...mapActions(["login"]),
    handleUploadImage(e) {
      if (e.target.files && e.target.files.length) {
        const imageUpload = e.target.files[0];
        console.log("e.target.files[0]", e.target.files[0]);

        let reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            let previewSrc = reader.result;
            console.log("previewSrc", previewSrc);
            this.base64URLs = previewSrc;
          },
          false
        );
        if (imageUpload) {
          reader.readAsDataURL(imageUpload);
        }
      }
    }, 
  },
  
}
</script>

<style scoped>
    .wrap{
        display: flex;
        justify-content: space-around;
        margin-top: 40px;
    }

    .form {
        width: 360px;
        min-height: 100px;
        padding: 32px 24px;
        text-align: center;
        background: #fff;
        border-radius: 2px;
        margin: 0 24px;
        align-self: center;
        box-shadow: 0px 12px 23px 0px #c1c1c1;
    }

    .heading{
        color: #1dbfaf;
    }

    .form-group {
        display: flex;
        margin-bottom: 16px;
        flex-direction: column;
    }

    .form-label {
        font-weight: 700;
        padding-bottom: 2px;
        line-height: 1.8rem;
        font-size: 1.4rem;
        text-align: left;
    }

    .form-control {
        height: 40px;
        padding: 8px 12px;
        border: 1px solid #b3b3b3;
        border-radius: 3px;
        outline: none;
        font-size: 1.4rem;
    }

    .display{
        width: 340px;
        min-height: 100px;
        font-size: 1.4rem;
        box-shadow: 0px 12px 23px 0px #c1c1c1;
    }

    .display-logo{
        margin: 12px 0;
    }

    .avt-img{
        border: 1px solid #ccc;
        width: 150px;
        height: 200px;
        margin-bottom: 16px;
    }

    .display-body-name,
    .display-body-position
    {
        font-weight: 700;
    }

    .display-contact{
        display: flex;
        justify-content: space-around;
        margin-top: 70px;
        font-size: 1.4rem;
    }

</style>
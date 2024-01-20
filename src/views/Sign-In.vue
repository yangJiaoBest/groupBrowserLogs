<template>
  <div>
    <!-- Default Layout -->
    <a-layout class="layout-default" id="layout-default">
      <!-- Page Content -->
      <a-layout-content>
        <div class="sign-in">
          <a-row
            type="flex"
            :gutter="[24, 24]"
            justify="space-around"
            align="middle"
          >
            <!-- Sign In Form Column -->
            <a-col
              :span="24"
              :md="12"
              :lg="{ span: 12, offset: 0 }"
              :xl="{ span: 6, offset: 2 }"
              class="col-form"
            >
              <h1>Sign In</h1>
              <h5 class="font-regular text-muted">
                Enter your username and password to sign in
              </h5>

              <a-form>
                <a-form-item
                  label="用户名"
                  :colon="false"
                  v-bind="validateInfos.username"
                >
                  <a-input
                    placeholder="用户名"
                    v-model:value="modelRef.username"
                  />
                </a-form-item>
                <a-form-item
                  label="密码"
                  :colon="false"
                  v-bind="validateInfos.password"
                >
                  <a-input
                    type="password"
                    placeholder="密码"
                    v-model:value="modelRef.password"
                  />
                </a-form-item>

                <a-form-item>
                  <a-button
                    type="primary"
                    block
                    html-type="submit"
                    size="large"
                    class="login-form-button"
                    @click="onSubmit"
                    >SIGN IN</a-button
                  >
                </a-form-item>
              </a-form>
              <!-- / Sign In Form -->
            </a-col>
            <!-- / Sign In Form Column -->

            <!-- Sign In Image Column -->
            <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
              <img src="../assets/image/login.jpg" alt="" />
            </a-col>
            <!-- Sign In Image Column -->
          </a-row>
        </div>
      </a-layout-content>
      <!-- / Page Content -->
    </a-layout>
    <!-- / Default Layout -->
  </div>
</template>

<script setup>
import { reactive, toRaw } from "vue";
import { Form, notification } from "ant-design-vue";
import { apiLogin } from "../api/index";

const [api, contextHolder] = notification.useNotification();

const openNotification = (placement) => {
  api.error({
    message: "账号或者密码错误,请重新尝试!",
    placement,
  });
};

const useForm = Form.useForm;

const modelRef = reactive({
  username: "",
  password: "",
});

const rulesRef = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名!",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码!",
    },
  ],
});

const { validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => console.log(...args),
});

const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef));
      const data = toRaw(modelRef);
      apiLogin(data)
        .then((response) => {
          if (response.code == 0) {
            // 登录成功以后,跳转到首页
            localStorage.setItem("token", "login-success");
            window.location.href = "/index";
          }
        })
        .catch((error) => {
          localStorage.clear();
        });
    })
    .catch((err) => {
      openNotification();
    });
};
</script>

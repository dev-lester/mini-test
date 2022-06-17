App({
  todos: [
    { title: 'Feed Cat', completed: true },
    { title: 'Eat lunch', completed: true },
    { title: 'Walk', completed: false },
    { title: 'Study', completed: true },
  ],

  userinfo: null,

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userinfo) resolve(this.userinfo);
      
      my.getAuthCode({
        scopes: authcode => {
          console.log(authcode);
          my.getAuthUserInfo({
            success: res => {
              this.userinfo = res;
              resolve(this.userinfo);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },
});

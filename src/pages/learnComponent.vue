<template>
  <div id="jumbotron">
    <navbar>
      <!-- 這段 code 將會被插入在上面我們設計的地方（ nav 右邊）  -->
      <div slot="right">
        <div class="form-group">
          <input type="text" placeholder="Email" class="form-control" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-success">Sign in</button>
      </div>
    </navbar>
    <jumbotron />
    <container :list="list" />
  </div>
</template>

<script>
import Navbar from "../components/navbar";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";

export default {
  // 2. 在 vue 宣告使用
  components: {
    Navbar,
    Jumbotron,
    Container
  },
  data() {
    return {
      list: [
        {
          title: "Heading",
          info:
            "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        },
        {
          title: "Heading",
          info:
            "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        },
        {
          title: "Heading",
          info:
            "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
          btntext: "View details »"
        }
      ]
    };
  }
};
</script>
<style>
/* Move down content because we have a fixed navbar that is 50px tall */
#jumbotron {
  padding-top: 50px;
  padding-bottom: 20px;
}
</style>

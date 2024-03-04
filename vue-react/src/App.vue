<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

 <template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <!--   <ItemCard />
  <CheckOut /> -->
  <RouterView />
</template> 

<style scoped>
.wrapper {
  text-align: center;
}
nav {
  font-size: 20px;
  text-align: center;
  margin-right: 20%;
}

</style>

<script>
  import { Router } from "svelte-navigator";
  import Footer from "./layout/footer/Footer.svelte";
  import Main from "./layout/main/Main.svelte";
  import Navigation from "./layout/navigation/Navigation.svelte";

  const navigation = {
    brand: "hiringroom",
    actions: [
      {
        label: "Offers",
        path: "/offers",
      },
    ],
    sections: [],
  };
</script>

<Router>
  <div class="h-screen overflow-hidden">
    <Navigation {navigation} />
    <Main />
    <Footer />
  </div>
</Router>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

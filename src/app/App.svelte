<script>
  import { Router } from "svelte-navigator";
  import LayoutService from "./services/layout/LayoutService";
  import Navigation from "./layout/navigation/Navigation.svelte";
  import Main from "./layout/main/Main.svelte";
  import Footer from "./layout/footer/Footer.svelte";
</script>

<Router>
  <div class="2xl:max-h-screen overflow-hidden flex flex-col">
    <Navigation navigation={LayoutService.getNavigation()} />
    <Main main={LayoutService.getMain()} />
    <Footer footer={LayoutService.getFooter()} />
  </div>
</Router>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

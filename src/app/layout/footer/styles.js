import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    footer: StyleSheet("relative h-20 w-screen bg-dark text-primary-light mx-auto text-right bg-black", {
        author: StyleSheet("absolute bottom-0 px-3 py-1 font-bold w-full")
    })
};
import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    footer: StyleSheet("relative h-32 lg:h-20 w-screen bg-dark text-primary-light mx-auto text-right bg-black", {
        author: StyleSheet("absolute top-0 right-5 px-3 py-1 font-bold w-full")
    })
};
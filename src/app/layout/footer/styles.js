import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    footer: StyleSheet("relative 2xl:absolute 2xl:bottom-0 h-32 lg:h-20 w-screen bg-dark text-primary-light mx-auto text-right bg-black", {
        author: StyleSheet("absolute bottom-0 right-5 px-3 py-1 font-bold w-full")
    })
};
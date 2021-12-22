import StyleSheet from "../../../tailwind/StyleSheet";

export default {
    rating: StyleSheet("flex space-x-2 items-center", {
        pointInactive: StyleSheet("bg-green-900 h-3 w-3 flex rounded-full"),
        pointActive: StyleSheet("bg-green-500 h-3 w-3 flex rounded-full"),
    })
}
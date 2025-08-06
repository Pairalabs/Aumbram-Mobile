/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
		fontFamily: {
            'Satoshi-Variable': ['Satoshi-Variable'],
			'Inter-Medium': ['Inter-Medium'],
			'Inter-Regular': ['Inter-Regular'],
			'Inter-SemiBold': ['Inter-SemiBold'],
			'Inter-Thin': ['Inter-Thin'],
			'Inter-Light': ['Inter-Light'],
			'Inter-ExtraLight': ['Inter-ExtraLight'],
			'Inter-ExtraBold': ['Inter-ExtraBold'],
			'Inter-Bold': ['Inter-Bold'],
			'Inter-Black': ['Inter-Black'],
        },
	},
  },
  plugins: [],
}
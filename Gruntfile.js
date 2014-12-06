module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["dist/css"],
					yuicompress: true
				},
			files: {
				"dist/css/style.css": "less/style.less"
			}
		}
	},
	watch: {
		files: "less/**/*.less",
		tasks: ["less"]
	}
});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};


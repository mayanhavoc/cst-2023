export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.47bb0551.js","imports":["_app/immutable/entry/start.47bb0551.js","_app/immutable/chunks/index.95237b05.js","_app/immutable/chunks/singletons.693de6b8.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8ace9e40.js","imports":["_app/immutable/entry/app.8ace9e40.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.95237b05.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

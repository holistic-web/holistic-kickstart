import landingRoutes from '../containers/Landing';
// import documentTypeARoutes from '../containers/DocumentTypeA';
// import documentTypeBRoutes from '../containers/DocumentTypeB';


const routes = [
	...landingRoutes,
	// ...documentTypeARoutes,
	// ...documentTypeBRoutes,
	{
		path: '*',
		redirect: { name: 'landing.page' }
	}
];

export default routes;

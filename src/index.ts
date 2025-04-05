import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';

const layoutElement = document.querySelector('single-spa-router');
if (!layoutElement) {
  throw new Error('Could not find single-spa-router element');
}

const routes = constructRoutes(layoutElement);
const applications = constructApplications({
  routes,
  loadApp({ name }: { name: string }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start(); 
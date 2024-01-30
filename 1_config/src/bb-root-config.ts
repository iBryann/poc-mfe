import axios from 'axios';
import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import { TApp } from './@types';
import { generateTemplate } from './utils/template';

axios
  .get<TApp[]>('http://localhost:9000/applications.json')
  .then(({ data: apps }) => {
    const template = generateTemplate(apps);
    const routes = constructRoutes(template);
    const applications = constructApplications({
      routes,
      loadApp({ name }) {
        return System.import(name);
      },
    });
    const layoutEngine = constructLayoutEngine({ routes, applications });

    applications.forEach(registerApplication);
    layoutEngine.activate();
    start();
  });
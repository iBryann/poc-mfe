import { TApp } from '../@types';
import page404 from '../template/404.html';

function genRoute({ exact, name, path }: TApp) {
  return `
    <route path="${path}" ${exact ? 'exact' : ''}>
      <application name="${name}"></application>
    </route>
  `;
}

function genRouteTemplate(apps: TApp[]) {
  return apps
    .map((app) => {
      let list = genRoute(app);

      list += app.routes
        .map((path) => genRoute({ ...app, path, exact: false }))
        .join('');

      return list;
    })
    .join('');
}

export function genRoutes(apps: TApp[]) {
  return `
    <single-spa-router>
      ${genRouteTemplate(apps)}

      <route default>
        ${page404}
      </route>
    </single-spa-router>
  `;
}

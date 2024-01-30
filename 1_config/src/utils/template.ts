import { TApp } from '../@types';

export function generateRoutes(apps: TApp[]) {
  const htmlRoutes = apps.map(({ exact, name, path }) => `
    <route path="${path}" ${exact ? 'exact' : ''}>
      <application name="${name}"></application>
    </route>
  `);

  return htmlRoutes.join('');
}

export function generateTemplate(apps: TApp[]) {
  const htmlTemplate = `
    <single-spa-router>
      ${generateRoutes(apps)}

      <route default>
        <application name="@bb/404"></application>
      </route>
    </single-spa-router>
  `;

  return htmlTemplate;
}
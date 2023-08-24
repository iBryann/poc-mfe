import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@bb/simple",
  app: () => System.import<LifeCycles>("@bb/simple"),
  activeWhen: location => location.pathname === "/",
  customProps(appName, location) {
    return {
      appName,
      location: location.pathname,
      authToken: localStorage.getItem('@auth') || 'vazio'
    }
  }
});

registerApplication({
  name: "@bb/routes",
  app: () => System.import<LifeCycles>("@bb/routes"),
  activeWhen: ["/routes"],
});

start({
  urlRerouteOnly: true,
});

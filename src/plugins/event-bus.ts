import { createApp } from 'vue';

const eventBus = {
  install: (app:any) => {
    app.config.globalProperties.$bus = app;
  },
};

const app = createApp({});

app.use(eventBus);

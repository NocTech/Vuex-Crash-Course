
import todos from './modules/todos';
import { createStore } from 'vuex';

export const store = createStore({

  modules: {
    todos
  }
});

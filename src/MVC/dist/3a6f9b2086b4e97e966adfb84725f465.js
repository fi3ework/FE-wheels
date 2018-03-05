// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(conf) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.view = conf.view;
    this.model = conf.model;
    this.render = this.render.bind(this);
    this.container = document.querySelector(conf.container);
    this.container.addEventListener('click', function (e) {
      e.stopPropagation();
      var rules = Object.keys(conf.onClick || {});
      rules.forEach(function (rule) {
        if (e.path[0].matches(rule)) {
          conf.onClick[rule].call(_this, e);
          console.log(_this.model.data);
        }
      });
    });
  }

  _createClass(Controller, [{
    key: 'getChild',
    value: function getChild(selector) {
      return this.container.querySelector(selector);
    }
  }, {
    key: 'getTargetAttr',
    value: function getTargetAttr(e, attr) {
      return e.target.getAttribute(attr);
    }
  }, {
    key: 'render',
    value: function render() {
      this.container.innerHTML = this.view(this.model);
    }
  }]);

  return Controller;
}();

exports.default = Controller;
},{}],21:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(data) {
    _classCallCheck(this, Model);

    this.data = data;
    this.listeners = [];
  }

  _createClass(Model, [{
    key: "publish",
    value: function publish(data) {
      this.listeners.forEach(function (listener) {
        return listener(data);
      });
    }
  }]);

  return Model;
}();

exports.default = Model;
},{}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = exports.Controller = undefined;

var _Controller = require('./Controller');

var _Controller2 = _interopRequireDefault(_Controller);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Controller = _Controller2.default;
exports.Model = _Model2.default;
},{"./Controller":14,"./Model":21}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = require('./mvc/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoController = function (_Controller) {
  _inherits(TodoController, _Controller);

  function TodoController(model, view) {
    _classCallCheck(this, TodoController);

    var _this = _possibleConstructorReturn(this, (TodoController.__proto__ || Object.getPrototypeOf(TodoController)).call(this, {
      model: model,
      view: view,
      container: '.todo-container',
      onClick: {
        '.btn-add': function btnAdd() {
          var text = this.addText;
          this.model.todos = this.model.todos.concat([{
            text: text,
            id: new Date().getTime().toString()
          }]);
        },
        '.btn-delete': function btnDelete(e) {
          var id = this.getTargetAttr(e, 'data-id');
          this.model.todos = this.model.todos.filter(function (todo) {
            return todo.id !== id;
          });
        },
        '.btn-unfinish': function btnUnfinish(e) {
          var id = this.getTargetAttr(e, 'data-id');
          this.model.todos = this.model.todos.map(function (todo) {
            return {
              id: todo.id,
              done: todo.id === id ? false : todo.done,
              text: todo.text
            };
          });
        },
        '.btn-finish': function btnFinish(e) {
          var id = this.getTargetAttr(e, 'data-id');
          this.model.todos = this.model.todos.map(function (todo) {
            return {
              id: todo.id,
              done: todo.id === id ? true : todo.done,
              text: todo.text
            };
          });
        },
        '.btn-update': function btnUpdate(e) {
          var id = this.getTargetAttr(e, 'data-id');
          var text = this.addText;
          this.model.todos = this.model.todos.map(function (todo) {
            return {
              id: todo.id,
              done: todo.done,
              text: todo.id === id ? text : todo.text
            };
          });
        }
      }
    }));

    _this.model.listeners.push(_this.render);
    return _this;
  }

  _createClass(TodoController, [{
    key: 'addText',
    get: function get() {
      return _get(TodoController.prototype.__proto__ || Object.getPrototypeOf(TodoController.prototype), 'getChild', this).call(this, '.input-add').value;
    }
  }]);

  return TodoController;
}(_index.Controller);

exports.default = TodoController;
},{"./mvc/index":12}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var todos = _ref.todos;

  var todoList = todos.map(function (todo) {
    return '\n    <li>\n      <span class="' + (todo.done ? 'finish' : 'unfinish') + '">' + todo.text + '</span>\n      <button data-id="' + todo.id + '" class="btn-finish">\n        Finish\n      </button>\n      <button data-id="' + todo.id + '" class="btn-unfinish">\n        undo\n      </button>\n      <button data-id="' + todo.id + '" class="btn-update">\n        update\n      </button>\n      <button data-id="' + todo.id + '" class="btn-delete">\n        Delete\n      </button>\n    </li>\n    ';
  });

  return '\n  <input class=\'input-add\' />\n  <button class=\'btn-add\'>add</button>\n  <ul>\n    ' + todoList.join('') + '\n  </ul>\n  ';
};
},{}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./mvc/index');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoModel = function (_Model) {
  _inherits(TodoModel, _Model);

  function TodoModel(initialTodos) {
    _classCallCheck(this, TodoModel);

    return _possibleConstructorReturn(this, (TodoModel.__proto__ || Object.getPrototypeOf(TodoModel)).call(this, initialTodos || { todos: [] }));
  }

  _createClass(TodoModel, [{
    key: 'todos',
    get: function get() {
      return this.data.todos;
    },
    set: function set(newTodos) {
      this.data.todos = newTodos;
      this.publish(newTodos);
    }
  }]);

  return TodoModel;
}(_index.Model);

exports.default = TodoModel;
},{"./mvc/index":12}],4:[function(require,module,exports) {
'use strict';

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var m = new _model2.default({
  todos: [{ text: 'first', id: '1', done: false }, { text: 'second', id: '2', done: false }, { text: 'third', id: '3', done: false }]
});
var c = new _controller2.default(m, _view2.default);
c.render();
},{"./controller":7,"./view":6,"./model":8}],36:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '57894' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[36,4])
//# sourceMappingURL=/dist/3a6f9b2086b4e97e966adfb84725f465.map
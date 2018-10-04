import { View } from './view';
import { Model } from './model';
import { Controller } from './controller';

let view = new View();
let model = new Model();
let controller = new Controller(view, model);
controller.init();

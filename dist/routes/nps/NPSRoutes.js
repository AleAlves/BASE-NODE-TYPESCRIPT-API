"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NPSController_1 = require("../../controllers/nps/NPSController");
class NPSRoutes {
    constructor(app, root) {
        this.npsController = new NPSController_1.NPSController();
        this.app = app;
        this.root = root;
        this.addNewNPS();
        this.getNPS();
        this.getNPSWithID();
        this.updateNPS();
        this.deleteNPS();
    }
    addNewNPS() {
        let version = "v1";
        this.app.route(this.root + version + '/nps').post(this.npsController.addNewNPS);
    }
    getNPS() {
        let version = "v1";
        this.app.route(this.root + version + '/nps').get(this.npsController.getNPS);
    }
    getNPSWithID() {
        let version = "v1";
        this.app.route(this.root + version + '/nps/:npsID').get(this.npsController.getNPSWithID);
    }
    updateNPS() {
        let version = "v1";
        this.app.route(this.root + version + '/nps/:npsID').post(this.npsController.updateNPS);
    }
    deleteNPS() {
        let version = "v1";
        this.app.route(this.root + version + '/nps/:npsID').delete(this.npsController.deleteNPS);
    }
}
exports.NPSRoutes = NPSRoutes;
//# sourceMappingURL=NPSRoutes.js.map